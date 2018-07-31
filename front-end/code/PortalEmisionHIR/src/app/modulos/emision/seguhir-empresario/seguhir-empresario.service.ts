import { Injectable }				  from '@angular/core';

import { SeguhirEmpresarioP1Service } from './p1-usuario/seguhir-empresario-p1.service';
import { SeguhirEmpresarioP2Service } from './p2-beneficiarios/seguhir-empresario-p2.service';

@Injectable()
export class SeguhirEmpresarioService {
	constructor(
		private seguhirEmpresarioP1Service: SeguhirEmpresarioP1Service,
		private seguhirEmpresarioP2Service: SeguhirEmpresarioP2Service
	) {}

	private isUsuarioValidForm(): boolean {
		return this.seguhirEmpresarioP1Service.hasModelP1();
	}

	private isBeneficiariosValidForm(): boolean {
		return ( this.seguhirEmpresarioP1Service.hasModelP1() && 
				 this.seguhirEmpresarioP2Service.hasModelP2() );
	}

	isValidPath( path: string ): boolean {
		let isValidPath = false;

		switch( path ) {
			case 'beneficiarios':
				isValidPath = this.isUsuarioValidForm();
			break;
			case 'confirmacion':
				isValidPath = this.isBeneficiariosValidForm();
			break;
			default:
				isValidPath = false;
			break;
		}

		return isValidPath;
	}

	cleanModels(): void {
		this.seguhirEmpresarioP1Service.cleanModelP1();
		this.seguhirEmpresarioP2Service.cleanModelP2();
	}
}