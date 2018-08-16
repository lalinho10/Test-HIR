import { Beneficiario }		   from 'app/core/models/beneficiario';
import { FormaPago }		   from 'app/core/models/forma-pago';
import { Modulo }			   from 'app/core/models/modulo';
import { Plan }				   from 'app/core/models/plan';

import { ResultadoCotizacion } from 'app/modulos/cotizacion/resultado-cotizacion/resultado-cotizacion';

export class SeguhirEmpresarioP2 {
	beneficiarios: Beneficiario[];
	modulo: Modulo;
	formaPago: FormaPago;
	plan: Plan;
	agente: string;
	clave: number;
	resultado: ResultadoCotizacion;
}