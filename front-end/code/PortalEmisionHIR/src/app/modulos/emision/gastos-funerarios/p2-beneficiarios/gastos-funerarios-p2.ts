import { Beneficiario } from 'app/core/models/beneficiario';
import { Modulo }		from 'app/core/models/modulo';
import { Cobertura }	from 'app/core/models/cobertura';
import { FormaPago }	from 'app/core/models/forma-pago';

export class GastosFunerariosP2 {
	beneficiarios: Beneficiario[];
	modulo: Modulo;
	cobertura: Cobertura;
	formaPago: FormaPago;
	agente: string;
	clave: number;
}