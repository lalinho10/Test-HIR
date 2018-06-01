import { FormGroup, ValidatorFn } from '@angular/forms';

export function DiferenciaCorreosValidator( correo1Key: string, correo2Key: string ): ValidatorFn {
	
	return ( formGroup: FormGroup ): { [ key: string ]: any } => {
		const valor1 = formGroup.controls[ correo1Key ].value;
		const valor2 = formGroup.controls[ correo2Key ].value;

		if( valor1 !== '' && valor2 !== '' && valor1 === valor2 ) {
			return { 'diferenciaCorreos': true }
		}

		return null;
	}

}