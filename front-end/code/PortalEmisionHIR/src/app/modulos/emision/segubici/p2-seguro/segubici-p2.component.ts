import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { SegubiciP2Service }				  from './segubici-p2.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';
import { FormatoMonedaValidator }			  from 'app/core/validators/formato-moneda.validator';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';
import { Ocupacion }						  from 'app/core/models/ocupacion';
import { Plan }								  from 'app/core/models/plan';

@Component({
	selector: 'pehir-segubici-p2',
	templateUrl: 'segubici-p2.component.html'
})

export class SegubiciP2Component implements OnInit {
	frmSegubiciP2: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];
	ocupaciones: Ocupacion[];
	planes: Plan[];

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private segubiciP2Service: SegubiciP2Service,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
	}

	private leerCatalogos(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/6' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/6' )
							.subscribe( response => this.formasPago = response.data );
		this.wsClientService.getObject( '/consultaOcupaciones' )
							.subscribe( data => this.ocupaciones = data );
		this.wsClientService.getObject( '/consultaPlanesProducto/6' )
							.subscribe( response => this.planes = response.data );
	}

	private crearFormulario(): void {
		this.frmSegubiciP2 = this.fb.group({
			'ocupacion': ['', Validators.compose([
				Validators.required
			])],
			'descactividad': ['', Validators.compose([
				Validators.required
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required,
				FormatoMonedaValidator()
			])],
			'deducible': ['', Validators.compose([
				Validators.required,
				FormatoMonedaValidator()
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

	fnAvanzarP3(): void {
		this.segubiciP2Service.setModelP2( this.frmSegubiciP2.value );
		this.router.navigateByUrl( '/emision/segubici/confirmacion' );
	}
}