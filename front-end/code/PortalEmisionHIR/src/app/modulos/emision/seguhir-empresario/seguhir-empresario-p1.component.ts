import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';

import { GENEROS }							  from 'app/core/data/generos';
import { ESTADOSCIVILES }					  from 'app/core/data/estadosCiviles';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';
import { OCUPACIONES }						  from 'app/core/data/ocupaciones';

@Component({
	selector: 'pehir-seguhir-empresario-p1',
	templateUrl: 'seguhir-empresario-p1.component.html'
})

export class SeguhirEmpresarioP1Component implements OnInit {
	private frmSeguhirEmpresarioP1: FormGroup;

	private generos = GENEROS;
	private fecNacOptions = FECNACOPTIONS;
	private estadosCiviles = ESTADOSCIVILES;
	private ocupaciones = OCUPACIONES;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmSeguhirEmpresarioP1 = this.fb.group({
			'padecimiento':['', Validators.compose([
				Validators.required
			])],
			'peso':['', Validators.compose([
				Validators.required
			])],
			'talla':['', Validators.compose([
				Validators.required
			])],
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
			'nacionalidad': ['', Validators.compose([
				Validators.required
			])],
			'ocupacion': ['', Validators.compose([
				Validators.required
			])],
			'rfc': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'estadoCivil':['', Validators.compose([
				Validators.required
			])],
			'genero': ['', Validators.compose([
				Validators.required
			])],
			'calleNumero': ['', Validators.compose([
				Validators.required
			])],
			'coloniaPoblacion': ['', Validators.compose([
				Validators.required
			])],
			'delegacionMunicipio': ['', Validators.compose([
				Validators.required
			])],
			'estado': ['', Validators.compose([
				Validators.required
			])],
			'cp': ['', Validators.compose([
				Validators.required
			])],
			'telefono': ['', Validators.compose([
				Validators.required
			])],
			'celular': ['', Validators.compose([
				Validators.required
			])],
			'correoe1': ['', Validators.compose([
				Validators.required
			])],
			'correoe2': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	paso2(): void {
		this.router.navigateByUrl( '/emision/seguhirempresario/beneficiarios' );
	}
}