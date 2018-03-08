import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { MODULOS }							  from 'app/core/data/modulos';
import { COBERTURAS_PROCURAVIDA }			  from 'app/core/data/coberturas/coberturas_procuravida';

@Component({
	selector: 'pehir-procura-vida-p2',
	templateUrl: 'procura-vida-p2.component.html'
})

export class ProcuraVidaP2Component implements OnInit {
	private frmProcuraVidaP2: FormGroup;

	private modulos = MODULOS;
	private coberturas = COBERTURAS_PROCURAVIDA;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmProcuraVidaP2 = this.fb.group({
			'agente': ['', Validators.compose([
				Validators.required
			])],
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required
			])],
			'clave': ['', Validators.compose([
				Validators.required,
				ClaveAgenteValidator()
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])]
		});
	}
}