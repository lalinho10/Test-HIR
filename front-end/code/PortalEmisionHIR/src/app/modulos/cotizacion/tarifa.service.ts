import { Injectable }	 from '@angular/core';

import { TarifaRequest } from './tarifa.request';

@Injectable()
export class TarifaService {
	private tarifaRequest: TarifaRequest;

	getRequest( idProd: number, frmCotizacion: any ): TarifaRequest {
		this.tarifaRequest = new TarifaRequest();

		this.tarifaRequest.idProd = idProd; 
		this.tarifaRequest.idPlan = frmCotizacion.plan;
		this.tarifaRequest.fechaNacimiento = frmCotizacion.fechanac.epoc * 1000;
		this.tarifaRequest.idFormaPago = frmCotizacion.fpago;
		this.tarifaRequest.modulos = frmCotizacion.modulo;

		return this.tarifaRequest;
	}

	getRequestEmision( idProd: number, fechaNacimiento: any, frmEmision: any ): TarifaRequest {
		this.tarifaRequest = new TarifaRequest();

		this.tarifaRequest.idProd = idProd;
		this.tarifaRequest.idPlan = frmEmision.plan.id;
		this.tarifaRequest.fechaNacimiento = fechaNacimiento.epoc * 1000;
		this.tarifaRequest.idFormaPago = frmEmision.formaPago.id;
		this.tarifaRequest.modulos = frmEmision.modulo.idModulo;

		return this.tarifaRequest;
	}
}