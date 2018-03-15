import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } 	 						  from '@angular/router';

import { CodigoValidator } 					  from 'app/core/validators/codigo.validator';

@Component({
	selector: 'pehir-rcontrasena-p2',
	templateUrl: 'rcontrasena-p2.component.html'
})

export class RcontrasenaP2Component implements OnInit {
	private frmRconP2: FormGroup;

	constructor(
		private fb: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.frmRconP2 = this.fb.group({
			'codigo': ['', Validators.compose([
				Validators.required,
				CodigoValidator()
			])]
		})
	}

	fnRegresarP2Rcon(): void {
		this.router.navigateByUrl( '/rcontrasena' );
	}

	fnAvanzarP3Rcon(): void {
		this.router.navigateByUrl( '/rcontrasena/confirmacion' );
	}
}