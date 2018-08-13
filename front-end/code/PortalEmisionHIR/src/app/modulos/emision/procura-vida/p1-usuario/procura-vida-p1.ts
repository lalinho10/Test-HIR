import { IMyDateModel } from 'mydatepicker';

import { Colonia }		from 'app/core/models/colonia';
import { Estado }		from 'app/core/models/estado';
import { EstadoCivil }	from 'app/core/models/estadoCivil';
import { Genero }		from 'app/core/models/genero';
import { Municipio }	from 'app/core/models/municipio';
import { Ocupacion }	from 'app/core/models/ocupacion';

export class ProcuraVidaP1 {
	padecimiento: boolean;
	peso: number;
	estatura: number;
	nombre: string;
	apaterno: string;
	amaterno: string;
	fechanac: IMyDateModel;
	nacionalidad: string;
	ocupacion: Ocupacion;
	rfc: string;
	estadoCivil: EstadoCivil;
	genero: Genero;
	calleNumero: string;
	cp: number;
	estado: Estado;
	delegacionMunicipio: Municipio;
	coloniaPoblacion: Colonia;
}