import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { CelularValidator }					  from 'app/core/validators/celular.validator';

@Component({
	selector: 'pehir-desbloqueo-p1',
	templateUrl: 'desbloqueo-p1.component.html'
})

export class DesbloqueoP1Component implements OnInit {
	private frmDesP1: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.frmDesP1 = this.fb.group({
			'correoe': ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
			])],
			'celular': ['', Validators.compose([
				Validators.required,
				CelularValidator()
			])],
			'recaptcha': ['', Validators.compose([
				Validators.required
			])]
		})
	}

	fnIrInicio(): void {
		this.router.navigateByUrl( '/acceso/login' );
	}

	fnAvanzarP2Des(): void {
		this.router.navigateByUrl( '/desbloqueo/codigo' );
	}
}