import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { OCUPACIONES }						  from 'app/core/data/ocupaciones';
import { FORMASPAGO }						  from 'app/core/data/formas-Pago';

@Component({
	selector: 'pehir-segubici-p2',
	templateUrl: 'segubici-p2.component.html'
})

export class SegubiciP2Component implements OnInit {
	private frmSegubiciP2: FormGroup;

	private ocupaciones = OCUPACIONES;
	private formasPago = FORMASPAGO;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmSegubiciP2 = this.fb.group({
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
				Validators.required
			])]
		})
	}
}