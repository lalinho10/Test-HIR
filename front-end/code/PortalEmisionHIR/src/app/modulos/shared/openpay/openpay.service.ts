import { Injectable }			 from '@angular/core';

import { OpenpayRequest }		 from './openpay.request';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Injectable()
export class OpenpayService {
	private openPayRequest: OpenpayRequest;

	constructor( private authenticationService: AuthenticationService ) {}

	getRequest( tokenId: string, deviceSessionId: string, model: any, form: any ): OpenpayRequest {
		this.openPayRequest = new OpenpayRequest();

		this.openPayRequest.useCardPoints = false;

		this.openPayRequest.tokenId = tokenId;
		this.openPayRequest.deviceSessionId = deviceSessionId;

		this.openPayRequest.name = form.titular;
		this.openPayRequest.lastName = '';
		this.openPayRequest.amount = form.monto;
		this.openPayRequest.description = form.descripcion;

		this.openPayRequest.phoneNumber = this.authenticationService.authenticatedUser.telefonoCelular;
		this.openPayRequest.email = this.authenticationService.authenticatedUser.idUsuario;

		return this.openPayRequest;
	}
}