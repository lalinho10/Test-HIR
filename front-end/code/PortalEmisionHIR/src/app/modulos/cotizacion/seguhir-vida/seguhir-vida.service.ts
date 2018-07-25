import { Injectable }		  from '@angular/core';

import { SeguhirVidaRequest } from './seguhir-vida.request';

@Injectable()
export class SeguhirVidaService {
	private seguhirVidaRequest: SeguhirVidaRequest;

	getRequest( frmSeguhirVida: any ): SeguhirVidaRequest {
		this.seguhirVidaRequest = new SeguhirVidaRequest();

		this.seguhirVidaRequest.nombre = frmSeguhirVida.nombre;
		this.seguhirVidaRequest.apPaterno = frmSeguhirVida.apaterno;
		this.seguhirVidaRequest.apMaterno = frmSeguhirVida.amaterno;
		this.seguhirVidaRequest.fechaNacimiento = frmSeguhirVida.fechanac.epoc * 1000;
		this.seguhirVidaRequest.sexo = frmSeguhirVida.genero;
		this.seguhirVidaRequest.plan = frmSeguhirVida.plan;
		this.seguhirVidaRequest.formaPago = frmSeguhirVida.fpago;
		this.seguhirVidaRequest.modulo = frmSeguhirVida.modulo;
		this.seguhirVidaRequest.paqueteCobertura = frmSeguhirVida.pcobertura;

		return this.seguhirVidaRequest;
	}
}