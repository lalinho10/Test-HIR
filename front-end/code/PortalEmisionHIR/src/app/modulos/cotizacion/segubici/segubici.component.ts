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

import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';
import { Plan }								  from 'app/core/models/plan';

@Component({
	selector: 'pehir-segubici',
	templateUrl: 'segubici.component.html'
})

export class SegubiciComponent implements OnInit {
	private idProducto: number = 6;

	titulo: string = 'Cotización - Segubici';
	frmSegubici: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];
	planes: Plan[];

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
		this.wsClientService.getObject( '/consultaCoberturasProducto/6' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/6' )
							.subscribe( response => this.formasPago = response.data );
		this.wsClientService.getObject( '/consultaPlanesProducto/6' )
							.subscribe( response => this.planes = response.data );
	}

	private crearFormulario(): void {
		this.frmSegubici = this.fb.group({
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
			'cobertura': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required
			])],
			'deducible': ['', Validators.compose([
				Validators.required
			])],
			'fpago': ['', Validators.compose([
				Validators.required
			])],
			'plan': ['', Validators.compose([
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

		this.frmSegubici.get( 'nombre' ).setValue( cotizacion.nombre );
		this.frmSegubici.get( 'apaterno' ).setValue( cotizacion.apaterno );
		this.frmSegubici.get( 'amaterno' ).setValue( cotizacion.amaterno );
		this.frmSegubici.get( 'fechanac' ).patchValue( objetoFechaCal );
		this.frmSegubici.get( 'rfc' ).setValue( cotizacion.rfc );
		this.frmSegubici.get( 'genero' ).setValue( cotizacion.genero.idGenero );
		this.frmSegubici.get( 'plan' ).setValue( cotizacion.plan.idPlan );
		this.frmSegubici.get( 'fpago' ).setValue( cotizacion.formaPago.idFormaPago );
		this.frmSegubici.get( 'cobertura' ).setValue( cotizacion.cobertura.idCobertura );
		this.frmSegubici.get( 'sumasegurada' ).setValue( cotizacion.sumaAsegurada );
		this.frmSegubici.get( 'deducible' ).setValue( cotizacion.deducible );
	}

	private crearModeloCotizacion(): Cotizacion {
		let idGenero = this.frmSegubici.get( 'genero' ).value;
		let idPlan = this.frmSegubici.get( 'plan' ).value;
		let idFormaPago = this.frmSegubici.get( 'fpago' ).value;
		let idCobertura = this.frmSegubici.get( 'cobertura' ).value;

		let fGeneros = this.generos.filter( ( genero: any ) => genero.idGenero == idGenero );
		let fPlanes = this.planes.filter( ( plan: any ) => plan.idPlan == idPlan );
		let fFormasPago = this.formasPago.filter( ( formaPago: any ) => formaPago.idFormaPago == idFormaPago );
		let fCoberturas = this.coberturas.filter( ( cobertura: any ) => cobertura.idCobertura == idCobertura );

		let cotizacion: Cotizacion = {
			nombre: this.frmSegubici.get( 'nombre' ).value,
			apaterno: this.frmSegubici.get( 'apaterno' ).value,
			amaterno: this.frmSegubici.get( 'amaterno' ).value,
			fechanac: this.frmSegubici.get( 'fechanac' ).value.jsdate,
			rfc: this.frmSegubici.get( 'rfc' ).value,
			genero: fGeneros[ 0 ],
			plan: fPlanes[ 0 ],
			formaPago: fFormasPago[ 0 ],
			cobertura: fCoberturas[ 0 ],
			sumaAsegurada: this.frmSegubici.get( 'sumasegurada' ).value,
			deducible: this.frmSegubici.get( 'deducible' ).value,
		}

		return cotizacion;
	}

	fnCotizar(): void {
		this.cotizacionService.definirProducto( this.idProducto );
		this.cotizacionService.definirCotizacion( this.crearModeloCotizacion() );
		this.router.navigateByUrl( '/cotizacion/resultado' );
	}
}