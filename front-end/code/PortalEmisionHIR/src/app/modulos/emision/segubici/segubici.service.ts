import { Injectable }		 from '@angular/core';

import { SegubiciP1Service } from './p1-usuario/segubici-p1.service';
import { SegubiciP2Service } from './p2-seguro/segubici-p2.service';

@Injectable()
export class SegubiciService {
	constructor(
		private segubiciP1Service: SegubiciP1Service,
		private segubiciP2Service: SegubiciP2Service
	) {}

	private isUsuarioValidForm(): boolean {
		return this.segubiciP1Service.hasModelP1();
	}

	private isSeguroValidForm(): boolean {
		return ( this.segubiciP1Service.hasModelP1() && 
				 this.segubiciP2Service.hasModelP2() );
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