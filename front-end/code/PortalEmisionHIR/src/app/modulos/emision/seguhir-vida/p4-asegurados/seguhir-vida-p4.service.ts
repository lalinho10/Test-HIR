import { Injectable }	 from '@angular/core';

import { SeguhirVidaP4 } from './seguhir-vida-p4';

import { Asegurado }	 from 'app/core/models/asegurado';

@Injectable()
export class SeguhirVidaP4Service {
	private seguhirVidaP4: SeguhirVidaP4;

	setModelP4( asegurados: Asegurado[], frmSeguhirVidaP4: any ) {
		this.seguhirVidaP4 = new SeguhirVidaP4();

		let aseguradoC  = asegurados.filter( ( asegurado: Asegurado ) => asegurado.tipoAsegurado == 'Conyuge' );
		let aseguradoH1 = asegurados.filter( ( asegurado: Asegurado ) => asegurado.tipoAsegurado == 'Hijo1' );
		let aseguradoH2 = asegurados.filter( ( asegurado: Asegurado ) => asegurado.tipoAsegurado == 'Hijo2' );

		this.seguhirVidaP4.conyuge = ( aseguradoC.length > 0 ) ? aseguradoC[ 0 ] : undefined;
		this.seguhirVidaP4.hijo1 = ( aseguradoH1.length > 0 ) ? aseguradoH1[ 0 ] : undefined;
		this.seguhirVidaP4.hijo2 = ( aseguradoH2.length > 0 ) ? aseguradoH2[ 0 ] : undefined;

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