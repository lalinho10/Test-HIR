import { Injectable }	 from '@angular/core';

import { SeguhirVidaP4 } from './seguhir-vida-p4';

@Injectable()
export class SeguhirVidaP4Service {
	private seguhirVidaP4: SeguhirVidaP4;

	setModelP4( frmSeguhirVidaP4: any ) {
		this.seguhirVidaP4 = new SeguhirVidaP4();

		this.seguhirVidaP4.conyuge = undefined;
		this.seguhirVidaP4.hijo1 = undefined;
		this.seguhirVidaP4.hijo2 = undefined;
		this.seguhirVidaP4.confirmacionConyuge = frmSeguhirVidaP4.confirmacionConyuge;
		this.seguhirVidaP4.padecimientoConyuge = ( frmSeguhirVidaP4.confirmacionConyuge ) ? frmSeguhirVidaP4.padecimientoConyuge : undefined;
		this.seguhirVidaP4.confirmacionHijo1 = frmSeguhirVidaP4.confirmacionHijo1;
		this.seguhirVidaP4.padecimientoHijo1 = ( frmSeguhirVidaP4.confirmacionHijo1 ) ? frmSeguhirVidaP4.padecimientoHijo1 : undefined;
		this.seguhirVidaP4.confirmacionHijo2 = frmSeguhirVidaP4.confirmacionHijo2;
		this.seguhirVidaP4.padecimientoHijo2 = ( frmSeguhirVidaP4.confirmacionHijo2 ) ? frmSeguhirVidaP4.padecimientoHijo2 : undefined;
	}

	getModelP4(): SeguhirVidaP4 {
		return this.seguhirVidaP4;
	}

	hasModelP4(): boolean {
		return ( this.seguhirVidaP4 !== null && typeof this.seguhirVidaP4 !== 'undefined' );
	}

	cleanModelP4(): void {
		this.seguhirVidaP4 = undefined;
	}
}