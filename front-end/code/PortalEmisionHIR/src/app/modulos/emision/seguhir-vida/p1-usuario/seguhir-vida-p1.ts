import { IMyDateModel } from 'mydatepicker';

import { Estado }		from 'app/core/models/estado';
import { EstadoCivil }	from 'app/core/models/estadoCivil';
import { Genero }		from 'app/core/models/genero';
import { Municipio }	from 'app/core/models/municipio';
import { Ocupacion }	from 'app/core/models/ocupacion';

export class SeguhirVidaP1 {
	nombreCon: string;
	apaternoCon: string;
	amaternoCon: string;
	fechanacCon: IMyDateModel;
	nacionalidadCon: string;
	ocupacionCon: Ocupacion;
	rfcCon: string;
	estadoCivilCon: EstadoCivil;
	generoCon: Genero;
	calleNumeroCon: string;
	coloniaPoblacionCon: string;
	delegacionMunicipioCon: Municipio;
	estadoCon: Estado;
	cpCon: number;
	telefonoCon: string;
	celularCon: string;
	correoeCon: string;
	nombreTit: string;
	apaternoTit: string;
	amaternoTit: string;
	fechanacTit: IMyDateModel;
	nacionalidadTit: string;
	ocupacionTit: Ocupacion;
	rfcTit: string;
	estadoCivilTit: EstadoCivil;
	generoTit: Genero;
	calleNumeroTit: string;
	coloniaPoblacionTit: string;
	delegacionMunicipioTit: Municipio;
	estadoTit: Estado;
	cpTit: number;
	telefonoTit: string;
	celularTit: string;
	correoeTit: string;
}