import { Injectable } from '@angular/core';

import { SegubiciP1 } from './segubici-p1';

@Injectable()
export class SegubiciP1Service {
	private segubiciP1: SegubiciP1;

	setModelP1( frmSegubiciP1: any ): void {
		this.segubiciP1 = new SegubiciP1();

		this.segubiciP1.nombre = frmSegubiciP1.nombre;
		this.segubiciP1.apaterno = frmSegubiciP1.apaterno;
		this.segubiciP1.amaterno = frmSegubiciP1.amaterno;
		this.segubiciP1.fechanac = frmSegubiciP1.fechanac;
		this.segubiciP1.nacionalidad = frmSegubiciP1.nacionalidad;
		this.segubiciP1.rfc = frmSegubiciP1.rfc;
		this.segubiciP1.estadoCivil = frmSegubiciP1.estadoCivil;
		this.segubiciP1.genero = frmSegubiciP1.genero;
		this.segubiciP1.fumador = frmSegubiciP1.fumador;
		this.segubiciP1.calleNumero = frmSegubiciP1.calleNumero;
		this.segubiciP1.cp = frmSegubiciP1.cp;
		this.segubiciP1.estado = frmSegubiciP1.estado;
		this.segubiciP1.delegacionMunicipio = frmSegubiciP1.delegacionMunicipio;
		this.segubiciP1.coloniaPoblacion = frmSegubiciP1.coloniaPoblacion;
		this.segubiciP1.idGobierno = frmSegubiciP1.preguntas[ 0 ].idPregunta;
		this.segubiciP1.gobierno = frmSegubiciP1.preguntas[ 0 ].confirmacion;
		this.segubiciP1.especifiqueGob = ( frmSegubiciP1.preguntas[ 0 ].confirmacion === 1 ) ? frmSegubiciP1.preguntas[ 0 ].especifique : null;
		this.segubiciP1.idParienteGob = frmSegubiciP1.preguntas[ 1 ].idPregunta;
		this.segubiciP1.parienteGob = frmSegubiciP1.preguntas[ 1 ].confirmacion;
		this.segubiciP1.especifiqueParGob = ( frmSegubiciP1.preguntas[ 1 ].confirmacion === 1 ) ? frmSegubiciP1.preguntas[ 1 ].especifique : null;
	}

	getModelP1(): SegubiciP1 {
		return this.segubiciP1;
	}

	hasModelP1(): boolean {
		return ( this.segubiciP1 !== null && typeof this.segubiciP1 !== 'undefined' );
	}

	cleanModelP1(): void {
		this.segubiciP1 = undefined;
	}
}