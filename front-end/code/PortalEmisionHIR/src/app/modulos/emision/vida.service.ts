import { Injectable }			 from '@angular/core';

import { VidaRequest }			 from './vida.request';

import { Beneficiario }			 from 'app/core/models/beneficiario';
import { BeneficiarioRequest }	 from 'app/core/requests/beneficiario-request';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Injectable()
export class VidaService {
	private vidaRequest: VidaRequest;

	constructor( private authenticationService: AuthenticationService ) {}

	getRequest( idProducto: number, modelP1: any, modelP2: any ): VidaRequest {
		this.vidaRequest = new VidaRequest();

		this.vidaRequest.idProducto = idProducto;

		this.vidaRequest.correo = this.authenticationService.authenticatedUser.idUsuario;
		this.vidaRequest.telefonoMovil = this.authenticationService.authenticatedUser.telefonoCelular;

		this.vidaRequest.idPregunta1 = 1;
		this.vidaRequest.respuesta1 = ( modelP1.padecimiento ) ? 1 : 0;
		this.vidaRequest.peso = modelP1.peso;
		this.vidaRequest.estatura = modelP1.estatura;
		this.vidaRequest.nombre = modelP1.nombre;
		this.vidaRequest.paterno = modelP1.apaterno;
		this.vidaRequest.materno = modelP1.amaterno;
		this.vidaRequest.fechaNacimiento = modelP1.fechanac.epoc * 1000;
		this.vidaRequest.nacionalidad = modelP1.nacionalidad;
		this.vidaRequest.idOcupacion = modelP1.ocupacion.id;
		this.vidaRequest.rfc = modelP1.rfc;
		this.vidaRequest.estadoCivil = modelP1.estadoCivil.descEstadoCivil;
		this.vidaRequest.sexo = modelP1.genero.descGenero;
		this.vidaRequest.calleNumero = modelP1.calleNumero;
		this.vidaRequest.codigoPostal = modelP1.cp;
		this.vidaRequest.estado = modelP1.estado.claveEntidad;
		this.vidaRequest.municipio = modelP1.delegacionMunicipio.claveEntidad;
		this.vidaRequest.colonia = modelP1.coloniaPoblacion.claveEntidad;

		this.vidaRequest.beneficiarios = this.getBeneficiarios( modelP2.beneficiarios );

		this.vidaRequest.idPlan = modelP2.plan.id;
		this.vidaRequest.idFormaPago = modelP2.formaPago.id;
		this.vidaRequest.modulos = modelP2.modulo.idModulo;
		this.vidaRequest.prima = modelP2.resultado.pago;

		return this.vidaRequest;
	}

	private getBeneficiarios( beneficiarios: Beneficiario[] ): BeneficiarioRequest[] {
		let beneficiariosRequest: BeneficiarioRequest[] = [];

		for( let i: number = 0; i < beneficiarios.length; i++ ) {
			let beneficiarioRequest: BeneficiarioRequest = new BeneficiarioRequest();

			beneficiarioRequest.idParentesco = beneficiarios[ i ].parentesco.id;
			beneficiarioRequest.nombreBeneficiario = beneficiarios[ i ].nombre;
			beneficiarioRequest.paternoBeneficiario = beneficiarios[ i ].apaterno;
			beneficiarioRequest.maternoBeneficiario = beneficiarios[ i ].amaterno;
			beneficiarioRequest.nacimientoBeneficiario = beneficiarios[ i ].fechaNacimiento.epoc * 1000;
			beneficiarioRequest.porcentaje = beneficiarios[ i ].porcentajeSuma;

			beneficiariosRequest.push( beneficiarioRequest );
		}

		return beneficiariosRequest;
	}
}