import { Injectable }	   from '@angular/core';

import { RegistroRequest } from './registro.request';

@Injectable()
export class RegistroService {
	private registroRequest: RegistroRequest;

	getRequest( frmRegistro: any ): RegistroRequest {
		this.registroRequest = new RegistroRequest();

		this.registroRequest.nombre = frmRegistro.nombre;
		this.registroRequest.paterno = frmRegistro.apaterno;
		this.registroRequest.materno = frmRegistro.amaterno;
		this.registroRequest.correo = frmRegistro.correoe;
		this.registroRequest.contrasenia = frmRegistro.contrasenas.contrasena;
		this.registroRequest.confirmarContrasenia = frmRegistro.contrasenas.confcontrasena;
		this.registroRequest.telefonoCelular = frmRegistro.telefonos.celular;
		this.registroRequest.telefonoFijo = frmRegistro.telefonos.telefono;

		return this.registroRequest;
	}
}