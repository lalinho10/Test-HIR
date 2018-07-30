import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { SeguhirVidaP2Service }				  from './seguhir-vida-p2.service';

import { FormaPago }						  from 'app/core/models/forma-pago';
import { Modulo }							  from 'app/core/models/modulo';
import { Paquete }							  from 'app/core/models/paquete';
import { Plan }								  from 'app/core/models/plan';

import { WSClientService }					  from 'app/core/services/ws-client.service';

@Component({
	selector: 'pehir-seguhir-vida-p2',
	templateUrl: 'seguhir-vida-p2.component.html'
})

export class SeguhirVidaP2Component implements OnInit {
	private idProducto: number = 1;

	frmSeguhirVidaP2: FormGroup;

	formasPago: FormaPago[];
	modulos: Modulo[];
	paquetes: Paquete[];
	planes: Plan[];

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private seguhirVidaP2Service: SeguhirVidaP2Service,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
	}

	private leerCatalogos(): void {
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
			.postObject( '/consultaPaquetes', {} )
			.subscribe( data => this.paquetes = data );

		this.wsClientService
			.postObject( '/catPlan', { 'id': this.idProducto } )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.planes = response.data;
				}
			});
	}

	private crearFormulario(): void {
		this.frmSeguhirVidaP2 = this.fb.group({
			'gobierno': ['', Validators.compose([
				Validators.required
			])],
			'especifiqueGob': ['', Validators.compose([
				Validators.required
			])],
			'parienteGob': ['', Validators.compose([
				Validators.required
			])],
			'especifiqueParGob': ['', Validators.compose([
				Validators.required
			])],
			'plan': ['', Validators.compose([
				Validators.required
			])],
			'paqueteCobertura': ['', Validators.compose([
				Validators.required
			])],
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'ugastos': ['', Validators.compose([
				Validators.required
			])],
			'apfondoasegurado': ['', Validators.compose([
				Validators.required
			])],
			'formaPago': ['', Validators.compose([
				Validators.required
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])],
			'aportacion': ['', Validators.compose([
				Validators.required
			])],
			'total': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	fnCambiarGobierno(): void {
		this.frmSeguhirVidaP2.controls[ 'especifiqueGob' ].setValue( '' );

		if( this.frmSeguhirVidaP2.controls[ 'gobierno' ].value ) {
			this.frmSeguhirVidaP2.controls[ 'especifiqueGob' ].enable();
		} else {
			this.frmSeguhirVidaP2.controls[ 'especifiqueGob' ].disable();
		}
	}

	fnCambiarParienteGob(): void {
		this.frmSeguhirVidaP2.controls[ 'especifiqueParGob' ].setValue( '' );

		if( this.frmSeguhirVidaP2.controls[ 'parienteGob' ].value ) {
			this.frmSeguhirVidaP2.controls[ 'especifiqueParGob' ].enable();
		} else {
			this.frmSeguhirVidaP2.controls[ 'especifiqueParGob' ].disable();
		}
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/seguhirvida' );
	}

	fnAvanzarP3(): void {
		this.seguhirVidaP2Service.setModelP2( this.frmSeguhirVidaP2.value );
		this.router.navigateByUrl( '/emision/seguhirvida/medico' );
	}
}