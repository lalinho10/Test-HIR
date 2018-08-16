import { Injectable }		   from '@angular/core';

import { GastosFunerariosP2 }  from './gastos-funerarios-p2';

import { Beneficiario }		   from 'app/core/models/beneficiario';

import { ResultadoCotizacion } from 'app/modulos/cotizacion/resultado-cotizacion/resultado-cotizacion';

@Injectable()
export class GastosFunerariosP2Service {
	private gastosFunerariosP2: GastosFunerariosP2;

	setModelP2( beneficiarios: Beneficiario[], frmGastosFunerariosP2: any, resultado: ResultadoCotizacion ): void {
		this.gastosFunerariosP2 = new GastosFunerariosP2();

		this.gastosFunerariosP2.beneficiarios = beneficiarios;
		this.gastosFunerariosP2.modulo = frmGastosFunerariosP2.modulo;
		this.gastosFunerariosP2.formaPago = frmGastosFunerariosP2.formaPago;
		this.gastosFunerariosP2.plan = frmGastosFunerariosP2.plan;
		this.gastosFunerariosP2.agente = frmGastosFunerariosP2.agente;
		this.gastosFunerariosP2.clave = frmGastosFunerariosP2.clave;
		this.gastosFunerariosP2.resultado = resultado;
	}

	getModelP2(): GastosFunerariosP2 {
		return this.gastosFunerariosP2;
	}

	hasModelP2(): boolean {
		return ( this.gastosFunerariosP2 !== null && typeof this.gastosFunerariosP2 !== 'undefined' );
	}

	cleanModelP2(): void {
		this.gastosFunerariosP2 = undefined;
	}
}