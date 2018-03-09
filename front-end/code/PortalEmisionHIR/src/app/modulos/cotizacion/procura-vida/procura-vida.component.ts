import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator }				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';

import { MODULOS }							  from 'app/core/data/modulos';
import { GENEROS }							  from 'app/core/data/generos';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

import { Cobertura }						  from 'app/core/models/cobertura';

@Component({
	selector: 'pehir-procura-vida',
	templateUrl: 'procura-vida.component.html'
})

export class ProcuraVidaComponent implements OnInit {
	private titulo: string = 'Cotización - Procura Vida';
	private frmProcuraVida: FormGroup;

	private coberturas: Cobertura[];

	private modulos = MODULOS;
	private generos = GENEROS;
	private fecNacOptions = FECNACOPTIONS;

	constructor(
		private router: Router,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	) {}

	readCatalogs(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/2' )
							.subscribe( response => this.coberturas = response.data );
	}

	ngOnInit() {
		this.readCatalogs();

		this.frmProcuraVida = this.fb.group({
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
				EntreEdadesValidator(18,64)
			])],
			'rfc': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'genero': ['', Validators.compose([
				Validators.required
			])],
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	cotizar(): void {
		this.router.navigateByUrl( '/cotizacion/resultado' );
	}
}