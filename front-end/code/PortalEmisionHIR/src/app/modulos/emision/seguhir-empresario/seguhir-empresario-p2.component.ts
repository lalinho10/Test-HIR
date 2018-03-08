import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { MODULOS }							  from 'app/core/data/modulos';
import { COBERTURAS_SEGUHIREMPRESARIO }		  from 'app/core/data/coberturas/coberturas_seguhirempresario';

@Component({
	selector: 'pehir-seguhir-empresario-p2',
	templateUrl: 'seguhir-empresario-p2.component.html'
})

export class SeguhirEmpresarioP2Component implements OnInit {
	private frmSeguhirEmpresarioP2: FormGroup;

	private modulos = MODULOS;
	private coberturas = COBERTURAS_SEGUHIREMPRESARIO;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmSeguhirEmpresarioP2 = this.fb.group({
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