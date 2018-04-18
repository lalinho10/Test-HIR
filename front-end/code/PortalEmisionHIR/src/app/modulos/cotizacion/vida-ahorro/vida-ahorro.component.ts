import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { Cotizacion }						  from '../cotizacion';

import { CotizacionService }				  from '../cotizacion.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

import { GENEROS }							  from 'app/core/data/generos';
import { MODULOS }							  from 'app/core/data/modulos';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { FormaPago }						  from 'app/core/models/forma-pago';
import { Paquete }							  from 'app/core/models/paquete';
import { Plan }								  from 'app/core/models/plan';

@Component({
	selector: 'pehir-vida-ahorro',
	templateUrl: 'vida-ahorro.component.html'
})

export class VidaAhorroComponent implements OnInit {
	private idProducto: number = 5;

	titulo: string = 'Cotización - Vida con Ahorro Línea 2018';
	frmVidaAhorro: FormGroup;

	formasPago: FormaPago[];
	paquetes: Paquete[];
	planes: Plan[];

	generos = GENEROS;
	modulos = MODULOS;
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
		this.wsClientService.getObject( '/consultaFormasPagoProducto/5' )
							.subscribe( response => this.formasPago = response.data );
		this.wsClientService.getObject( '/consultaPaquetes' )
							.subscribe( data => this.paquetes = data );
		this.wsClientService.getObject( '/consultaPlanesProducto/5' )
							.subscribe( response => this.planes = response.data );
	}

	private crearFormulario(): void {
		this.frmVidaAhorro = this.fb.group({
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
				EntreEdadesValidator(18,65)
			])],
			'rfc': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'genero': ['', Validators.compose([
				Validators.required
			])],
			'plan': ['', Validators.compose([
				Validators.required
			])],
			'pcobertura': ['', Validators.compose([
				Validators.required
			])],
			'modulo': ['', Validators.compose([
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

		this.frmVidaAhorro.get( 'nombre' ).setValue( cotizacion.nombre );
		this.frmVidaAhorro.get( 'apaterno' ).setValue( cotizacion.apaterno );
		this.frmVidaAhorro.get( 'amaterno' ).setValue( cotizacion.amaterno );
		this.frmVidaAhorro.get( 'fechanac' ).patchValue( objetoFechaCal );
		this.frmVidaAhorro.get( 'rfc' ).setValue( cotizacion.rfc );
		this.frmVidaAhorro.get( 'genero' ).setValue( cotizacion.genero.idGenero );
		this.frmVidaAhorro.get( 'plan' ).setValue( cotizacion.plan.idPlan );
		this.frmVidaAhorro.get( 'fpago' ).setValue( cotizacion.formaPago.idFormaPago );
		this.frmVidaAhorro.get( 'modulo' ).setValue( cotizacion.modulo.idModulo );
		this.frmVidaAhorro.get( 'pcobertura' ).setValue( cotizacion.paqueteCobertura.idPaquete );
	}

	private crearModeloCotizacion(): Cotizacion {
		let idGenero = this.frmVidaAhorro.get( 'genero' ).value;
		let idPlan = this.frmVidaAhorro.get( 'plan' ).value;
		let idFormaPago = this.frmVidaAhorro.get( 'fpago' ).value;
		let idModulo = this.frmVidaAhorro.get( 'modulo' ).value;
		let idPaquete = this.frmVidaAhorro.get( 'pcobertura' ).value;

		let fGeneros = this.generos.filter( ( genero: any ) => genero.idGenero == idGenero );
		let fPlanes = this.planes.filter( ( plan: any ) => plan.idPlan == idPlan );
		let fFormasPago = this.formasPago.filter( ( formaPago: any ) => formaPago.idFormaPago == idFormaPago );
		let fModulos = this.modulos.filter( ( modulo: any ) => modulo.idModulo == idModulo );
		let fPaquetes = this.paquetes.filter( ( paquete: any ) => paquete.idPaquete == idPaquete );

		let cotizacion: Cotizacion = {
			nombre: this.frmVidaAhorro.get( 'nombre' ).value,
			apaterno: this.frmVidaAhorro.get( 'apaterno' ).value,
			amaterno: this.frmVidaAhorro.get( 'amaterno' ).value,
			fechanac: this.frmVidaAhorro.get( 'fechanac' ).value.jsdate,
			rfc: this.frmVidaAhorro.get( 'rfc' ).value,
			genero: fGeneros[ 0 ],
			plan: fPlanes[ 0 ],
			formaPago: fFormasPago[ 0 ],
			modulo: fModulos[ 0 ],
			paqueteCobertura: fPaquetes[ 0 ]
		}

		return cotizacion;
	}

	fnCotizar(): void {
		this.cotizacionService.definirProducto( this.idProducto );
		this.cotizacionService.definirCotizacion( this.crearModeloCotizacion() );
		this.router.navigateByUrl( '/cotizacion/resultado' );
	}
}