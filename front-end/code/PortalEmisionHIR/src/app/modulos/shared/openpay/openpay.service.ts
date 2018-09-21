import { Injectable }			 from '@angular/core';

import { OpenpayRequest }		 from './openpay.request';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Injectable()
export class OpenpayService {
	private openPayRequest: OpenpayRequest;

	constructor( private authenticationService: AuthenticationService ) {}

	getRequest( tokenId: string, deviceSessionId: string, model: any, form: any ): OpenpayRequest {
		this.openPayRequest = new OpenpayRequest();
debugger;
		this.openPayRequest.useCardPoints = false;

		this.openPayRequest.tokenId = tokenId;
		this.openPayRequest.deviceSessionId = deviceSessionId;

		this.openPayRequest.name = 'Juan';
		this.openPayRequest.lastName = 'Pérez';
		this.openPayRequest.amount = form.monto;
		this.openPayRequest.description = form.descripcion;

		this.openPayRequest.phoneNumber = ''; //this.authenticationService.authenticatedUser.telefono;
		this.openPayRequest.email = this.authenticationService.authenticatedUser.idUsuario;

		return this.openPayRequest;
	}
}