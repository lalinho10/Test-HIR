import { Injectable }		   from '@angular/core';

import { SegubiciP2 }		   from './segubici-p2';

import { ResultadoCotizacion } from 'app/modulos/cotizacion/resultado-cotizacion/resultado-cotizacion';

@Injectable()
export class SegubiciP2Service {
	private segubiciP2: SegubiciP2;

	setModelP2( frmSegubiciP2: any, resultado: ResultadoCotizacion ): void {
		this.segubiciP2 = new SegubiciP2();

		this.segubiciP2.ocupacion = frmSegubiciP2.ocupacion;
		this.segubiciP2.descactividad = frmSegubiciP2.descactividad;
		this.segubiciP2.modulo = frmSegubiciP2.modulo;
		this.segubiciP2.formaPago = frmSegubiciP2.formaPago;
		this.segubiciP2.plan = frmSegubiciP2.plan;
		this.segubiciP2.agente = frmSegubiciP2.agente;
		this.segubiciP2.clave = frmSegubiciP2.clave;
		this.segubiciP2.resultado = resultado;
	}

	getModelP2(): SegubiciP2 {
		return this.segubiciP2;
	}

	hasModelP2(): boolean {
		return ( this.segubiciP2 !== null && typeof this.segubiciP2 !== 'undefined' );
	}

	cleanModelP2(): void {
		this.segubiciP2 = undefined;
	}
}