import { Injectable }	 from '@angular/core';

import { SeguhirVidaP1 } from './seguhir-vida-p1';

@Injectable()
export class SeguhirVidaP1Service {
	private seguhirVidaP1: SeguhirVidaP1;

	setModelP1( frmSeguhirVidaP1: any ) {
		this.seguhirVidaP1 = new SeguhirVidaP1();

		this.seguhirVidaP1.nombreCon = frmSeguhirVidaP1.contratante.nombre;
		this.seguhirVidaP1.apaternoCon = frmSeguhirVidaP1.contratante.apaterno;
		this.seguhirVidaP1.amaternoCon = frmSeguhirVidaP1.contratante.amaterno;
		this.seguhirVidaP1.fechanacCon = frmSeguhirVidaP1.contratante.fechanac;
		this.seguhirVidaP1.nacionalidadCon = frmSeguhirVidaP1.contratante.nacionalidad;
		this.seguhirVidaP1.ocupacionCon = frmSeguhirVidaP1.contratante.ocupacion;
		this.seguhirVidaP1.rfcCon = frmSeguhirVidaP1.contratante.rfc;
		this.seguhirVidaP1.estadoCivilCon = frmSeguhirVidaP1.contratante.estadoCivil;
		this.seguhirVidaP1.generoCon = frmSeguhirVidaP1.contratante.genero;
		this.seguhirVidaP1.calleNumeroCon = frmSeguhirVidaP1.contratante.calleNumero;
		this.seguhirVidaP1.coloniaPoblacionCon = frmSeguhirVidaP1.contratante.coloniaPoblacion;
		this.seguhirVidaP1.delegacionMunicipioCon = frmSeguhirVidaP1.contratante.delegacionMunicipio;
		this.seguhirVidaP1.estadoCon = frmSeguhirVidaP1.contratante.estado;
		this.seguhirVidaP1.cpCon = frmSeguhirVidaP1.contratante.cp;
		this.seguhirVidaP1.telefonoCon = frmSeguhirVidaP1.contratante.telefonos.telefono;
		this.seguhirVidaP1.celularCon = frmSeguhirVidaP1.contratante.telefonos.celular;
		this.seguhirVidaP1.correoeCon = frmSeguhirVidaP1.contratante.correoe;
		this.seguhirVidaP1.nombreTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.nombre : frmSeguhirVidaP1.titular.nombre;
		this.seguhirVidaP1.apaternoTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.apaterno : frmSeguhirVidaP1.titular.apaterno;
		this.seguhirVidaP1.amaternoTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.amaterno : frmSeguhirVidaP1.titular.amaterno;
		this.seguhirVidaP1.fechanacTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.fechanac : frmSeguhirVidaP1.titular.fechanac;
		this.seguhirVidaP1.nacionalidadTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.nacionalidad : frmSeguhirVidaP1.titular.nacionalidad;
		this.seguhirVidaP1.ocupacionTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.ocupacion : frmSeguhirVidaP1.titular.ocupacion;
		this.seguhirVidaP1.rfcTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.rfc : frmSeguhirVidaP1.titular.rfc;
		this.seguhirVidaP1.estadoCivilTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.estadoCivil : frmSeguhirVidaP1.titular.estadoCivil;
		this.seguhirVidaP1.generoTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.genero : frmSeguhirVidaP1.titular.genero;
		this.seguhirVidaP1.calleNumeroTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.calleNumero : frmSeguhirVidaP1.titular.calleNumero;
		this.seguhirVidaP1.coloniaPoblacionTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.coloniaPoblacion : frmSeguhirVidaP1.titular.coloniaPoblacion;
		this.seguhirVidaP1.delegacionMunicipioTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.delegacionMunicipio : frmSeguhirVidaP1.titular.delegacionMunicipio;
		this.seguhirVidaP1.estadoTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.estado : frmSeguhirVidaP1.titular.estado;
		this.seguhirVidaP1.cpTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.cp : frmSeguhirVidaP1.titular.cp;
		this.seguhirVidaP1.telefonoTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.telefonos.telefono : frmSeguhirVidaP1.titular.telefonos.telefono;
		this.seguhirVidaP1.celularTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.telefonos.celular : frmSeguhirVidaP1.titular.telefonos.celular;
		this.seguhirVidaP1.correoeTit = ( frmSeguhirVidaP1.contratanteTitular ) ? frmSeguhirVidaP1.contratante.correoe : frmSeguhirVidaP1.titular.correoe;
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