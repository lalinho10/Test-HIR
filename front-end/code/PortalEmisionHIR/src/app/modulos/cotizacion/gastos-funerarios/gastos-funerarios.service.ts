import { Injectable }			   from '@angular/core';

import { GastosFunerariosRequest } from './gastos-funerarios.request';

@Injectable()
export class GastosFunerariosService {
	private gastosFunerariosRequest: GastosFunerariosRequest;

	getRequest( frmGastosFunerarios: any ): GastosFunerariosRequest {
		this.gastosFunerariosRequest = new GastosFunerariosRequest();

		this.gastosFunerariosRequest.nombre = frmGastosFunerarios.nombre;
		this.gastosFunerariosRequest.apPaterno = frmGastosFunerarios.apaterno;
		this.gastosFunerariosRequest.apMaterno = frmGastosFunerarios.amaterno;
		this.gastosFunerariosRequest.fechaNacimiento = frmGastosFunerarios.fechanac.epoc * 1000;
		this.gastosFunerariosRequest.sexo = frmGastosFunerarios.genero;
		this.gastosFunerariosRequest.modulo = frmGastosFunerarios.modulo;
		this.gastosFunerariosRequest.cobertura = frmGastosFunerarios.cobertura;

		return this.gastosFunerariosRequest;
	}
}