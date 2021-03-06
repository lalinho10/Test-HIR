import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { Cotizacion }						  from '../cotizacion';
import { TarifaRequest }					  from '../tarifa.request';

import { CotizacionService }				  from '../cotizacion.service';
import { TarifaService }					  from '../tarifa.service';

import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/calendarios/fecNacOptions';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';
import { Modulo }							  from 'app/core/models/modulo';
import { Plan }								  from 'app/core/models/plan';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

@Component({
	selector: 'pehir-seguhir-vida',
	templateUrl: 'seguhir-vida.component.html'
})

export class SeguhirVidaComponent implements OnInit {
	private idProducto: number = 1302;

	titulo: string = 'Cotización - SeguHIR Cáncer';
	frmSeguhirVida: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];
	modulos: Modulo[];
	planes: Plan[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;

	constructor(
		private cotizacionService: CotizacionService,
		private fb: FormBuilder,
		private router: Router,
		private tarifaService: TarifaService,
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
		this.wsClientService
			.postObject( '/catCobertura', { 'id': this.idProducto } )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.coberturas = response.data;
				}
			});

		this.wsClientService
			.postObject( '/catFormaPago', { 'id': this.idProducto } )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.formasPago = response.data;
				}
			});

		this.wsClientService
			.postObject( '/catalogoModulo', { 'id': this.idProducto } )
			.subscribe( response => {
				if( response.codigoRespuesta === 200 ) {
					this.modulos = new Array<Modulo>();

					for( let i:number = response.min; i <= response.max; i++ ) {
						let modulo: Modulo = new Modulo();
						modulo.idModulo = i;
						modulo.descModulo = String( i );
						this.modulos.push( modulo );
					}
				}
			});

		this.wsClientService
			.postObject( '/catPlan', { 'id': this.idProducto } )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.planes = response.data;
				}
			});
	}

	private crearFormulario(): void {
		this.frmSeguhirVida = this.fb.group({
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
				EntreEdadesValidator(18,70)
			])],
			'genero': ['', Validators.compose([
				Validators.required
			])],
			'modulo': ['', Validators.compose([
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

		this.frmSeguhirVida.get( 'nombre' ).setValue( cotizacion.nombre );
		this.frmSeguhirVida.get( 'apaterno' ).setValue( cotizacion.apaterno );
		this.frmSeguhirVida.get( 'amaterno' ).setValue( cotizacion.amaterno );
		this.frmSeguhirVida.get( 'fechanac' ).patchValue( objetoFechaCal );
		this.frmSeguhirVida.get( 'genero' ).setValue( cotizacion.genero.idGenero );
		this.frmSeguhirVida.get( 'plan' ).setValue( cotizacion.plan.id );
		this.frmSeguhirVida.get( 'fpago' ).setValue( cotizacion.formaPago.id );
		this.frmSeguhirVida.get( 'modulo' ).setValue( cotizacion.modulo.idModulo );
	}

	private crearModeloCotizacion(): Cotizacion {
		let idGenero = this.frmSeguhirVida.get( 'genero' ).value;
		let idFormaPago = this.frmSeguhirVida.get( 'fpago' ).value;
		let idModulo = this.frmSeguhirVida.get( 'modulo' ).value;
		let idPlan = this.frmSeguhirVida.get( 'plan' ).value;

		let fGeneros = this.generos.filter( ( genero: any ) => genero.idGenero == idGenero );
		let fFormasPago = this.formasPago.filter( ( formaPago: any ) => formaPago.id == idFormaPago );
		let fModulos = this.modulos.filter( ( modulo: any ) => modulo.idModulo == idModulo );
		let fPlanes = this.planes.filter( ( plan: any ) => plan.id == idPlan );

		let cotizacion: Cotizacion = {
			nombre: this.frmSeguhirVida.get( 'nombre' ).value,
			apaterno: this.frmSeguhirVida.get( 'apaterno' ).value,
			amaterno: this.frmSeguhirVida.get( 'amaterno' ).value,
			fechanac: this.frmSeguhirVida.get( 'fechanac' ).value.jsdate,
			genero: fGeneros[ 0 ],
			formaPago: fFormasPago[ 0 ],
			modulo: fModulos[ 0 ],
			plan: fPlanes[ 0 ]
		}

		return cotizacion;
	}

	fnCotizar(): void {
		let tarifaRequest: TarifaRequest = this.tarifaService.getRequest( this.idProducto, this.frmSeguhirVida.value );

		this.wsClientService
			.postObject( '/obtTarifa', tarifaRequest )
			.subscribe( ( response ) => {
				if( response.codigoRespuesta === 200 ) {
					this.cotizacionService.definirProducto( this.idProducto );
					this.cotizacionService.definirCotizacion( this.crearModeloCotizacion() );
					this.cotizacionService.definirResultadoCotizacion( response );
					this.router.navigateByUrl( '/cotizacion/resultado' );
				}
			});
	}
}