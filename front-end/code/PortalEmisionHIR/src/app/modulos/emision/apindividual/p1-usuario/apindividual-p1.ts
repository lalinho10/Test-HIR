import { IMyDateModel } from 'mydatepicker';

import { Colonia }		from 'app/core/models/colonia';
import { EstadoCivil }	from 'app/core/models/estadoCivil';
import { Estado }		from 'app/core/models/estado';
import { Genero }		from 'app/core/models/genero';
import { Municipio }	from 'app/core/models/municipio';

export class ApindividualP1 {
	nombre: string;
	apaterno: string;
	amaterno: string;
	fechanac: IMyDateModel;
	nacionalidad: string;
	rfc: string;
	estadoCivil: EstadoCivil;
	genero: Genero;
	fumador: boolean;
	calleNumero: string;
	cp: number;
	estado: Estado;
	delegacionMunicipio: Municipio;
	coloniaPoblacion: Colonia;
	idGobierno: number;
	gobierno: boolean;
	especifiqueGob?: string;
	idParienteGob: number;
	parienteGob: boolean;
	especifiqueParGob?: string;
}