import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';

import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';
import { IgualdadContrasenasValidator }		  from 'app/core/validators/igualdad-contrasenas.validator';

@Component({
	selector: 'pehir-desbloqueo-p3',
	templateUrl: 'desbloqueo-p3.component.html'
})

export class DesbloqueoP3Component implements OnInit {
	private frmDesP3: FormGroup;

	constructor(
		private fb: FormBuilder,
		private modalService: AppModalService,
		private router: Router
	) {}

	ngOnInit() {
		this.frmDesP3 = this.fb.group({
			'contrasena': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])],
			'confcontrasena': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])],
			'confirmacion': [true, Validators.required]
		}, {
			validator: IgualdadContrasenasValidator( 'contrasena', 'confcontrasena' )
		});
	}

	fnConfirmarCambio(): void {
		if( this.frmDesP3.controls[ 'confirmacion' ].value ) {
			this.frmDesP3.controls[ 'contrasena' ].enable();
			this.frmDesP3.controls[ 'confcontrasena' ].enable();
		} else {
			this.frmDesP3.controls[ 'contrasena' ].disable();
			this.frmDesP3.controls[ 'confcontrasena' ].disable();
		}
	}

	fnDesbloquear(): void {
		if( this.frmDesP3.controls[ 'confirmacion' ].value ) {
			this.modalService.openModal( 'info', 'Llamada a servicio de Desbloqueo.' )
		} else {
			this.router.navigateByUrl( '/acceso/login' );
		}
		
	}
}