import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { AuthenticationService }			  from 'app/core/services/authentication/authentication.service';

import { CodigoValidator }					  from 'app/core/validators/codigo.validator';

@Component({
	selector: 'pehir-codigo',
	templateUrl: 'codigo.component.html'
})

export class CodigoComponent implements OnInit {
	frmAccesoCodigo: FormGroup;

	constructor(
		private authenticationService: AuthenticationService,
		private fb: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.frmAccesoCodigo = this.fb.group({
			'codigo': ['', Validators.compose([
				Validators.required,
				CodigoValidator()
			])]
		})
	}

	fnLogout(): void {
		this.authenticationService.logout();
	}

	fnValidarCodigo(): void {
		this.router.navigateByUrl( '/acceso/contrasena' );
	}
}