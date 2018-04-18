import { Cobertura } from 'app/core/models/cobertura';
import { FormaPago } from 'app/core/models/forma-pago';
import { Genero }	 from 'app/core/models/genero';
import { Modulo }	 from 'app/core/models/modulo';
import { Paquete }	 from 'app/core/models/paquete';
import { Plan }		 from 'app/core/models/plan';


export class Cotizacion {
	nombre: string;
	apaterno: string;
	amaterno: string;
	fechanac: Date;
	rfc: string;
	genero: Genero;
	plan?: Plan;
	formaPago: FormaPago;
	modulo?: Modulo;
	paqueteCobertura?: Paquete;
	cobertura?: Cobertura;
	sumaAsegurada?: number;
	deducible?: number;
}