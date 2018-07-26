import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { DesbloqueoService }				  from '../desbloqueo.service';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { CelularValidator }					  from 'app/core/validators/celular.validator';

@Component({
	selector: 'pehir-desbloqueo-p1',
	templateUrl: 'desbloqueo-p1.component.html'
})

export class DesbloqueoP1Component implements OnInit {
	frmDesP1: FormGroup;

	constructor(
		private fb: FormBuilder,
		private desbloqueoService: DesbloqueoService,
		private router: Router,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.frmDesP1 = this.fb.group({
			'correoe': ['', Validators.compose([
				Validators.required,
				Validators.email,
				Validators.maxLength(50)
			])],
			'celular': ['', Validators.compose([
				Validators.required,
				CelularValidator()
			])],
			'recaptcha': ['', Validators.compose([
				Validators.required
			])]
		})
	}

	fnIrInicio(): void {
		this.router.navigateByUrl( '/acceso/login' );
	}

	fnAvanzarP2Des(): void {
		this.wsClientService
			.getObject( '/loginDesbloqueoCorreo' )
			.subscribe( response =>  {
				if( response.codigoRespuesta === 200 ) {
					this.desbloqueoService.setContactoDesbloqueo(
						this.frmDesP1.controls[ 'correoe' ].value,
						this.frmDesP1.controls[ 'celular' ].value
					);
					this.router.navigateByUrl( '/desbloqueo/codigo' );
				}
			});
	}
}