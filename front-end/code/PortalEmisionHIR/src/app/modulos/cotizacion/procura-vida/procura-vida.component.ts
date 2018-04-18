import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { Cotizacion }						  from '../cotizacion';

import { CotizacionService }				  from '../cotizacion.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator }				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

import { MODULOS }							  from 'app/core/data/modulos';
import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';

@Component({
	selector: 'pehir-procura-vida',
	templateUrl: 'procura-vida.component.html'
})

export class ProcuraVidaComponent implements OnInit {
	private idProducto: number = 2;

	titulo: string = 'Cotización - Procura Vida';
	frmProcuraVida: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];

	modulos = MODULOS;
	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;

	constructor(
		private cotizacionService: CotizacionService,
		private fb: FormBuilder,
		private router: Router,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();

		if( this.cotizacionService.esEdicion() ) {
			this.mostrarDatosEdicion();
		}
	}

	private leerCatalogos(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/2' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/2' )
							.subscribe( response => this.formasPago = response.data );
	}

	private crearFormulario(): void {
		this.frmProcuraVida = this.fb.group({
			'nombre': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'apaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'amaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'fechanac': ['', Validators.compose([
				Validators.required,
				EntreEdadesValidator(18,64)
			])],
			'rfc': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'genero': ['', Validators.compose([
				Validators.required
			])],
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])],
			'fpago': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	private mostrarDatosEdicion(): void {
		let cotizacion: Cotizacion = this.cotizacionService.obtenerCotizacion();

		let fechaCapturada: Date = cotizacion.fechanac;

		let objetoFechaCal = {
			date: {
				year: fechaCapturada.getFullYear(),
				month: fechaCapturada.getMonth() + 1,
				day: fechaCapturada.getDate()
			},
			epoc: fechaCapturada.getTime() / 1000,
			jsdate: fechaCapturada
		};

		this.frmProcuraVida.get( 'nombre' ).setValue( cotizacion.nombre );
		this.frmProcuraVida.get( 'apaterno' ).setValue( cotizacion.apaterno );
		this.frmProcuraVida.get( 'amaterno' ).setValue( cotizacion.amaterno );
		this.frmProcuraVida.get( 'fechanac' ).patchValue( objetoFechaCal );
		this.frmProcuraVida.get( 'rfc' ).setValue( cotizacion.rfc );
		this.frmProcuraVida.get( 'genero' ).setValue( cotizacion.genero.idGenero );
		this.frmProcuraVida.get( 'fpago' ).setValue( cotizacion.formaPago.idFormaPago );
		this.frmProcuraVida.get( 'modulo' ).setValue( cotizacion.modulo.idModulo );
		this.frmProcuraVida.get( 'cobertura' ).setValue( cotizacion.cobertura.idCobertura );
		this.frmProcuraVida.get( 'sumasegurada' ).setValue( cotizacion.sumaAsegurada );
	}

	private crearModeloCotizacion(): Cotizacion {
		let idGenero = this.frmProcuraVida.get( 'genero' ).value;
		let idFormaPago = this.frmProcuraVida.get( 'fpago' ).value;
		let idModulo = this.frmProcuraVida.get( 'modulo' ).value;
		let idCobertura = this.frmProcuraVida.get( 'cobertura' ).value;

		let fGeneros = this.generos.filter( ( genero: any ) => genero.idGenero == idGenero );
		let fFormasPago = this.formasPago.filter( ( formaPago: any ) => formaPago.idFormaPago == idFormaPago );
		let fModulos = this.modulos.filter( ( modulo: any ) => modulo.idModulo == idModulo );
		let fCoberturas = this.coberturas.filter( ( cobertura: any ) => cobertura.idCobertura == idCobertura );

		let cotizacion: Cotizacion = {
			nombre: this.frmProcuraVida.get( 'nombre' ).value,
			apaterno: this.frmProcuraVida.get( 'apaterno' ).value,
			amaterno: this.frmProcuraVida.get( 'amaterno' ).value,
			fechanac: this.frmProcuraVida.get( 'fechanac' ).value.jsdate,
			rfc: this.frmProcuraVida.get( 'rfc' ).value,
			genero: fGeneros[ 0 ],
			formaPago: fFormasPago[ 0 ],
			modulo: fModulos[ 0 ],
			cobertura: fCoberturas[ 0 ],
			sumaAsegurada: this.frmProcuraVida.get( 'sumasegurada' ).value
		}

		return cotizacion;
	}

	fnCotizar(): void {
		this.cotizacionService.definirProducto( this.idProducto );
		this.cotizacionService.definirCotizacion( this.crearModeloCotizacion() );
		this.router.navigateByUrl( '/cotizacion/resultado' );
	}
}