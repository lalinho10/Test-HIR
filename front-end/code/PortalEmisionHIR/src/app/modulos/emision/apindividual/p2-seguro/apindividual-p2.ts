import { Cobertura } from 'app/core/models/cobertura';
import { FormaPago } from 'app/core/models/forma-pago';
import { Ocupacion } from 'app/core/models/ocupacion';
import { Plan }		 from 'app/core/models/plan';

export class ApindividualP2 {
	ocupacion: Ocupacion;
	descactividad: string;
	cobertura: Cobertura;
	formaPago: FormaPago;
	plan: Plan;
	agente: string;
	clave: number;
}