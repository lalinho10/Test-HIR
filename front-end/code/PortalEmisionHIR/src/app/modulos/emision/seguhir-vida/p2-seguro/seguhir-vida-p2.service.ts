import { Injectable }	 from '@angular/core';

import { SeguhirVidaP2 } from './seguhir-vida-p2';

import { Plan }			 from 'app/core/models/plan';

@Injectable()
export class SeguhirVidaP2Service {
	private seguhirVidaP2: SeguhirVidaP2;

	setModelP2( frmSeguhirVidaP2: any ) {
		this.seguhirVidaP2 = new SeguhirVidaP2();

		this.seguhirVidaP2.gobierno = frmSeguhirVidaP2.gobierno;
		this.seguhirVidaP2.especifiqueGob = ( frmSeguhirVidaP2.gobierno ) ? frmSeguhirVidaP2.especifiqueGob : undefined;
		this.seguhirVidaP2.parienteGob = frmSeguhirVidaP2.parienteGob;
		this.seguhirVidaP2.especifiqueParGob = ( frmSeguhirVidaP2.parienteGob ) ? frmSeguhirVidaP2.especifiqueParGob : undefined;
		this.seguhirVidaP2.plan = frmSeguhirVidaP2.plan;
		this.seguhirVidaP2.modulo = frmSeguhirVidaP2.modulo;
		this.seguhirVidaP2.ugastos = frmSeguhirVidaP2.ugastos;
		this.seguhirVidaP2.apfondoasegurado = frmSeguhirVidaP2.apfondoasegurado;
		this.seguhirVidaP2.formaPago = frmSeguhirVidaP2.formaPago;
		this.seguhirVidaP2.cobertura = frmSeguhirVidaP2.cobertura;
		this.seguhirVidaP2.aportacion = frmSeguhirVidaP2.aportacion;
		this.seguhirVidaP2.total = frmSeguhirVidaP2.total;
	}

	getModelP2(): SeguhirVidaP2 {
		return this.seguhirVidaP2;
	}

	getPlan(): Plan {
		return this.seguhirVidaP2.plan;
	}

	hasModelP2(): boolean {
		return ( this.seguhirVidaP2 !== null && typeof this.seguhirVidaP2 !== 'undefined' );
	}

	cleanModelP2(): void {
		this.seguhirVidaP2 = undefined;
	}
}