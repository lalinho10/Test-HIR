import { Injectable }				from '@angular/core';

import { CambiarContrasenaRequest } from './cambiar-contrasena.request';

@Injectable()
export class CambiarContrasenaService {
	private cambiarContrasenaRequest: CambiarContrasenaRequest;

	getRequest( idUsuario: string, frmCambiarContrasena: any ) {
		this.cambiarContrasenaRequest = new CambiarContrasenaRequest();

		this.cambiarContrasenaRequest.usuario = idUsuario;
		this.cambiarContrasenaRequest.contrasenia = frmCambiarContrasena.contrasenaActual;
		this.cambiarContrasenaRequest.nuevaContrasenia = frmCambiarContrasena.contrasenaNueva;

		return this.cambiarContrasenaRequest;
	}
}