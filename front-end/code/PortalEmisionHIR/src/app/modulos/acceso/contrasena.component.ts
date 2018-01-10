import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { AppModalService }					  from '../shared/app-modal/app-modal.service';

import { ContrasenaValidator }				  from '../../core/validators/contrasena.validator';

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
		})
	}

	fnContinuarAcceso(): void {
		this.modalService.openModal( 'info', 'Llamada a servicio de primer acceso.' );
	}
}