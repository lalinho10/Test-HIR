import { Injectable }				 from '@angular/core';

import { GastosFunerariosP1Service } from './p1-usuario/gastos-funerarios-p1.service';
import { GastosFunerariosP2Service } from './p2-beneficiarios/gastos-funerarios-p2.service';

@Injectable()
export class GastosFunerariosService {
	constructor(
		private gastosFunerariosP1Service: GastosFunerariosP1Service,
		private gastosFunerariosP2Service: GastosFunerariosP2Service
	) {}

	private isUsuarioValidForm(): boolean {
		return this.gastosFunerariosP1Service.hasModelP1();
	}

	private isBeneficiariosValidForm(): boolean {
		return ( this.gastosFunerariosP1Service.hasModelP1() && 
				 this.gastosFunerariosP2Service.hasModelP2() );
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
		this.gastosFunerariosP1Service.cleanModelP1();
		this.gastosFunerariosP2Service.cleanModelP2();
	}
}