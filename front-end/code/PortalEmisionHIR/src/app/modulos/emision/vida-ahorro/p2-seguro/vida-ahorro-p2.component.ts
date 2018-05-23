import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { FormatoMonedaValidator }			  from 'app/core/validators/formato-moneda.validator';

import { FormaPago }						  from 'app/core/models/forma-pago';
import { Paquete }							  from 'app/core/models/paquete';
import { Plan }								  from 'app/core/models/plan';
import { TipoAhorro }						  from 'app/core/models/tipo-ahorro';

@Component({
	selector: 'pehir-vida-ahorro-p2',
	templateUrl: 'vida-ahorro-p2.component.html'
})

export class VidaAhorroP2Component implements OnInit {
	frmVidaAhorroP2: FormGroup;

	formasPago: FormaPago[];
	paquetes: Paquete[];
	planes: Plan[];
	tiposAhorro: TipoAhorro[];

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
	}

	private leerCatalogos(): void {
		this.wsClientService.getObject( '/consultaFormasPagoProducto/5' )
							.subscribe( response => this.formasPago = response.data );
		this.wsClientService.getObject( '/consultaPaquetes' )
							.subscribe( data => this.paquetes = data );
		this.wsClientService.getObject( '/consultaPlanesProducto/5' )
							.subscribe( response => this.planes = response.data );
		this.wsClientService.getObject( '/consultaTiposAhorro' )
							.subscribe( data => this.tiposAhorro = data );
	}

	private crearFormulario(): void {
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
			'tipoAhorro': ['', Validators.compose([
				Validators.required
			])],
			'apfondoasegurado': ['', Validators.compose([
				Validators.required
			])],
			'fpago': ['', Validators.compose([
				Validators.required
			])],
			'ahorroInicial': ['', Validators.compose([
				Validators.required,
				FormatoMonedaValidator()
			])],
			'ahorroMensual': ['', Validators.compose([
				Validators.required,
				FormatoMonedaValidator()
			])],
			'ahorroExtraordinario': ['', Validators.compose([
				Validators.required,
				FormatoMonedaValidator()
			])]
		});
	}

	fnCambiarGobierno(): void {
		this.frmVidaAhorroP2.controls[ 'especifiqueGob' ].setValue( '' );

		if( this.frmVidaAhorroP2.controls[ 'gobierno' ].value ) {
			this.frmVidaAhorroP2.controls[ 'especifiqueGob' ].enable();
		} else {
			this.frmVidaAhorroP2.controls[ 'especifiqueGob' ].disable();
		}
	}

	fnCambiarParienteGob(): void {
		this.frmVidaAhorroP2.controls[ 'especifiqueParGob' ].setValue( '' );

		if( this.frmVidaAhorroP2.controls[ 'parienteGob' ].value ) {
			this.frmVidaAhorroP2.controls[ 'especifiqueParGob' ].enable();
		} else {
			this.frmVidaAhorroP2.controls[ 'especifiqueParGob' ].disable();
		}
	}

	fnAvanzarP3(): void {
		this.router.navigateByUrl( '/emision/vidaahorro/medico' );
	}
}