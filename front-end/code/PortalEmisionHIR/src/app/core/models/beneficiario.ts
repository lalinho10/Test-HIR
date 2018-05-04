import { IMyDateModel } from 'mydatepicker';

import { Parentesco }	from './parentesco';

export class Beneficiario {
	nombre: string;
	fechaNacimiento: IMyDateModel;
	parentesco: Parentesco;
	porcentajeSumaDec: number;

	get porcentajeSuma(): number {
		return this.porcentajeSumaDec * 100;
	}

	set porcentajeSuma( porcentajeSuma: number ) {
		this.porcentajeSumaDec = porcentajeSuma / 100;
	}
}