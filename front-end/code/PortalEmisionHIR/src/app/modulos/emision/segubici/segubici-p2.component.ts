import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { FORMASPAGO }						  from 'app/core/data/formas-Pago';

import { Cobertura }						  from 'app/core/models/cobertura';
import { Ocupacion }						  from 'app/core/models/ocupacion';

@Component({
	selector: 'pehir-segubici-p2',
	templateUrl: 'segubici-p2.component.html'
})

export class SegubiciP2Component implements OnInit {
	private frmSegubiciP2: FormGroup;

	private coberturas: Cobertura[];
	private ocupaciones: Ocupacion[];

	private formasPago = FORMASPAGO;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	){}

	readCatalogs(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/6' )
							.subscribe( response => this.coberturas = response.data );

		this.wsClientService.getObject( '/consultaOcupaciones' )
							.subscribe( data => this.ocupaciones = data );
	}

	ngOnInit() {
		this.readCatalogs();

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
				Validators.required
			])],
			'deducible': ['', Validators.compose([
				Validators.required
			])],
			'fpago': ['', Validators.compose([
				Validators.required
			])],
			'agente': ['', Validators.compose([
				Validators.required
			])],
			'clave': ['', Validators.compose([
				Validators.required,
				ClaveAgenteValidator()
			])]
		})
	}
}