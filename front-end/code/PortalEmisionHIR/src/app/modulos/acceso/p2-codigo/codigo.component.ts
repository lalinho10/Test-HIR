import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { AccesoService }					  from '../acceso.service';

import { AuthenticationService }			  from 'app/core/services/authentication/authentication.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { CodigoValidator }					  from 'app/core/validators/codigo.validator';

@Component({
	selector: 'pehir-codigo',
	templateUrl: 'codigo.component.html'
})

export class CodigoComponent implements OnInit {
	frmAccesoCodigo: FormGroup;

	constructor(
		private accesoService: AccesoService,
		private authenticationService: AuthenticationService,
		private fb: FormBuilder,
		private router: Router,
		private wsClientService: WSClientService
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
		this.wsClientService
			.getObject( '/loginValidarSMS' )
			.subscribe( response =>  {
				if( response.codigoRespuesta === 200 ) {
					this.accesoService.setCodigoDesbloqueo( this.frmAccesoCodigo.controls[ 'codigo' ].value );
					this.authenticationService.tokenLogin( this.frmAccesoCodigo.controls[ 'codigo' ].value );
					//this.router.navigateByUrl( '/acceso/contrasena' );
				}
			});
	}
}