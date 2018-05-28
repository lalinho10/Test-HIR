import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { CodigoRequest }					  from './codigo.request';

import { CodigoService }					  from './codigo.service';

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
		private codigoService: CodigoService,
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
		let idCodigo: number = this.authenticationService.idCodigo;
		let codigoRequest: CodigoRequest = this.codigoService.getRequest( idCodigo, this.frmAccesoCodigo.value );

		this.wsClientService
			.postObject( '/loginAutenticacion', codigoRequest )
			.subscribe( response => {
				if( response.codigoRespuesta === 200 ) {
					this.accesoService.setCodigoAcceso( codigoRequest.codigo );
					this.authenticationService.authenticatedUserAcceso( response );
					this.authenticationService.codigoAcceso( codigoRequest.codigo );
					this.router.navigateByUrl( '/inicio' );
				}
			},
			error => {
				this.authenticationService.logout();
			});
	}
}