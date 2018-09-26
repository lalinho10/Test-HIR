import { Injectable }	  from '@angular/core';

import { EmisionRequest } from './pago';

@Injectable()
export class EmisionService {
	private emisionRequest: EmisionRequest;

	getRequest( idContratante: number, numeroConfirmacionPago: number ): EmisionRequest {
		this.emisionRequest = new EmisionRequest();

		this.emisionRequest.idContratante = idContratante;
		this.emisionRequest.numeroConfirmacionPago = numeroConfirmacionPago;

		return this.emisionRequest;
	}
}