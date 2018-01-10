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
	selector: 'pehir-seguhir-vida-p1',
	templateUrl: 'seguhir-vida-p1.component.html'
})

export class SeguhirVidaP1Component implements OnInit {
	private frmSeguhirVidaP1: FormGroup;

	private generos = GENEROS;
	private fecNacOptions = FECNACOPTIONS;
	private estadosCiviles = ESTADOSCIVILES;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmSeguhirVidaP1 = this.fb.group({
			'nombreCon': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'apaternoCon': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'amaternoCon': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'fechanacCon': ['', Validators.compose([
				Validators.required
			])],
			'nacionalidadCon': ['', Validators.compose([
				Validators.required
			])],
			'ocupacionCon': ['', Validators.compose([
				Validators.required
			])],
			'rfcCon': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'estadoCivilCon':['', Validators.compose([
				Validators.required
			])],
			'generoCon': ['', Validators.compose([
				Validators.required
			])],

			'calleNumeroCon': ['', Validators.compose([
				Validators.required
			])],
			'coloniaPoblacionCon': ['', Validators.compose([
				Validators.required
			])],
			'delegacionMunicipioCon': ['', Validators.compose([
				Validators.required
			])],
			'estadoCon': ['', Validators.compose([
				Validators.required
			])],
			'cpCon': ['', Validators.compose([
				Validators.required
			])],
			'telefonoCon': ['', Validators.compose([
				Validators.required
			])],
			'celularCon': ['', Validators.compose([
				Validators.required
			])],
			'correoeCon': ['', Validators.compose([
				Validators.required
			])],

			'nombreTit': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'apaternoTit': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'amaternoTit': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'fechanacTit': ['', Validators.compose([
				Validators.required
			])],
			'nacionalidadTit': ['', Validators.compose([
				Validators.required
			])],
			'ocupacionTit': ['', Validators.compose([
				Validators.required
			])],
			'rfcTit': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'estadoCivilTit':['', Validators.compose([
				Validators.required
			])],
			'generoTit': ['', Validators.compose([
				Validators.required
			])],

			'calleNumeroTit': ['', Validators.compose([
				Validators.required
			])],
			'coloniaPoblacionTit': ['', Validators.compose([
				Validators.required
			])],
			'delegacionMunicipioTit': ['', Validators.compose([
				Validators.required
			])],
			'estadoTit': ['', Validators.compose([
				Validators.required
			])],
			'cpTit': ['', Validators.compose([
				Validators.required
			])],
			'telefonoTit': ['', Validators.compose([
				Validators.required
			])],
			'celularTit': ['', Validators.compose([
				Validators.required
			])],
			'correoeTit': ['', Validators.compose([
				Validators.required
			])],
		});
	}
}