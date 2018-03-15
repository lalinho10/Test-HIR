import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { MODULOS }							  from 'app/core/data/modulos';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';

@Component({
	selector: 'pehir-procura-vida-p2',
	templateUrl: 'procura-vida-p2.component.html'
})

export class ProcuraVidaP2Component implements OnInit {
	private frmProcuraVidaP2: FormGroup;

	private coberturas: Cobertura[];
	private formasPago: FormaPago[];

	private modulos = MODULOS;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private wsClientService: WSClientService
	){}

	readCatalogs(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/2' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/2' )
							.subscribe( response => this.formasPago = response.data );
	}

	ngOnInit() {
		this.readCatalogs();

		this.frmProcuraVidaP2 = this.fb.group({
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required
			])],
			'cobertura': ['', Validators.compose([
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
		});
	}

	fnAvanzarP3(): void {
		
	}
}