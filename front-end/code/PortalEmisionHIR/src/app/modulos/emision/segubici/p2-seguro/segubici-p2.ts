import { Cobertura } from 'app/core/models/cobertura';
import { FormaPago } from 'app/core/models/forma-pago';
import { Ocupacion } from 'app/core/models/ocupacion';
import { Plan }		 from 'app/core/models/plan';

export class SegubiciP2 {
	ocupacion: Ocupacion;
	descactividad: string;
	cobertura: Cobertura;
	sumasegurada: number;
	deducible: number;
	formaPago: FormaPago;
	plan: Plan;
	agente: string;
	clave: number;
}