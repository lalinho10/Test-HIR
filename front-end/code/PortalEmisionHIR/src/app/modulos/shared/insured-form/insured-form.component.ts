import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators }			  from '@angular/forms';

import { ESTADOSCIVILES }								  from 'app/core/data/estadosCiviles';
import { GENEROS }										  from 'app/core/data/generos';
import { FECNACOPTIONS }								  from 'app/core/data/calendarios/fecNacOptions';

import { Asegurado }									  from 'app/core/models/asegurado';
import { Ocupacion }									  from 'app/core/models/ocupacion';

import { WSClientService }								  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 							  from 'app/core/validators/apellido.validator';
import { NombreValidator }								  from 'app/core/validators/nombre.validator';
import { PorcentajeValidator }							  from 'app/core/validators/porcentaje.validator';

@Component({
	selector: 'pehir-insured-form',
	templateUrl: 'insured-form.component.html'
})

export class InsuredFormComponent implements OnInit {
	@Input()
	tipoAsegurado: string;

	@Output()
	onValidateForm: EventEmitter<boolean> = new EventEmitter<boolean>();

	frmAsegurado: FormGroup;

	asegurado: Asegurado = new Asegurado();

	ocupaciones: Ocupacion[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private fb: FormBuilder,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
		this.registrarEventos();
	}

	private leerCatalogos() {
		this.wsClientService
			.postObject( '/catalogoOcupacion', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.ocupaciones = response.data;
				}
			});
	}

	private crearFormulario(): void {
		this.frmAsegurado = this.fb.group({
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
			'estadoCivil':['', Validators.compose([
				Validators.required
			])],
			'genero': ['', Validators.compose([
				Validators.required
			])],
			'ocupacion': ['', Validators.compose([
				Validators.required
			])],
			'tipoAsegurado': this.tipoAsegurado
		});
	}

	private registrarEventos(): void {
		this.frmAsegurado.statusChanges.subscribe(
			data =>  {
				this.onValidateForm.emit( this.frmAsegurado.valid );

				if( this.frmAsegurado.valid ) {
					this.asegurado = this.frmAsegurado.value;
				}
			}
		);
	}
}