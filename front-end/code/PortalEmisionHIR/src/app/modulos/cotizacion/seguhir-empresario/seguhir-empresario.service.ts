import { Injectable }				from '@angular/core';

import { SeguhirEmpresarioRequest } from './seguhir-empresario.request';

@Injectable()
export class SeguhirEmpresarioService {
	private seguhirEmpresarioRequest: SeguhirEmpresarioRequest;

	getRequest( frmSeguhirEmpresario: any ): SeguhirEmpresarioRequest {
		this.seguhirEmpresarioRequest = new SeguhirEmpresarioRequest();

		this.seguhirEmpresarioRequest.nombre = frmSeguhirEmpresario.nombre;
		this.seguhirEmpresarioRequest.apPaterno = frmSeguhirEmpresario.apaterno;
		this.seguhirEmpresarioRequest.apMaterno = frmSeguhirEmpresario.amaterno;
		this.seguhirEmpresarioRequest.fechaNacimiento = frmSeguhirEmpresario.fechanac.epoc * 1000;
		this.seguhirEmpresarioRequest.sexo = frmSeguhirEmpresario.genero;
		this.seguhirEmpresarioRequest.modulo = frmSeguhirEmpresario.modulo;
		this.seguhirEmpresarioRequest.cobertura = frmSeguhirEmpresario.cobertura;

		return this.seguhirEmpresarioRequest;
	}
}