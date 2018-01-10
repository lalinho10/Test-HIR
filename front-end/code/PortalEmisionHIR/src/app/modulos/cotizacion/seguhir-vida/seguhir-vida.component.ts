import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } 	 						  from '@angular/router';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';

import { GENEROS }							  from 'app/core/data/generos';
import { MODULOS }							  from 'app/core/data/modulos';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

@Component({
	selector: 'pehir-seguhir-vida',
	templateUrl: 'seguhir-vida.component.html'
})

export class SeguhirVidaComponent implements OnInit {
	private titulo: string = 'Cotización - SeguHIR Vida';
	private frmSeguhirVida: FormGroup;

	private generos = GENEROS;
	private modulos = MODULOS;
	private fecNacOptions = FECNACOPTIONS;

	constructor(
		private router: Router,
		private fb: FormBuilder
	) {}

	ngOnInit() {
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
				Validators.required
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