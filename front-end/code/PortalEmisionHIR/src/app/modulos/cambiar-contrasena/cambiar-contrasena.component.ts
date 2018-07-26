import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CambiarContrasenaRequest }			  from './cambiar-contrasena.request';

import { CambiarContrasenaService }			  from './cambiar-contrasena.service';

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';

import { WSClientService }					  from 'app/core/services/ws-client.service';
import { AuthenticationService }			  from 'app/core/services/authentication/authentication.service';

import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';
import { CambioContrasenaValidator }		  from 'app/core/validators/cambio-contrasena.validator';

@Component({
	selector: 'pehir-cambiar-contrasena',
	templateUrl: 'cambiar-contrasena.component.html'
})

export class CambiarContrasenaComponent implements OnInit {
	titulo: string = 'Cambio de contraseña de acceso';

	frmCambiarContrasena: FormGroup;

	constructor(
		private appModalService: AppModalService,
		private authenticationService: AuthenticationService,
		private cambiarContrasenaService: CambiarContrasenaService,
		private fb: FormBuilder,
		private wsClientService: WSClientService
	) {}

	ngOnInit() {
		this.crearFormulario();
	}

	private crearFormulario(): void {
		this.frmCambiarContrasena = this.fb.group({
			'contrasenaActual': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])],
			'contrasenaNueva': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])],
			'confContrasenaNueva': ['', Validators.compose([
				Validators.required,
				ContrasenaValidator()
			])],
		},
		{
			validator: CambioContrasenaValidator( 'contrasenaActual', 'contrasenaNueva', 'confContrasenaNueva' )
		});
	}

	fnCambiarContrasena(): void {
		let cambiarContrasenaRequest: CambiarContrasenaRequest = this.cambiarContrasenaService.getRequest( this.authenticationService.idUsuario, this.frmCambiarContrasena.value );

		this.wsClientService
			.postObject( '/loginCambiaClave', cambiarContrasenaRequest )
			.subscribe( response =>  {
				if( response.codigoRespuesta === 200 ) {
					this.appModalService.openModal( 'success', response.mensaje );
				}
			});
	}
}