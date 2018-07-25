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

import { ApellidoValidator }				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

@Component({
	selector: 'pehir-gastos-funerarios',
	templateUrl: 'gastos-funerarios.component.html'
})

export class GastosFunerariosComponent implements OnInit {
	private idProducto: number = 721;

	titulo: string = 'Cotización - Gastos Funerarios';
	frmGastosFunerarios: FormGroup;

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
		this.frmGastosFunerarios = this.fb.group({
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
				EntreEdadesValidator(12,70)
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

		this.frmGastosFunerarios.get( 'nombre' ).setValue( cotizacion.nombre );
		this.frmGastosFunerarios.get( 'apaterno' ).setValue( cotizacion.apaterno );
		this.frmGastosFunerarios.get( 'amaterno' ).setValue( cotizacion.amaterno );
		this.frmGastosFunerarios.get( 'fechanac' ).patchValue( objetoFechaCal );
		this.frmGastosFunerarios.get( 'genero' ).setValue( cotizacion.genero.idGenero );
		this.frmGastosFunerarios.get( 'fpago' ).setValue( cotizacion.formaPago.id );
		this.frmGastosFunerarios.get( 'modulo' ).setValue( cotizacion.modulo.idModulo );
		this.frmGastosFunerarios.get( 'plan' ).setValue( cotizacion.plan.id );
	}

	private crearModeloCotizacion(): Cotizacion {
		let idGenero = this.frmGastosFunerarios.get( 'genero' ).value;
		let idFormaPago = this.frmGastosFunerarios.get( 'fpago' ).value;
		let idModulo = this.frmGastosFunerarios.get( 'modulo' ).value;
		let idPlan = this.frmGastosFunerarios.get( 'plan' ).value;

		let fGeneros = this.generos.filter( ( genero: any ) => genero.idGenero == idGenero );
		let fFormasPago = this.formasPago.filter( ( formaPago: any ) => formaPago.id == idFormaPago );
		let fModulos = this.modulos.filter( ( modulo: any ) => modulo.idModulo == idModulo );
		let fPlanes = this.planes.filter( ( plan: any ) => plan.id == idPlan );

		let cotizacion: Cotizacion = {
			nombre: this.frmGastosFunerarios.get( 'nombre' ).value,
			apaterno: this.frmGastosFunerarios.get( 'apaterno' ).value,
			amaterno: this.frmGastosFunerarios.get( 'amaterno' ).value,
			fechanac: this.frmGastosFunerarios.get( 'fechanac' ).value.jsdate,
			genero: fGeneros[ 0 ],
			formaPago: fFormasPago[ 0 ],
			modulo: fModulos[ 0 ],
			plan: fPlanes[ 0 ]
		}

		return cotizacion;
	}

	fnCotizar(): void {
		let tarifaRequest: TarifaRequest = this.tarifaService.getRequest( this.idProducto, this.frmGastosFunerarios.value );

		this.wsClientService
			.postObject( '/obtTarifa', tarifaRequest )
			.subscribe( ( response ) => {
				if( response.codigoRespuesta ) {
					this.cotizacionService.definirProducto( this.idProducto );
					this.cotizacionService.definirCotizacion( this.crearModeloCotizacion() );
					this.cotizacionService.definirResultadoCotizacion( response );
					this.router.navigateByUrl( '/cotizacion/resultado' );
				}
			});
	}
}