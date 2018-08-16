import { Injectable }		   from '@angular/core';

import { SeguhirEmpresarioP2 } from './seguhir-empresario-p2';

import { Beneficiario }		   from 'app/core/models/beneficiario';

import { ResultadoCotizacion } from 'app/modulos/cotizacion/resultado-cotizacion/resultado-cotizacion';

@Injectable()
export class SeguhirEmpresarioP2Service {
	private seguhirEmpresarioP2: SeguhirEmpresarioP2;

	setModelP2( beneficiarios: Beneficiario[], frmSeguhirEmpresarioP2: any, resultado: ResultadoCotizacion ): void {
		this.seguhirEmpresarioP2 = new SeguhirEmpresarioP2();

		this.seguhirEmpresarioP2.beneficiarios = beneficiarios;
		this.seguhirEmpresarioP2.modulo = frmSeguhirEmpresarioP2.modulo;
		this.seguhirEmpresarioP2.formaPago = frmSeguhirEmpresarioP2.formaPago;
		this.seguhirEmpresarioP2.plan = frmSeguhirEmpresarioP2.plan;
		this.seguhirEmpresarioP2.agente = frmSeguhirEmpresarioP2.agente;
		this.seguhirEmpresarioP2.clave = frmSeguhirEmpresarioP2.clave;
		this.seguhirEmpresarioP2.resultado = resultado;
	}

	getModelP2(): SeguhirEmpresarioP2 {
		return this.seguhirEmpresarioP2;
	}

	hasModelP2(): boolean {
		return ( this.seguhirEmpresarioP2 !== null && typeof this.seguhirEmpresarioP2 !== 'undefined' );
	}

	cleanModelP2(): void {
		this.seguhirEmpresarioP2 = undefined;
	}
}