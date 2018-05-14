import { Injectable }	 from '@angular/core';

import { SeguhirVidaP1 } from './seguhir-vida-p1';

@Injectable()
export class SeguhirVidaP1Service {
	private seguhirVidaP1: SeguhirVidaP1;

	setModelP1( frmSeguhirVidaP1: any ) {
		this.seguhirVidaP1 = new SeguhirVidaP1();

		this.seguhirVidaP1.nombreCon = frmSeguhirVidaP1.nombreCon;
		this.seguhirVidaP1.apaternoCon = frmSeguhirVidaP1.apaternoCon;
		this.seguhirVidaP1.amaternoCon = frmSeguhirVidaP1.amaternoCon;
		this.seguhirVidaP1.fechanacCon = frmSeguhirVidaP1.fechanacCon;
		this.seguhirVidaP1.nacionalidadCon = frmSeguhirVidaP1.nacionalidadCon;
		this.seguhirVidaP1.ocupacionCon = frmSeguhirVidaP1.ocupacionCon;
		this.seguhirVidaP1.rfcCon = frmSeguhirVidaP1.rfcCon;
		this.seguhirVidaP1.estadoCivilCon = frmSeguhirVidaP1.estadoCivilCon;
		this.seguhirVidaP1.generoCon = frmSeguhirVidaP1.generoCon;
		this.seguhirVidaP1.calleNumeroCon = frmSeguhirVidaP1.calleNumeroCon;
		this.seguhirVidaP1.coloniaPoblacionCon = frmSeguhirVidaP1.coloniaPoblacionCon;
		this.seguhirVidaP1.delegacionMunicipioCon = frmSeguhirVidaP1.delegacionMunicipioCon;
		this.seguhirVidaP1.estadoCon = frmSeguhirVidaP1.estadoCon;
		this.seguhirVidaP1.cpCon = frmSeguhirVidaP1.cpCon;
		this.seguhirVidaP1.telefonoCon = frmSeguhirVidaP1.telefonosCon.telefonoCon;
		this.seguhirVidaP1.celularCon = frmSeguhirVidaP1.telefonosCon.celularCon;
		this.seguhirVidaP1.correoeCon = frmSeguhirVidaP1.correoeCon;
		this.seguhirVidaP1.nombreTit = frmSeguhirVidaP1.nombreTit;
		this.seguhirVidaP1.apaternoTit = frmSeguhirVidaP1.apaternoTit;
		this.seguhirVidaP1.amaternoTit = frmSeguhirVidaP1.amaternoTit;
		this.seguhirVidaP1.fechanacTit = frmSeguhirVidaP1.fechanacTit;
		this.seguhirVidaP1.nacionalidadTit = frmSeguhirVidaP1.nacionalidadTit;
		this.seguhirVidaP1.ocupacionTit = frmSeguhirVidaP1.ocupacionTit;
		this.seguhirVidaP1.rfcTit = frmSeguhirVidaP1.rfcTit;
		this.seguhirVidaP1.estadoCivilTit = frmSeguhirVidaP1.estadoCivilTit;
		this.seguhirVidaP1.generoTit = frmSeguhirVidaP1.generoTit;
		this.seguhirVidaP1.calleNumeroTit = frmSeguhirVidaP1.calleNumeroTit;
		this.seguhirVidaP1.coloniaPoblacionTit = frmSeguhirVidaP1.coloniaPoblacionTit;
		this.seguhirVidaP1.delegacionMunicipioTit = frmSeguhirVidaP1.delegacionMunicipioTit;
		this.seguhirVidaP1.estadoTit = frmSeguhirVidaP1.estadoTit;
		this.seguhirVidaP1.cpTit = frmSeguhirVidaP1.cpTit;
		this.seguhirVidaP1.telefonoTit = frmSeguhirVidaP1.telefonosTit.telefonoTit;
		this.seguhirVidaP1.celularTit = frmSeguhirVidaP1.telefonosTit.celularTit;
		this.seguhirVidaP1.correoeTit = frmSeguhirVidaP1.correoeTit;
	}

	getModelP1(): SeguhirVidaP1 {
		return this.seguhirVidaP1;
	}

	hasModelP1(): boolean {
		return ( this.seguhirVidaP1 !== null && typeof this.seguhirVidaP1 !== 'undefined' );
	}

	cleanModelP1(): void {
		this.seguhirVidaP1 = undefined;
	}
}