import { FormaPago } from 'app/core/models/forma-pago';
import { Modulo }	 from 'app/core/models/modulo';
import { Paquete }	 from 'app/core/models/paquete';
import { Plan }		 from 'app/core/models/plan';

export class SeguhirVidaP2 {
	gobierno: boolean;
	especifiqueGob?: string;
	parienteGob: boolean;
	especifiqueParGob?: string;
	plan: Plan;
	paqueteCobertura: Paquete;
	modulo: Modulo;
	ugastos: boolean;
	apfondoasegurado: boolean;
	formaPago: FormaPago;
	cobertura: number;
	aportacion: number;
	total: number;
}