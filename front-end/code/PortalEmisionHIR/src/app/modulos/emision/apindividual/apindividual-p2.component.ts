import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { OCUPACIONES }						  from 'app/core/data/ocupaciones';
import { FORMASPAGO }						  from 'app/core/data/formas-Pago';
import { COBERTURAS_APINDIVIDUAL }			  from 'app/core/data/coberturas/coberturas_apindividual';

@Component({
	selector: 'pehir-apindividual-p2',
	templateUrl: 'apindividual-p2.component.html'
})

export class ApindividualP2Component implements OnInit {
	private frmApindividualP2: FormGroup;

	private ocupaciones = OCUPACIONES;
	private formasPago = FORMASPAGO;
	private coberturas = COBERTURAS_APINDIVIDUAL;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmApindividualP2 = this.fb.group({
			'ocupacion': ['', Validators.compose([
				Validators.required
			])],
			'descactividad': ['', Validators.compose([
				Validators.required
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required
			])],
			'deducible': ['', Validators.compose([
				Validators.required
			])],
			'fpago': ['', Validators.compose([
				Validators.required
			])],
			'agente': ['', Validators.compose([
				Validators.required
			])],
			'clave': ['', Validators.compose([
				Validators.required,
				ClaveAgenteValidator()
			])]
		})
	}
}