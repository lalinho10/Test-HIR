import { Injectable }		  from '@angular/core';

import { GastosFunerariosP1 } from './gastos-funerarios-p1';

@Injectable()
export class GastosFunerariosP1Service {
	private gastosFunerariosP1: GastosFunerariosP1;

	setModelP1( frmGastosFunerariosP1: any ): void {
		this.gastosFunerariosP1 = new GastosFunerariosP1();

		this.gastosFunerariosP1.padecimiento = frmGastosFunerariosP1.padecimiento;
		this.gastosFunerariosP1.peso = frmGastosFunerariosP1.peso;
		this.gastosFunerariosP1.estatura = frmGastosFunerariosP1.estatura;
		this.gastosFunerariosP1.nombre = frmGastosFunerariosP1.nombre;
		this.gastosFunerariosP1.apaterno = frmGastosFunerariosP1.apaterno;
		this.gastosFunerariosP1.amaterno = frmGastosFunerariosP1.amaterno;
		this.gastosFunerariosP1.fechanac = frmGastosFunerariosP1.fechanac;
		this.gastosFunerariosP1.nacionalidad = frmGastosFunerariosP1.nacionalidad;
		this.gastosFunerariosP1.ocupacion = frmGastosFunerariosP1.ocupacion;
		this.gastosFunerariosP1.rfc = frmGastosFunerariosP1.rfc;
		this.gastosFunerariosP1.estadoCivil = frmGastosFunerariosP1.estadoCivil;
		this.gastosFunerariosP1.genero = frmGastosFunerariosP1.genero;
		this.gastosFunerariosP1.calleNumero = frmGastosFunerariosP1.calleNumero;
		this.gastosFunerariosP1.cp = frmGastosFunerariosP1.cp;
		this.gastosFunerariosP1.estado = frmGastosFunerariosP1.estado;
		this.gastosFunerariosP1.delegacionMunicipio = frmGastosFunerariosP1.delegacionMunicipio;
		this.gastosFunerariosP1.coloniaPoblacion = frmGastosFunerariosP1.coloniaPoblacion;
		this.gastosFunerariosP1.telefono = frmGastosFunerariosP1.telefonos.telefono;
		this.gastosFunerariosP1.celular = frmGastosFunerariosP1.telefonos.celular;
	}

	getModelP1(): GastosFunerariosP1 {
		return this.gastosFunerariosP1;
	}

	hasModelP1(): boolean {
		return ( this.gastosFunerariosP1 !== null && typeof this.gastosFunerariosP1 !== 'undefined' );
	}

	cleanModelP1(): void {
		this.gastosFunerariosP1 = undefined;
	}
}