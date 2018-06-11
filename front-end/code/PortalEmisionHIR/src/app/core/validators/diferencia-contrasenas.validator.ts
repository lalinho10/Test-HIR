import { FormGroup, ValidatorFn } from '@angular/forms';

export function DiferenciaContrasenasValidator( contrasena1Key: string, contrasena2Key: string ): ValidatorFn {
	
	return ( formGroup: FormGroup ): { [ key: string ]: any } => {
		const valor1 = formGroup.get( contrasena1Key ).value;
		const valor2 = formGroup.get( contrasena2Key ).value;
console.log( 'Valor 1: ' + valor1 + ', valor 2: ' + valor2 );
		if( valor1 === valor2 ) {
			return { 'diferenciaContrasenas': true }
		}

		return null;
	}

}