import { FormaPago }		   from 'app/core/models/forma-pago';
import { Modulo }			   from 'app/core/models/modulo';
import { Ocupacion }		   from 'app/core/models/ocupacion';
import { Plan }				   from 'app/core/models/plan';

import { ResultadoCotizacion } from 'app/modulos/cotizacion/resultado-cotizacion/resultado-cotizacion';

export class SegubiciP2 {
	ocupacion: Ocupacion;
	descactividad: string;
	modulo: Modulo;
	formaPago: FormaPago;
	plan: Plan;
	agente: string;
	clave: number;
	resultado: ResultadoCotizacion;
}