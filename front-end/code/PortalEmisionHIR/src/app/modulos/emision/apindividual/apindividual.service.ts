import { Injectable }		 from '@angular/core';

import { ApindividualP1Service } from './p1-usuario/apindividual-p1.service';
import { ApindividualP2Service } from './p2-seguro/apindividual-p2.service';

@Injectable()
export class ApindividualService {
	constructor(
		private apindividualP1Service: ApindividualP1Service,
		private apindividualP2Service: ApindividualP2Service
	) {}

	private isUsuarioValidForm(): boolean {
		return this.apindividualP1Service.hasModelP1();
	}

	private isSeguroValidForm(): boolean {
		return ( this.apindividualP1Service.hasModelP1() && 
				 this.apindividualP2Service.hasModelP2() );
	}

	isValidPath( path: string ): boolean {
		let isValidPath = false;

		switch( path ) {
			case 'seguro':
				isValidPath = this.isUsuarioValidForm();
			break;
			case 'confirmacion':
				isValidPath = this.isSeguroValidForm();
			break;
			default:
				isValidPath = false;
			break;
		}

		return isValidPath;
	}
}