import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { CodigoValidator }					  from '../../core/validators/codigo.validator';

@Component({
	selector: 'pehir-codigo',
	templateUrl: 'codigo.component.html'
})

export class CodigoComponent implements OnInit {
	frmAccesoCodigo: FormGroup;

	constructor(
		private router: Router,
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.frmAccesoCodigo = this.fb.group({
			'codigo': ['', Validators.compose([
				Validators.required,
				CodigoValidator()
			])]
		})
	}

	fnValidarCodigo(): void {
		this.router.navigateByUrl( '/acceso/contrasena' );
	}
}