import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } 	 						  from '@angular/router';

import { RcontrasenaP1Request }				  from './rcontrasena-p1.request';

import { RcontrasenaP1Service }				  from './rcontrasena-p1.service';

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

@Component({
	selector: 'pehir-rcontrasena-p1',
	templateUrl: 'rcontrasena-p1.component.html'
})

export class RcontrasenaP1Component implements OnInit {
	frmRconP1: FormGroup;

	constructor(
		private appModalService: AppModalService,
		private fb: FormBuilder,
		private rcontrasenaP1Service: RcontrasenaP1Service,
		private router: Router,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.frmRconP1 = this.fb.group({
			'correoe': ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
			])],
			'recaptcha': ['', Validators.compose([
				Validators.required
			])]
		})
	}

	fnIrInicio(): void {
		this.router.navigateByUrl( '/acceso/login' );
	}

	fnAvanzarP2Rcon(): void {
		let rcontrasenaP1Request: RcontrasenaP1Request = this.rcontrasenaP1Service.getRequest( this.frmRconP1.value );

		this.wsClientService
			.postObject( '/loginRecuperaClave', rcontrasenaP1Request )
			.subscribe( response => {
				if( response.codigoRespuesta === 200 ) {
					this.appModalService.openModal( 'success', response.mensaje );
					this.router.navigateByUrl( '/acceso' );
				}
			});
	}
}