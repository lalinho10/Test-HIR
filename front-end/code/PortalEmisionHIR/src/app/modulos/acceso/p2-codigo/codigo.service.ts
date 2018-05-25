import { Injectable }	 from '@angular/core';

import { CodigoRequest } from './codigo.request';

@Injectable()
export class CodigoService {
	private codigoRequest: CodigoRequest;

	getRequest( frmAccesoCodigo: any ): CodigoRequest {
		this.codigoRequest = new CodigoRequest();

		this.codigoRequest.idCodigo = 0;
		this.codigoRequest.codigo = frmAccesoCodigo.codigo;

		return this.codigoRequest;
	}
}