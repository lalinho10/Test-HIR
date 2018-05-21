import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AppModalService }					  from 'app/core/components/app-modal/app-modal.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ContrasenaValidator }				  from 'app/core/validators/contrasena.validator';
import { IgualdadContrasenasValidator }		  from 'app/core/validators/igualdad-contrasenas.validator';

@Component({
	selector: 'pehir-cambiar-contrasena',
	templateUrl: 'cambiar-contrasena.component.html'
})

export class CambiarContrasenaComponent implements OnInit {
	titulo: string = 'Cambio de contraseña de acceso';
	frmCambiarContrasena: FormGroup;

	constructor(
		private appModalService: AppModalService,
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
			validator: IgualdadContrasenasValidator( 'contrasenaNueva', 'confContrasenaNueva' )
		});
	}

	fnCambiarContrasena(): void {
		this.wsClientService
			.getObject( '/cambioClave' )
			.subscribe( response =>  {
				if( response.codigoRespuesta === 200 ) {
					this.appModalService.openModal( 'success', response.mensaje );
				}
			});
	}
}