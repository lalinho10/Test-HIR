import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { PAQUETES }							  from 'app/core/data/paquetes';

@Component({
	selector: 'pehir-seguhir-vida-p2',
	templateUrl: 'seguhir-vida-p2.component.html'
})

export class SeguhirVidaP2Component implements OnInit {
	private frmSeguhirVidaP2: FormGroup;

	private paquetes = PAQUETES;

	constructor(
		private router: Router,
		private fb: FormBuilder
	){}

	ngOnInit() {
		this.frmSeguhirVidaP2 = this.fb.group({
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
			'plan': ['', Validators.compose([
				Validators.required
			])],
			'pcobertura': ['', Validators.compose([
				Validators.required
			])]
		});
	}

	paso3(): void {
		this.router.navigateByUrl( '/emision/apindividual/seguro' );
	}
}