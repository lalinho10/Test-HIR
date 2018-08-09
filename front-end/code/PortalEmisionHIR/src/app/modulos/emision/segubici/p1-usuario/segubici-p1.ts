import { IMyDateModel } from 'mydatepicker';

import { EstadoCivil }	from 'app/core/models/estadoCivil';
import { Estado }		from 'app/core/models/estado';
import { Genero }		from 'app/core/models/genero';
import { Municipio }	from 'app/core/models/municipio';

export class SegubiciP1 {
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
	coloniaPoblacion: string;
	telefono: string;
	celular: string;
	gobierno: boolean;
	especifiqueGob?: string;
	parienteGob: boolean;
	especifiqueParGob?: string;
}