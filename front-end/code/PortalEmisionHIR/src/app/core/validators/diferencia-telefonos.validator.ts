import { FormGroup, ValidatorFn } from '@angular/forms';

export function DiferenciaTelefonosValidator( telefono1Key: string, telefono2Key: string ): ValidatorFn {
	
	return ( formGroup: FormGroup ): { [ key: string ]: any } => {
		const valor1 = formGroup.controls[ telefono1Key ].value;
		const valor2 = formGroup.controls[ telefono2Key ].value;

		if( valor1 !== '' && valor2 !== '' && valor1 === valor2 ) {
			return { 'diferenciaTelefonos': true }
		}

		return null;
	}

}