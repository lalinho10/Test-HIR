import { Injectable }		   from '@angular/core';

import { SeguhirEmpresarioP2 } from './seguhir-empresario-p2';

import { Beneficiario }		   from 'app/core/models/beneficiario';

@Injectable()
export class SeguhirEmpresarioP2Service {
	private seguhirEmpresarioP2: SeguhirEmpresarioP2;

	setModelP2( beneficiarios: Beneficiario[], frmSeguhirEmpresarioP2: any ): void {
		this.seguhirEmpresarioP2 = new SeguhirEmpresarioP2();

		this.seguhirEmpresarioP2.beneficiarios = beneficiarios;
		this.seguhirEmpresarioP2.modulo = frmSeguhirEmpresarioP2.modulo;
		this.seguhirEmpresarioP2.cobertura = frmSeguhirEmpresarioP2.cobertura;
		this.seguhirEmpresarioP2.formaPago = frmSeguhirEmpresarioP2.formaPago;
		this.seguhirEmpresarioP2.agente = frmSeguhirEmpresarioP2.agente;
		this.seguhirEmpresarioP2.clave = frmSeguhirEmpresarioP2.clave;
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