import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { AppModalService }					  from 'app/modulos/shared/app-modal/app-modal.service';

import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';
import { IgualdadContrasenasValidator }		  from 'app/core/validators/igualdad-contrasenas.validator';

@Component({
	selector: 'pehir-contrasena',
	templateUrl: 'contrasena.component.html'
})

export class ContrasenaComponent implements OnInit {
	frmContrasena: FormGroup;

	constructor(
		private modalService: AppModalService,
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.frmContrasena = this.fb.group({
			'contrasena': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])],
			'confcontrasena': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])]
		},
		{
			validator: IgualdadContrasenasValidator( 'contrasena', 'confcontrasena' )
		})
	}

	fnContinuarAcceso(): void {
		this.modalService.openModal( 'info', 'Llamada a servicio de primer acceso.' );
	}
}