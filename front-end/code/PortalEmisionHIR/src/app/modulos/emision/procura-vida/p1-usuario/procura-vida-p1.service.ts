import { Injectable }	 from '@angular/core';

import { ProcuraVidaP1 } from './procura-vida-p1';

@Injectable()
export class ProcuraVidaP1Service {
	private procuraVidaP1: ProcuraVidaP1;

	setModelP1( frmProcuraVidaP1: any ): void {
		this.procuraVidaP1 = new ProcuraVidaP1();

		this.procuraVidaP1.padecimiento = frmProcuraVidaP1.padecimiento;
		this.procuraVidaP1.peso = frmProcuraVidaP1.peso;
		this.procuraVidaP1.estatura = frmProcuraVidaP1.estatura;
		this.procuraVidaP1.nombre = frmProcuraVidaP1.nombre;
		this.procuraVidaP1.apaterno = frmProcuraVidaP1.apaterno;
		this.procuraVidaP1.amaterno = frmProcuraVidaP1.amaterno;
		this.procuraVidaP1.fechanac = frmProcuraVidaP1.fechanac;
		this.procuraVidaP1.nacionalidad = frmProcuraVidaP1.nacionalidad;
		this.procuraVidaP1.ocupacion = frmProcuraVidaP1.ocupacion;
		this.procuraVidaP1.rfc = frmProcuraVidaP1.rfc;
		this.procuraVidaP1.estadoCivil = frmProcuraVidaP1.estadoCivil;
		this.procuraVidaP1.genero = frmProcuraVidaP1.genero;
		this.procuraVidaP1.calleNumero = frmProcuraVidaP1.calleNumero;
		this.procuraVidaP1.cp = frmProcuraVidaP1.cp;
		this.procuraVidaP1.estado = frmProcuraVidaP1.estado;
		this.procuraVidaP1.delegacionMunicipio = frmProcuraVidaP1.delegacionMunicipio;
		this.procuraVidaP1.coloniaPoblacion = frmProcuraVidaP1.coloniaPoblacion;
	}

	getModelP1(): ProcuraVidaP1 {
		return this.procuraVidaP1;
	}

	hasModelP1(): boolean {
		return ( this.procuraVidaP1 !== null && typeof this.procuraVidaP1 !== 'undefined' );
	}

	cleanModelP1(): void {
		this.procuraVidaP1 = undefined;
	}
}