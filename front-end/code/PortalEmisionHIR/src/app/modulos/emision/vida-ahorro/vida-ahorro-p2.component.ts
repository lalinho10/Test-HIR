import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { MODULOS }							  from 'app/core/data/modulos';
import { FORMASPAGO }						  from 'app/core/data/formas-Pago';

import { Paquete }							  from 'app/core/models/paquete';

@Component({
	selector: 'pehir-vida-ahorro-p2',
	templateUrl: 'vida-ahorro-p2.component.html'
})

export class VidaAhorroP2Component implements OnInit {
	private frmVidaAhorroP2: FormGroup;

	private paquetes: Paquete[];

	private formasPago = FORMASPAGO;
	private modulos = MODULOS;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	){}

	private readCatalogs(): void {
		this.wsClientService.getObject( '/consultaPaquetes' )
							.subscribe( data => this.paquetes = data );
	}

	ngOnInit() {
		this.readCatalogs();

		this.frmVidaAhorroP2 = this.fb.group({
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
			'pcobertura': ['', Validators.compose([
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
			'fpago': ['', Validators.compose([
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

	paso3(): void {
		this.router.navigateByUrl( '/emision/vidaahorro/medico' );
	}
}