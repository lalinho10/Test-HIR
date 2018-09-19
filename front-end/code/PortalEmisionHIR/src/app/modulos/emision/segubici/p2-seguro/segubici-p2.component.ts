import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';
import { Observable }						  from 'rxjs/Observable';
import											   'rxjs/add/observable/forkJoin';

import { SegubiciP1Service }				  from '../p1-usuario/segubici-p1.service';
import { SegubiciP2Service }				  from './segubici-p2.service';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';
import { Modulo }							  from 'app/core/models/modulo';
import { Ocupacion }						  from 'app/core/models/ocupacion';
import { Plan }								  from 'app/core/models/plan';

import { AuthenticationService }			  from 'app/core/services/authentication/authentication.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { CotizacionService }				  from 'app/modulos/cotizacion/cotizacion.service';
import { TarifaRequest }					  from 'app/modulos/cotizacion/tarifa.request';
import { TarifaService }					  from 'app/modulos/cotizacion/tarifa.service';

@Component({
	selector: 'pehir-segubici-p2',
	templateUrl: 'segubici-p2.component.html'
})

export class SegubiciP2Component implements OnInit {
	private idProducto: number = 1560;

	editaAgente: boolean = false;

	frmSegubiciP2: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];
	modulos: Modulo[];
	ocupaciones: Ocupacion[];
	planes: Plan[];

	constructor(
		private authenticationService: AuthenticationService,
		private cotizacionService: CotizacionService,
		private fb: FormBuilder,
		private router: Router,
		private segubiciP1Service: SegubiciP1Service,
		private segubiciP2Service: SegubiciP2Service,
		private tarifaService: TarifaService,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.crearFormulario();
		this.leerCatalogos();
		this.obtenerTipoUsuario();
	}

	private obtenerTipoUsuario(): void {
		this.editaAgente = ( this.authenticationService.authenticatedUser.claveRol === 'Agente' ||
							 this.authenticationService.authenticatedUser.claveRol === 'Operativo' );

		if( !this.editaAgente ) {
			this.frmSegubiciP2.get( 'agente' ).clearValidators();
			this.frmSegubiciP2.get( 'clave' ).clearValidators();
		}
	}

	private leerCatalogos(): void {
		Observable.forkJoin(
			this.wsClientService.postObject( '/catCobertura', { 'id': this.idProducto } ),
			this.wsClientService.postObject( '/catFormaPago', { 'id': this.idProducto } ),
			this.wsClientService.postObject( '/catalogoModulo', { 'id': this.idProducto } ),
			this.wsClientService.postObject( '/catalogoOcupacion', {} ),
			this.wsClientService.postObject( '/catPlan', { 'id': this.idProducto } )
		).subscribe( response => {
			if( response[ 0 ].code === 200 ) {
				this.coberturas = response[ 0 ].data;
			}

			if( response[ 1 ].code === 200 ) {
				this.formasPago = response[ 1 ].data;
			}

			if( response[ 2 ].codigoRespuesta === 200 ) {
				this.modulos = new Array<Modulo>();

				for( let i:number = response[ 2 ].min; i <= response[ 2 ].max; i++ ) {
					let modulo: Modulo = new Modulo();
					modulo.idModulo = i;
					modulo.descModulo = String( i );
					this.modulos.push( modulo );
				}
			}

			if( response[ 3 ].code === 200 ) {
				this.ocupaciones = response[ 3 ].data;
			}

			if( response[ 4 ].code === 200 ) {
				this.planes = response[ 4 ].data;
			}

			if( this.segubiciP2Service.hasModelP2() ) {
				this.mostrarDatosCapturados();
			}
		});
	}

	private crearFormulario(): void {
		this.frmSegubiciP2 = this.fb.group({
			'ocupacion': ['', Validators.compose([
				Validators.required
			])],
			'descactividad': ['', Validators.compose([
				Validators.required
			])],
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'formaPago': ['', Validators.compose([
				Validators.required
			])],
			'plan': ['', Validators.compose([
				Validators.required
			])],
			'agente': ['', Validators.compose([
				Validators.required
			])],
			'clave': ['', Validators.compose([
				Validators.required,
				ClaveAgenteValidator()
			])]
		});
	}

	private mostrarDatosCapturados(): void {
		this.frmSegubiciP2.get( 'descactividad' ).setValue( this.segubiciP2Service.getModelP2().descactividad );
		this.frmSegubiciP2.get( 'agente' ).setValue( this.segubiciP2Service.getModelP2().agente );
		this.frmSegubiciP2.get( 'clave' ).setValue( this.segubiciP2Service.getModelP2().clave );

		let fOcupacion = this.ocupaciones.filter( ( ocupacion: any ) => ocupacion.id === this.segubiciP2Service.getModelP2().ocupacion.id );
		this.frmSegubiciP2.get( 'ocupacion' ).setValue( fOcupacion[ 0 ] );

		let fModulo = this.modulos.filter( ( modulo: any ) => modulo.idModulo === this.segubiciP2Service.getModelP2().modulo.idModulo );
		this.frmSegubiciP2.get( 'modulo' ).setValue( fModulo[ 0 ] );

		let fFormaPago = this.formasPago.filter( ( formaPago: any ) => formaPago.id === this.segubiciP2Service.getModelP2().formaPago.id );
		this.frmSegubiciP2.get( 'formaPago' ).setValue( fFormaPago[ 0 ] );

		let fPlan = this.planes.filter( ( plan: any ) => plan.id === this.segubiciP2Service.getModelP2().plan.id );
		this.frmSegubiciP2.get( 'plan' ).setValue( fPlan[ 0 ] );
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/segubici' );
	}

	fnAvanzarP3(): void {
		let tarifaRequest: TarifaRequest = this.tarifaService.getRequestEmision( this.idProducto, this.segubiciP1Service.getModelP1().fechanac, this.frmSegubiciP2.value );

		this.wsClientService
			.postObject( '/obtTarifa', tarifaRequest )
			.subscribe( ( response ) => {
				if( response.codigoRespuesta === 200 ) {
					this.cotizacionService.definirResultadoCotizacion( response );
					this.segubiciP2Service.setModelP2( this.frmSegubiciP2.value, this.cotizacionService.obtenerResultadoCotizacion() );
					this.router.navigateByUrl( '/emision/segubici/confirmacion' );
				}
			});
	}
}