import { BeneficiarioRequest } from 'app/core/requests/beneficiario-request';

export class VidaRequest {
	idProducto: number;
	correo: string;
	telefonoMovil: string;
	idPregunta1: number;
	respuesta1: number;
	peso: number;
	estatura: number;
	nombre: string;
	paterno: string;
	materno: string;
	fechaNacimiento: number;
	nacionalidad: string;
	idOcupacion: number;
	rfc: string;
	estadoCivil: string;
	sexo: string;
	calleNumero: string;
	codigoPostal: string;
	estado: string;
	municipio: string;
	colonia: string;
	beneficiarios: BeneficiarioRequest[];
	idPlan: number;
	idFormaPago: number;
	modulos: number;
	prima: number;
}