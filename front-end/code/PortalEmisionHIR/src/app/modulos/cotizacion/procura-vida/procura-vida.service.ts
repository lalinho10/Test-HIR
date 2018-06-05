import { Injectable }		  from '@angular/core';

import { ProcuraVidaRequest } from './procura-vida.request';

@Injectable()
export class ProcuraVidaService {
	private procuraVidaRequest: ProcuraVidaRequest;

	getRequest( frmProcuraVida: any ): ProcuraVidaRequest {
		this.procuraVidaRequest = new ProcuraVidaRequest();

		this.procuraVidaRequest.nombre = frmProcuraVida.nombre;
		this.procuraVidaRequest.apPaterno = frmProcuraVida.apaterno;
		this.procuraVidaRequest.apMaterno = frmProcuraVida.amaterno;
		this.procuraVidaRequest.fechaNacimiento = frmProcuraVida.fechanac.epoc * 1000;
		this.procuraVidaRequest.sexo = frmProcuraVida.genero;
		this.procuraVidaRequest.modulo = frmProcuraVida.modulo;
		this.procuraVidaRequest.cobertura = frmProcuraVida.cobertura;

		return this.procuraVidaRequest;
	}
}