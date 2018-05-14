import { Agente }	 from 'app/core/models/agente';
import { Estado }	 from 'app/core/models/estado';
import { Municipio } from 'app/core/models/municipio';

export class SeguhirVidaP6 {
	agentes: Agente[];
	tipoIdentificacion: string;
	numeroIdentificacion: string;
	nombreEmpresa: string;
	dependencia: string;
	calleNumero: string;
	coloniaPoblacion: string;
	delegacionMunicipio: Municipio;
	estado: Estado;
	cp: number;
	nombre: string;
	apaterno: string;
	amaterno: string;
	areaTrabajo: string;
	numeroEmpleado: string;
	retencionQuincenal: number;
	rfc: string;
	telefono: string;
}