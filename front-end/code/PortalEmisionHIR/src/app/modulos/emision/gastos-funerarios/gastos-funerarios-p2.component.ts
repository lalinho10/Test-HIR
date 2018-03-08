import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { MODULOS }							  from 'app/core/data/modulos';
import { COBERTURAS_GASTOSFUNERARIOS }		  from 'app/core/data/coberturas/coberturas_gastosfunerarios';

@Component({
	selector: 'pehir-gastos-funerarios-p2',
	templateUrl: 'gastos-funerarios-p2.component.html'
})

export class GastosFunerariosP2Component implements OnInit {
	private frmGastosFunerariosP2: FormGroup;

	private modulos = MODULOS;
	private coberturas = COBERTURAS_GASTOSFUNERARIOS;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmGastosFunerariosP2 = this.fb.group({
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