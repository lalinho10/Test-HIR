import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { Cotizacion }						  from '../cotizacion';
import { SeguhirEmpresarioRequest }			  from './seguhir-empresario.request';

import { CotizacionService }				  from '../cotizacion.service';
import { SeguhirEmpresarioService }			  from './seguhir-empresario.service';

import { MODULOS }							  from 'app/core/data/modulos';
import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/calendarios/fecNacOptions';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator }				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { FormatoMonedaValidator }			  from 'app/core/validators/formato-moneda.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

@Component({
	selector: 'pehir-seguhir-empresario',
	templateUrl: 'seguhir-empresario.component.html'
})

export class SeguhirEmpresarioComponent implements OnInit {
	private idProducto: number = 4;

	titulo: string = 'Cotización - SeguHIR Empresario';
	frmSeguhirEmpresario: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];

	modulos = MODULOS;
	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;

	constructor(
		private cotizacionService: CotizacionService,
		private fb: FormBuilder,
		private seguhirEmpresarioService: SeguhirEmpresarioService,
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
		this.wsClientService.getObject( '/consultaCoberturasProducto/4' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/4' )
							.subscribe( response => this.formasPago = response.data );
	}

	private crearFormulario(): void {
		this.frmSeguhirEmpresario = this.fb.group({
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

		this.frmSeguhirEmpresario.get( 'nombre' ).setValue( cotizacion.nombre );
		this.frmSeguhirEmpresario.get( 'apaterno' ).setValue( cotizacion.apaterno );
		this.frmSeguhirEmpresario.get( 'amaterno' ).setValue( cotizacion.amaterno );
		this.frmSeguhirEmpresario.get( 'fechanac' ).patchValue( objetoFechaCal );
		this.frmSeguhirEmpresario.get( 'rfc' ).setValue( cotizacion.rfc );
		this.frmSeguhirEmpresario.get( 'genero' ).setValue( cotizacion.genero.idGenero );
		this.frmSeguhirEmpresario.get( 'fpago' ).setValue( cotizacion.formaPago.idFormaPago );
		this.frmSeguhirEmpresario.get( 'modulo' ).setValue( cotizacion.modulo.idModulo );
		this.frmSeguhirEmpresario.get( 'cobertura' ).setValue( cotizacion.cobertura.idCobertura );
	}

	private crearModeloCotizacion(): Cotizacion {
		let idGenero = this.frmSeguhirEmpresario.get( 'genero' ).value;
		let idFormaPago = this.frmSeguhirEmpresario.get( 'fpago' ).value;
		let idModulo = this.frmSeguhirEmpresario.get( 'modulo' ).value;
		let idCobertura = this.frmSeguhirEmpresario.get( 'cobertura' ).value;

		let fGeneros = this.generos.filter( ( genero: any ) => genero.idGenero == idGenero );
		let fFormasPago = this.formasPago.filter( ( formaPago: any ) => formaPago.idFormaPago == idFormaPago );
		let fModulos = this.modulos.filter( ( modulo: any ) => modulo.idModulo == idModulo );
		let fCoberturas = this.coberturas.filter( ( cobertura: any ) => cobertura.idCobertura == idCobertura );

		let cotizacion: Cotizacion = {
			nombre: this.frmSeguhirEmpresario.get( 'nombre' ).value,
			apaterno: this.frmSeguhirEmpresario.get( 'apaterno' ).value,
			amaterno: this.frmSeguhirEmpresario.get( 'amaterno' ).value,
			fechanac: this.frmSeguhirEmpresario.get( 'fechanac' ).value.jsdate,
			rfc: this.frmSeguhirEmpresario.get( 'rfc' ).value,
			genero: fGeneros[ 0 ],
			formaPago: fFormasPago[ 0 ],
			modulo: fModulos[ 0 ],
			cobertura: fCoberturas[ 0 ]
		}

		return cotizacion;
	}

	fnCotizar(): void {
		let seguhirEmpresarioRequest: SeguhirEmpresarioRequest = this.seguhirEmpresarioService.getRequest( this.frmSeguhirEmpresario.value );

		this.wsClientService
			.postObject( '/cotizacionSeguHIREmpresario', seguhirEmpresarioRequest )
			.subscribe( ( response ) => {
				this.cotizacionService.definirProducto( this.idProducto );
				this.cotizacionService.definirCotizacion( this.crearModeloCotizacion() );
				this.cotizacionService.definirResultadoCotizacion( response.data );
				this.router.navigateByUrl( '/cotizacion/resultado' );
			});
	}
}