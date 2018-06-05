import { Injectable }		   from '@angular/core';

import { ApindividualRequest } from './apindividual.request';

@Injectable()
export class ApindividualService {
	private apindividualRequest: ApindividualRequest;

	getRequest( frmApindividual: any ): ApindividualRequest {
		this.apindividualRequest = new ApindividualRequest();

		this.apindividualRequest.nombre = frmApindividual.nombre;
		this.apindividualRequest.apPaterno = frmApindividual.apaterno;
		this.apindividualRequest.apMaterno = frmApindividual.amaterno;
		this.apindividualRequest.fechaNacimiento = frmApindividual.fechanac.epoc * 1000;
		this.apindividualRequest.rfc = frmApindividual.rfc;
		this.apindividualRequest.sexo = frmApindividual.genero;
		this.apindividualRequest.cobertura = frmApindividual.cobertura;
		this.apindividualRequest.plan = frmApindividual.plan;

		return this.apindividualRequest;
	}
}