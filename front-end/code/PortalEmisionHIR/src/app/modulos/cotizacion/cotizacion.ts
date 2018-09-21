import { FormaPago } from 'app/core/models/forma-pago';
import { Genero }	 from 'app/core/models/genero';
import { Modulo }	 from 'app/core/models/modulo';
import { Plan }		 from 'app/core/models/plan';


export class Cotizacion {
	nombre: string;
	apaterno: string;
	amaterno: string;
	fechanac: Date;
	genero: Genero;
	plan: Plan;
	formaPago: FormaPago;
	modulo: Modulo;
}