import { Injectable }	  from '@angular/core';

import { EmisionRequest } from './emision.request';

@Injectable()
export class EmisionService {
	private emisionRequest: EmisionRequest;

	getRequest( idContratante: number, numeroConfirmacionPago: string ): EmisionRequest {
		this.emisionRequest = new EmisionRequest();

		this.emisionRequest.idContratante = idContratante;
		this.emisionRequest.numeroConfirmacionPago = numeroConfirmacionPago;

		return this.emisionRequest;
	}
}