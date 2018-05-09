import { IMyDateModel } from 'mydatepicker';

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
	coloniaPoblacion: string;
	delegacionMunicipio: Municipio;
	estado: Estado;
	cp: number;
	telefono: string;
	celular: string;
	correoe: string;
	vigenciaPoliza: IMyDateModel;
	gobierno: boolean;
	especifiqueGob?: string;
	parienteGob: boolean;
	especifiqueParGob?: string;
}