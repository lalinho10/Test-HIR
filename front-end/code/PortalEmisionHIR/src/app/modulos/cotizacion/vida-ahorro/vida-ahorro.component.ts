import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

import { GENEROS }							  from 'app/core/data/generos';
import { MODULOS }							  from 'app/core/data/modulos';
import { FORMASPAGO }						  from 'app/core/data/formas-Pago';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { Paquete }							  from 'app/core/models/paquete';

@Component({
	selector: 'pehir-vida-ahorro',
	templateUrl: 'vida-ahorro.component.html'
})

export class VidaAhorroComponent implements OnInit {
	private titulo: string = 'Cotización - Vida con Ahorro Línea 2018';
	private frmVidaAhorro: FormGroup;

	private paquetes: Paquete[];

	private generos = GENEROS;
	private modulos = MODULOS;
	private formasPago = FORMASPAGO;
	private fecNacOptions = FECNACOPTIONS;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.wsClientService.getObject( '/consultaPaquetes' )
							.subscribe( data => this.paquetes = data );

		this.frmVidaAhorro = this.fb.group({
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
				EntreEdadesValidator(18,65)
			])],
			'rfc': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'genero': ['', Validators.compose([
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
			'fpago': ['', Validators.compose([
				Validators.required
			])]
		})
	}

	cotizar(): void {
		this.router.navigateByUrl( '/cotizacion/resultado' );
	}
}