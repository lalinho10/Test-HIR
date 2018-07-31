import { Injectable }			from '@angular/core';

import { ProcuraVidaP1Service }	from './p1-usuario/procura-vida-p1.service';
import { ProcuraVidaP2Service }	from './p2-beneficiarios/procura-vida-p2.service';

@Injectable()
export class ProcuraVidaService {
	constructor(
		private procuraVidaP1Service: ProcuraVidaP1Service,
		private procuraVidaP2Service: ProcuraVidaP2Service
	) {}

	private isUsuarioValidForm(): boolean {
		return this.procuraVidaP1Service.hasModelP1();
	}

	private isBeneficiariosValidForm(): boolean {
		return ( this.procuraVidaP1Service.hasModelP1() && 
				 this.procuraVidaP2Service.hasModelP2() );
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
		this.procuraVidaP1Service.cleanModelP1();
		this.procuraVidaP2Service.cleanModelP2();
	}
}