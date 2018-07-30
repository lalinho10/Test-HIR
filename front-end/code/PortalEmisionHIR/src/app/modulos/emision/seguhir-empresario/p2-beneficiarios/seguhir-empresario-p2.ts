import { Beneficiario } from 'app/core/models/beneficiario';
import { Cobertura }	from 'app/core/models/cobertura';
import { FormaPago }	from 'app/core/models/forma-pago';
import { Modulo }		from 'app/core/models/modulo';
import { Plan }			from 'app/core/models/plan';

export class SeguhirEmpresarioP2 {
	beneficiarios: Beneficiario[];
	modulo: Modulo;
	formaPago: FormaPago;
	plan: Plan;
	coberturas: Cobertura[];
	agente: string;
	clave: number;
}