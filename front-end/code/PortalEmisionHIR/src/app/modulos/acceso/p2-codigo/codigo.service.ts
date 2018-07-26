import { Injectable }	 from '@angular/core';

import { CodigoRequest } from './codigo.request';

@Injectable()
export class CodigoService {
	private codigoRequest: CodigoRequest;

	getRequest( idCodigo: number, frmAccesoCodigo: any ): CodigoRequest {
		this.codigoRequest = new CodigoRequest();

		this.codigoRequest.idCodigo = idCodigo;
		this.codigoRequest.codigo = frmAccesoCodigo.codigo;

		return this.codigoRequest;
	}
}