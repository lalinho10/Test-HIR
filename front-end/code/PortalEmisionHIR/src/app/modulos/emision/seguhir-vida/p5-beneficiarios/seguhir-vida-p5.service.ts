import { Injectable }	 from '@angular/core';

import { SeguhirVidaP5 } from './seguhir-vida-p5';

@Injectable()
export class SeguhirVidaP5Service {
	private seguhirVidaP5: SeguhirVidaP5;

	setModelP5() {
		this.seguhirVidaP5 = new SeguhirVidaP5();

		this.seguhirVidaP5.beneficiarios_titular = [];
		this.seguhirVidaP5.beneficiarios_conyuge = [];
		this.seguhirVidaP5.beneficiarios_hijo1 = [];
		this.seguhirVidaP5.beneficiarios_hijo2 = [];
	}

	getModelP5(): SeguhirVidaP5 {
		return this.seguhirVidaP5;
	}

	hasModelP5(): boolean {
		return ( this.seguhirVidaP5 !== null && typeof this.seguhirVidaP5 !== 'undefined' );
	}

	cleanModelP5(): void {
		this.seguhirVidaP5 = undefined;
	}
}