import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';

import { GENEROS }							  from 'app/core/data/generos';
import { ESTADOSCIVILES }					  from 'app/core/data/estadosCiviles';
import { FECNACOPTIONS }					  from 'app/core/data/fecNacOptions';

@Component({
	selector: 'pehir-segubici-p1',
	templateUrl: 'segubici-p1.component.html'
})

export class SegubiciP1Component implements OnInit {
	private frmSegubiciP1: FormGroup;

	private generos = GENEROS;
	private fecNacOptions = FECNACOPTIONS;
	private estadosCiviles = ESTADOSCIVILES;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmSegubiciP1 = this.fb.group({
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
			'fumador': ['', Validators.compose([
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
			'ciudadEstado': ['', Validators.compose([
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
			'correoe': ['', Validators.compose([
				Validators.required
			])],
			'vigenciaPoliza': ['', Validators.compose([
				Validators.required
			])],
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
		});
	}

	paso2(): void {
		this.router.navigateByUrl( '/emision/segubici/seguro' );
	}
}