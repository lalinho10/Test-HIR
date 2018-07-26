import { Injectable }			from '@angular/core';

import { SeguhirVidaP1Service }	from './p1-usuario/seguhir-vida-p1.service';
import { SeguhirVidaP2Service }	from './p2-seguro/seguhir-vida-p2.service';
import { SeguhirVidaP3Service }	from './p3-medico/seguhir-vida-p3.service';
import { SeguhirVidaP4Service }	from './p4-asegurados/seguhir-vida-p4.service';
import { SeguhirVidaP5Service }	from './p5-beneficiarios/seguhir-vida-p5.service';
import { SeguhirVidaP6Service }	from './p6-agentes/seguhir-vida-p6.service';

import { Plan }					from 'app/core/models/plan';

@Injectable()
export class SeguhirVidaService {
	constructor(
		private seguhirVidaP1Service: SeguhirVidaP1Service,
		private seguhirVidaP2Service: SeguhirVidaP2Service,
		private seguhirVidaP3Service: SeguhirVidaP3Service,
		private seguhirVidaP4Service: SeguhirVidaP4Service,
		private seguhirVidaP5Service: SeguhirVidaP5Service,
		private seguhirVidaP6Service: SeguhirVidaP6Service
	) {}

	private isUsuarioValidForm(): boolean {
		return this.seguhirVidaP1Service.hasModelP1();
	}

	private isSeguroValidForm(): boolean {
		return ( this.seguhirVidaP1Service.hasModelP1() &&
				 this.seguhirVidaP2Service.hasModelP2() );
	}

	private isMedicoValidForm(): boolean {
		return ( this.seguhirVidaP1Service.hasModelP1() &&
				 this.seguhirVidaP2Service.hasModelP2() &&
				 this.seguhirVidaP3Service.hasModelP3() );
	}

	private isAseguradosValidForm(): boolean {
		return ( this.seguhirVidaP1Service.hasModelP1() &&
				 this.seguhirVidaP2Service.hasModelP2() &&
				 this.seguhirVidaP3Service.hasModelP3() &&
				 this.seguhirVidaP4Service.hasModelP4() );
	}

	private isBeneficiariosValidForm(): boolean {
		return ( this.seguhirVidaP1Service.hasModelP1() &&
				 this.seguhirVidaP2Service.hasModelP2() &&
				 this.seguhirVidaP3Service.hasModelP3() &&
				 this.seguhirVidaP4Service.hasModelP4() &&
				 this.seguhirVidaP5Service.hasModelP5() );
	}

	private isAgentesValidForm(): boolean {
		return ( this.seguhirVidaP1Service.hasModelP1() &&
				 this.seguhirVidaP2Service.hasModelP2() &&
				 this.seguhirVidaP3Service.hasModelP3() &&
				 this.seguhirVidaP4Service.hasModelP4() &&
				 this.seguhirVidaP5Service.hasModelP5() &&
				 this.seguhirVidaP6Service.hasModelP6() );	
	}

	getPlanSeleccionado(): Plan {
		return this.seguhirVidaP2Service.getPlan();
	}

	isValidPath( path: string ): boolean {
		let isValidPath = false;

		switch( path ) {
			case 'seguro':
				isValidPath = this.isUsuarioValidForm();
			break;
			case 'medico':
				isValidPath = this.isSeguroValidForm();
			break;
			case 'asegurados':
				isValidPath = this.isMedicoValidForm();
			break;
			case 'beneficiarios':
				isValidPath = this.isAseguradosValidForm();
			break;
			case 'agentes':
				isValidPath = this.isBeneficiariosValidForm()
			break;
			case 'confirmacion':
				isValidPath = this.isAgentesValidForm();
			break;
			default:
				isValidPath = false;
			break;
		}

		return isValidPath;
	}
}