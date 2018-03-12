import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { MODULOS }							  from 'app/core/data/modulos';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';

@Component({
	selector: 'pehir-gastos-funerarios-p2',
	templateUrl: 'gastos-funerarios-p2.component.html'
})

export class GastosFunerariosP2Component implements OnInit {
	private frmGastosFunerariosP2: FormGroup;

	private coberturas: Cobertura[];
	private formasPago: FormaPago[];

	private modulos = MODULOS;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	){}

	readCatalogs(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/3' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/3' )
							.subscribe( response => this.formasPago = response.data );
	}

	ngOnInit() {
		this.readCatalogs();

		this.frmGastosFunerariosP2 = this.fb.group({
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
}