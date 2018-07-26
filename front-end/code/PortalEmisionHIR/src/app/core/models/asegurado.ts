import { IMyDateModel } from 'mydatepicker';

import { EstadoCivil }	from 'app/core/models/estadoCivil';
import { Genero }		from 'app/core/models/genero';
import { Ocupacion }	from 'app/core/models/ocupacion';

export class Asegurado {
	nombre: string;
	apaterno: string;
	amaterno: string;
	fechaNacimiento: IMyDateModel;
	estadoCivil: EstadoCivil;
	genero: Genero;
	ocupacion: Ocupacion;
	tipoAsegurado: string;
}