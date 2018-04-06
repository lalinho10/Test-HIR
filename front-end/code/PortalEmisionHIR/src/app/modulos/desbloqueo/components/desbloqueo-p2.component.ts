import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { CodigoValidator }					  from 'app/core/validators/codigo.validator';

@Component({
	selector: 'pehir-desbloqueo-p2',
	templateUrl: 'desbloqueo-p2.component.html'
})

export class DesbloqueoP2Component implements OnInit {
	private frmDesP2: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.frmDesP2 = this.fb.group({
			'codigo': ['', Validators.compose([
				Validators.required,
				CodigoValidator()
			])]
		})
	}

	fnRegresarP2Des(): void {
		this.router.navigateByUrl( '/desbloqueo' );
	}

	fnAvanzarP3Des(): void {
		this.router.navigateByUrl( '/desbloqueo/confirmacion' );
	}
}