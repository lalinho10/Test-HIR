import { Cobertura } from 'app/core/models/cobertura';
import { FormaPago } from 'app/core/models/forma-pago';
import { Modulo }	 from 'app/core/models/modulo';
import { Ocupacion } from 'app/core/models/ocupacion';
import { Plan }		 from 'app/core/models/plan';

export class SegubiciP2 {
	ocupacion: Ocupacion;
	descactividad: string;
	modulo: Modulo;
	formaPago: FormaPago;
	plan: Plan;
	coberturas: Cobertura[];
	agente: string;
	clave: number;
}