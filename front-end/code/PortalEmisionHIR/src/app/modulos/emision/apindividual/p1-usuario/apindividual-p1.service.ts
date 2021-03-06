import { Injectable }	  from '@angular/core';

import { ApindividualP1 } from './apindividual-p1';

@Injectable()
export class ApindividualP1Service {
	private apindividualP1: ApindividualP1;

	setModelP1( frmApindividualP1: any ): void {
		this.apindividualP1 = new ApindividualP1();

		this.apindividualP1.nombre = frmApindividualP1.nombre;
		this.apindividualP1.apaterno = frmApindividualP1.apaterno;
		this.apindividualP1.amaterno = frmApindividualP1.amaterno;
		this.apindividualP1.fechanac = frmApindividualP1.fechanac;
		this.apindividualP1.nacionalidad = frmApindividualP1.nacionalidad;
		this.apindividualP1.rfc = frmApindividualP1.rfc;
		this.apindividualP1.estadoCivil = frmApindividualP1.estadoCivil;
		this.apindividualP1.genero = frmApindividualP1.genero;
		this.apindividualP1.fumador = frmApindividualP1.fumador;
		this.apindividualP1.calleNumero = frmApindividualP1.calleNumero;
		this.apindividualP1.cp = frmApindividualP1.cp;
		this.apindividualP1.estado = frmApindividualP1.estado;
		this.apindividualP1.delegacionMunicipio = frmApindividualP1.delegacionMunicipio;
		this.apindividualP1.coloniaPoblacion = frmApindividualP1.coloniaPoblacion;
		this.apindividualP1.idGobierno = frmApindividualP1.preguntas[ 0 ].idPregunta;
		this.apindividualP1.gobierno = frmApindividualP1.preguntas[ 0 ].confirmacion;
		this.apindividualP1.especifiqueGob = ( frmApindividualP1.preguntas[ 0 ].confirmacion === 1 ) ? frmApindividualP1.preguntas[ 0 ].especifique : null;
		this.apindividualP1.idParienteGob = frmApindividualP1.preguntas[ 1 ].idPregunta;
		this.apindividualP1.parienteGob = frmApindividualP1.preguntas[ 1 ].confirmacion;
		this.apindividualP1.especifiqueParGob = ( frmApindividualP1.preguntas[ 1 ].confirmacion === 1 ) ? frmApindividualP1.preguntas[ 1 ].especifique : null;
	}

	getModelP1(): ApindividualP1 {
		return this.apindividualP1;
	}

	hasModelP1(): boolean {
		return ( this.apindividualP1 !== null && typeof this.apindividualP1 !== 'undefined' );
	}

	cleanModelP1(): void {
		this.apindividualP1 = undefined;
	}
}