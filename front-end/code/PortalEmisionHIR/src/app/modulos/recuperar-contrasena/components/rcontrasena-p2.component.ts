import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } 	 						  from '@angular/router';

import { RcontrasenaService }				  from '../services/rcontrasena.service';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { CodigoValidator } 					  from 'app/core/validators/codigo.validator';

@Component({
	selector: 'pehir-rcontrasena-p2',
	templateUrl: 'rcontrasena-p2.component.html'
})

export class RcontrasenaP2Component implements OnInit {
	private frmRconP2: FormGroup;

	constructor(
		private fb: FormBuilder,
		private rcontrasenaService: RcontrasenaService,
		private router: Router,
		private wsClientService: WSClientService
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
		this.wsClientService
			.getObject( '/loginRecuperaClaveCodigo' )
			.subscribe( response =>  {
				if( response.codigoRespuesta === 200 ) {
					this.rcontrasenaService.setCodigoRcontrasena( this.frmRconP2.controls[ 'codigo' ].value );
					this.router.navigateByUrl( '/rcontrasena/confirmacion' );
				}
			});
	}
}