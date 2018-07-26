import { Injectable }	  from '@angular/core';

import { ApindividualP2 } from './apindividual-p2';

@Injectable()
export class ApindividualP2Service {
	private apindividualP2: ApindividualP2;

	setModelP2( frmApindividualP2: any ): void {
		this.apindividualP2 = new ApindividualP2();

		this.apindividualP2.ocupacion = frmApindividualP2.ocupacion;
		this.apindividualP2.descactividad = frmApindividualP2.descactividad;
		this.apindividualP2.cobertura = frmApindividualP2.cobertura;
		this.apindividualP2.formaPago = frmApindividualP2.formaPago;
		this.apindividualP2.plan = frmApindividualP2.plan;
		this.apindividualP2.agente = frmApindividualP2.agente;
		this.apindividualP2.clave = frmApindividualP2.clave;
	}

	getModelP2(): ApindividualP2 {
		return this.apindividualP2;
	}

	hasModelP2(): boolean {
		return ( this.apindividualP2 !== null && typeof this.apindividualP2 !== 'undefined' );
	}

	cleanModelP2(): void {
		this.apindividualP2 = undefined;
	}
}