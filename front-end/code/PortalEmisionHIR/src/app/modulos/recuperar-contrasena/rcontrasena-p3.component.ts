import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';

import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';
import { IgualdadContrasenasValidator }		  from 'app/core/validators/igualdad-contrasenas.validator';

@Component({
	selector: 'pehir-rcontrasena-p3',
	templateUrl: 'rcontrasena-p3.component.html'
})

export class RcontrasenaP3Component implements OnInit {
	private frmRconP3: FormGroup;

	constructor(
		private modalService: AppModalService,
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.frmRconP3 = this.fb.group({
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

	fnRecuperarContrasena(): void {
		this.modalService.openModal( 'info', 'Llamada a servicio de Recuperación de contraseña.' );
	}
}