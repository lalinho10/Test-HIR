import { Component, OnInit } 				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { DesbloqueoService }				  from '../desbloqueo.service';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { CodigoValidator }					  from 'app/core/validators/codigo.validator';

@Component({
	selector: 'pehir-desbloqueo-p2',
	templateUrl: 'desbloqueo-p2.component.html'
})

export class DesbloqueoP2Component implements OnInit {
	frmDesP2: FormGroup;

	constructor(
		private fb: FormBuilder,
		private desbloqueoService: DesbloqueoService,
		private router: Router,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.frmDesP2 = this.fb.group({
			'codigo': ['', Validators.compose([
				Validators.required,
				CodigoValidator()
			])]
		})
	}

	fnRegresarP2Des(): void {
		this.router.navigateByUrl( '/desbloqueo' );
	}

	fnAvanzarP3Des(): void {
		this.wsClientService
			.getObject( '/loginRecuperaClaveCodigo' )
			.subscribe( response =>  {
				if( response.codigoRespuesta === 200 ) {
					this.desbloqueoService.setCodigoDesbloqueo( this.frmDesP2.controls[ 'codigo' ].value );
					this.router.navigateByUrl( '/desbloqueo/confirmacion' );
				}
			});
	}
}