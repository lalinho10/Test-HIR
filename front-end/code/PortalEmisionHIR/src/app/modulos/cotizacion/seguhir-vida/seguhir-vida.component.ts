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
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { FormaPago }						  from 'app/core/models/forma-pago';
import { Paquete }							  from 'app/core/models/paquete';

@Component({
	selector: 'pehir-seguhir-vida',
	templateUrl: 'seguhir-vida.component.html'
})

export class SeguhirVidaComponent implements OnInit {
	private titulo: string = 'Cotización - SeguHIR Vida';
	private frmSeguhirVida: FormGroup;

	private formasPago: FormaPago[];
	private paquetes: Paquete[];

	private generos = GENEROS;
	private modulos = MODULOS;
	private fecNacOptions = FECNACOPTIONS;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	) {}

	readCatalogs(): void {
		this.wsClientService.getObject( '/consultaFormasPagoProducto/1' )
							.subscribe( response => this.formasPago = response.data );
		this.wsClientService.getObject( '/consultaPaquetes' )
							.subscribe( data => this.paquetes = data );
	}

	ngOnInit() {
		this.readCatalogs();

		this.frmSeguhirVida = this.fb.group({
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
				EntreEdadesValidator(18,70)
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