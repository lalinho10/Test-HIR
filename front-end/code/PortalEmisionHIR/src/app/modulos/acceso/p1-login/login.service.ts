import { Injectable }	from '@angular/core';

import { LoginRequest } from './login.request';

@Injectable()
export class LoginService {
	private loginRequest: LoginRequest;

	getRequest( frmLogin: any ): LoginRequest {
		this.loginRequest = new LoginRequest();

		this.loginRequest.usuario = frmLogin.nombre;
		this.loginRequest.contrasenia = frmLogin.clave;

		return this.loginRequest;
	}
}