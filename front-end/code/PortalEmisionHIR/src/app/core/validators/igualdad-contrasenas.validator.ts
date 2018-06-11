import { FormGroup, ValidatorFn } from '@angular/forms';

export function IgualdadContrasenasValidator( contrasenaKey: string, confContrasenaKey: string ): ValidatorFn {
	
	return ( formGroup: FormGroup ): { [ key: string ]: any } => {
		const valor1 = formGroup.get( contrasenaKey ).value;
		const valor2 = formGroup.get( confContrasenaKey ).value;

		if( valor1 !== valor2 ) {
			return { 'igualdadContrasenas': true }
		}

		return null;
	}

}