import { Injectable }	 from '@angular/core';

import { SeguhirVidaP6 } from './seguhir-vida-p6';

import { Agente }		 from 'app/core/models/agente';

@Injectable()
export class SeguhirVidaP6Service {
	private seguhirVidaP6: SeguhirVidaP6;

	setModelP6( agentes: Agente[], frmSeguhirVidaP6: any ) {
		this.seguhirVidaP6 = new SeguhirVidaP6();

		this.seguhirVidaP6.agentes = agentes;
		this.seguhirVidaP6.identificacion = frmSeguhirVidaP6.identificacion;
		this.seguhirVidaP6.numeroIdentificacion = frmSeguhirVidaP6.numeroIdentificacion;
		this.seguhirVidaP6.nombreEmpresa = frmSeguhirVidaP6.nombreEmpresa;
		this.seguhirVidaP6.dependencia = frmSeguhirVidaP6.dependencia;
		this.seguhirVidaP6.calleNumero = frmSeguhirVidaP6.calleNumero;
		this.seguhirVidaP6.coloniaPoblacion = frmSeguhirVidaP6.coloniaPoblacion;
		this.seguhirVidaP6.delegacionMunicipio = frmSeguhirVidaP6.delegacionMunicipio;
		this.seguhirVidaP6.estado = frmSeguhirVidaP6.estado;
		this.seguhirVidaP6.cp = frmSeguhirVidaP6.cp;
		this.seguhirVidaP6.nombre = frmSeguhirVidaP6.nombre;
		this.seguhirVidaP6.apaterno = frmSeguhirVidaP6.apaterno;
		this.seguhirVidaP6.amaterno = frmSeguhirVidaP6.amaterno;
		this.seguhirVidaP6.areaTrabajo = frmSeguhirVidaP6.areaTrabajo;
		this.seguhirVidaP6.numeroEmpleado = frmSeguhirVidaP6.numeroEmpleado;
		this.seguhirVidaP6.retencionQuincenal = frmSeguhirVidaP6.retencionQuincenal;
		this.seguhirVidaP6.rfc = frmSeguhirVidaP6.rfc;
		this.seguhirVidaP6.telefono = frmSeguhirVidaP6.telefono;
	}

	getModelP6(): SeguhirVidaP6 {
		return this.seguhirVidaP6;
	}

	hasModelP6(): boolean {
		return ( this.seguhirVidaP6 !== null && typeof this.seguhirVidaP6 !== 'undefined' );
	}

	cleanModelP6(): void {
		this.seguhirVidaP6 = undefined;
	}
}