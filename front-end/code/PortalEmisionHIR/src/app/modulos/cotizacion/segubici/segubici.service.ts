import { Injectable }	  from '@angular/core';

import { SegubiciRequest } from './segubici.request';

@Injectable()
export class SegubiciService {
	private segubicRequest: SegubiciRequest;

	getRequest( frmSegubici: any ): SegubiciRequest {
		this.segubicRequest = new SegubiciRequest();

		this.segubicRequest.nombre = frmSegubici.nombre;
		this.segubicRequest.apPaterno = frmSegubici.apaterno;
		this.segubicRequest.apMaterno = frmSegubici.amaterno;
		this.segubicRequest.fechaNacimiento = frmSegubici.fechanac.epoc * 1000;
		this.segubicRequest.rfc = frmSegubici.rfc;
		this.segubicRequest.sexo = frmSegubici.genero;
		this.segubicRequest.cobertura = frmSegubici.cobertura;
		this.segubicRequest.plan = frmSegubici.plan;

		return this.segubicRequest;
	}
}