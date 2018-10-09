import { Injectable }			 from '@angular/core';

import { AccidenteRequest }		 from './accidente.request';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Injectable()
export class AccidenteService {
	private accidenteRequest: AccidenteRequest;

	constructor( private authenticationService: AuthenticationService ) {}

	getRequest( idProducto: number, modelP1: any, modelP2: any ): AccidenteRequest {
		this.accidenteRequest = new AccidenteRequest();

		this.accidenteRequest.idProducto = idProducto;

		this.accidenteRequest.correo = this.authenticationService.authenticatedUser.idUsuario;
		this.accidenteRequest.telefonoMovil = this.authenticationService.authenticatedUser.telefonoCelular;

		this.accidenteRequest.nombre = modelP1.nombre;
		this.accidenteRequest.paterno = modelP1.apaterno;
		this.accidenteRequest.materno = modelP1.amaterno;
		this.accidenteRequest.fechaNacimiento = modelP1.fechanac.epoc * 1000;
		this.accidenteRequest.nacionalidad = modelP1.nacionalidad;
		this.accidenteRequest.rfc = modelP1.rfc;
		this.accidenteRequest.estadoCivil = modelP1.estadoCivil.descEstadoCivil;
		this.accidenteRequest.sexo = modelP1.genero.descGenero;
		this.accidenteRequest.fumador = ( modelP1.fumador ) ? 1 : 0;
		this.accidenteRequest.calleNumero = modelP1.calleNumero;
		this.accidenteRequest.codigoPostal = modelP1.cp;
		this.accidenteRequest.estado = modelP1.estado.claveEntidad;
		this.accidenteRequest.municipio = modelP1.delegacionMunicipio.claveEntidad;
		this.accidenteRequest.colonia = modelP1.coloniaPoblacion.claveEntidad;
		this.accidenteRequest.idPregunta1 = modelP1.idGobierno;
		this.accidenteRequest.respuesta1 = modelP1.gobierno;
		this.accidenteRequest.especifique1 = modelP1.especifiqueGob;
		this.accidenteRequest.idPregunta2 = modelP1.idParienteGob;
		this.accidenteRequest.respuesta2 = modelP1.parienteGob;
		this.accidenteRequest.especifique2 = modelP1.especifiqueParGob;
				
		this.accidenteRequest.idOcupacion = modelP2.ocupacion.id;
		this.accidenteRequest.descOcupacion = modelP2.ocupacion.desc;
		this.accidenteRequest.idPlan = modelP2.plan.id;
		this.accidenteRequest.idFormaPago = modelP2.formaPago.id;
		this.accidenteRequest.modulos = modelP2.modulo.idModulo;
		this.accidenteRequest.prima = modelP2.resultado.pago;

		return this.accidenteRequest;
	}

}