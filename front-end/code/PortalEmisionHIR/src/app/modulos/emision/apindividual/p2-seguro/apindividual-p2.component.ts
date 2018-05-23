import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ApindividualP2Service }			  from './apindividual-p2.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';
import { FormatoMonedaValidator }			  from 'app/core/validators/formato-moneda.validator';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';
import { Ocupacion }						  from 'app/core/models/ocupacion';
import { Plan }								  from 'app/core/models/plan';

@Component({
	selector: 'pehir-apindividual-p2',
	templateUrl: 'apindividual-p2.component.html'
})

export class ApindividualP2Component implements OnInit {
	frmApindividualP2: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];
	ocupaciones: Ocupacion[];
	planes: Plan[];

	constructor(
		private apindividualP2Service: ApindividualP2Service,
		private fb: FormBuilder,
		private router: Router,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
	}

	private leerCatalogos(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/7' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/7' )
							.subscribe( response => this.formasPago = response.data );
		this.wsClientService.getObject( '/consultaOcupaciones' )
							.subscribe( data => this.ocupaciones = data );
		this.wsClientService.getObject( '/consultaPlanesProducto/7' )
							.subscribe( response => this.planes = response.data );
	}

	private crearFormulario(): void {
		this.frmApindividualP2 = this.fb.group({
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
		this.apindividualP2Service.setModelP2( this.frmApindividualP2.value );
		this.router.navigateByUrl( '/emision/apindividual/confirmacion' );
	}
}