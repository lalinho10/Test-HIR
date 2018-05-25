import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { LoginRequest }						  from './login.request';

import { LoginService }						  from './login.service';

import { AccesoService }					  from '../acceso.service';

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';
import { AuthenticationService }			  from 'app/core/services/authentication/authentication.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';

@Component({
	selector: 'pehir-login',
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	frmLogin: FormGroup;

	constructor(
		private accesoService: AccesoService,
		private appModalService: AppModalService,
		private authenticationService: AuthenticationService,
		private fb: FormBuilder,
		private loginService: LoginService,
		private router: Router,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.frmLogin = this.fb.group({
			'nombre': ['', Validators.compose([
				Validators.required,
				Validators.email
			])],
			'clave': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])]
		});
	}

	fnIngresar(): void {
		let loginRequest: LoginRequest = this.loginService.getRequest( this.frmLogin.value );

		this.wsClientService
			.postObject( '/loginNormal', loginRequest )
			.subscribe( response => {
				if( response.codigoRespuesta === 200 ) {
					this.accesoService.setLogin( loginRequest.usuario, loginRequest.contrasenia );
					this.authenticationService.login( response.idCodigo );
					this.router.navigateByUrl( '/acceso/codigo' );
				}
			});
	}
}