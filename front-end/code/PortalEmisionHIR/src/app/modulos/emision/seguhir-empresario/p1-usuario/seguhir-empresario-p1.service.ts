import { Injectable }		   from '@angular/core';

import { SeguhirEmpresarioP1 } from './seguhir-empresario-p1';

@Injectable()
export class SeguhirEmpresarioP1Service {
	private seguhirEmpresarioP1: SeguhirEmpresarioP1;

	setModelP1( frmSeguhirEmpresarioP1: any ): void {
		this.seguhirEmpresarioP1 = new SeguhirEmpresarioP1();

		this.seguhirEmpresarioP1.padecimiento = frmSeguhirEmpresarioP1.padecimiento;
		this.seguhirEmpresarioP1.peso = frmSeguhirEmpresarioP1.peso;
		this.seguhirEmpresarioP1.estatura = frmSeguhirEmpresarioP1.estatura;
		this.seguhirEmpresarioP1.nombre = frmSeguhirEmpresarioP1.nombre;
		this.seguhirEmpresarioP1.apaterno = frmSeguhirEmpresarioP1.apaterno;
		this.seguhirEmpresarioP1.amaterno = frmSeguhirEmpresarioP1.amaterno;
		this.seguhirEmpresarioP1.fechanac = frmSeguhirEmpresarioP1.fechanac;
		this.seguhirEmpresarioP1.nacionalidad = frmSeguhirEmpresarioP1.nacionalidad;
		this.seguhirEmpresarioP1.ocupacion = frmSeguhirEmpresarioP1.ocupacion;
		this.seguhirEmpresarioP1.rfc = frmSeguhirEmpresarioP1.rfc;
		this.seguhirEmpresarioP1.estadoCivil = frmSeguhirEmpresarioP1.estadoCivil;
		this.seguhirEmpresarioP1.genero = frmSeguhirEmpresarioP1.genero;
		this.seguhirEmpresarioP1.calleNumero = frmSeguhirEmpresarioP1.calleNumero;
		this.seguhirEmpresarioP1.coloniaPoblacion = frmSeguhirEmpresarioP1.coloniaPoblacion;
		this.seguhirEmpresarioP1.delegacionMunicipio = frmSeguhirEmpresarioP1.delegacionMunicipio;
		this.seguhirEmpresarioP1.estado = frmSeguhirEmpresarioP1.estado;
		this.seguhirEmpresarioP1.cp = frmSeguhirEmpresarioP1.cp;
		this.seguhirEmpresarioP1.telefono = frmSeguhirEmpresarioP1.telefonos.telefono;
		this.seguhirEmpresarioP1.celular = frmSeguhirEmpresarioP1.telefonos.celular;
		this.seguhirEmpresarioP1.correoe1 = frmSeguhirEmpresarioP1.correos.correoe1;
		this.seguhirEmpresarioP1.correoe2 = frmSeguhirEmpresarioP1.correos.correoe2;
	}

	getModelP1(): SeguhirEmpresarioP1 {
		return this.seguhirEmpresarioP1;
	}

	hasModelP1(): boolean {
		return ( this.seguhirEmpresarioP1 !== null && typeof this.seguhirEmpresarioP1 !== 'undefined' );
	}

	cleanModelP1(): void {
		this.seguhirEmpresarioP1 = undefined;
	}
}