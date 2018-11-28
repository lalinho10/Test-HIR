import { FormGroup, ValidatorFn } from '@angular/forms';

export function DiferenciaContrasenasValidator( contrasena1Key: string, contrasena2Key: string ): ValidatorFn {
	
	return ( formGroup: FormGroup ): { [ key: string ]: any } => {
		const valor1 = formGroup.get( contrasena1Key ).value;
		const valor2 = formGroup.get( contrasena2Key ).value;

		if( valor1 === valor2 ) {
			return { 'diferenciaContrasenas': true }
		}

		return null;
	}

}