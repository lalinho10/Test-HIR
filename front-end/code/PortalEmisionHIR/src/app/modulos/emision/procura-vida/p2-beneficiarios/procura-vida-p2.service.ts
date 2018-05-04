import { Injectable }	 from '@angular/core';

import { ProcuraVidaP2 } from './procura-vida-p2';

import { Beneficiario }	 from 'app/core/models/beneficiario';

@Injectable()
export class ProcuraVidaP2Service {
	private procuraVidaP2: ProcuraVidaP2;

	setModelP2( beneficiarios: Beneficiario[], frmProcuraVidaP2: any ): void {
		this.procuraVidaP2 = new ProcuraVidaP2();

		this.procuraVidaP2.beneficiarios = beneficiarios;
		this.procuraVidaP2.modulo = frmProcuraVidaP2.modulo;
		this.procuraVidaP2.sumasegurada = frmProcuraVidaP2.sumasegurada;
		this.procuraVidaP2.cobertura = frmProcuraVidaP2.cobertura;
		this.procuraVidaP2.formaPago = frmProcuraVidaP2.formaPago;
		this.procuraVidaP2.agente = frmProcuraVidaP2.agente;
		this.procuraVidaP2.clave = frmProcuraVidaP2.clave;
	}

	getModelP2(): ProcuraVidaP2 {
		return this.procuraVidaP2;
	}

	hasModelP2(): boolean {
		return ( this.procuraVidaP2 !== null && typeof this.procuraVidaP2 !== 'undefined' );
	}

	cleanModelP2(): void {
		this.procuraVidaP2 = undefined;
	}
}