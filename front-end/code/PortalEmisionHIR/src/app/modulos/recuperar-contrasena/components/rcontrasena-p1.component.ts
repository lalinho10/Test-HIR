import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } 	 						  from '@angular/router';

import { RcontrasenaService }				  from '../services/rcontrasena.service';

import { WSClientService }					  from 'app/core/services/ws-client.service';

@Component({
	selector: 'pehir-rcontrasena-p1',
	templateUrl: 'rcontrasena-p1.component.html'
})

export class RcontrasenaP1Component implements OnInit {
	private frmRconP1: FormGroup;

	constructor(
		private fb: FormBuilder,
		private rcontrasenaService: RcontrasenaService,
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
		this.wsClientService
			.getObject( '/loginRecuperaClaveCorreo' )
			.subscribe( response =>  {
				if( response.codigoRespuesta === 200 ) {
					this.rcontrasenaService.setContactoRcontrasena( this.frmRconP1.controls[ 'correoe' ].value );
					this.router.navigateByUrl( '/rcontrasena/codigo' );
				}
			});
	}
}