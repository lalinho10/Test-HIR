import { AbstractControl, ValidatorFn } from '@angular/forms';

const CODIGO_POSTAL_REGEX = new RegExp( /^[0-9]{5}$/ );

export function CodigoPostalValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgCodigoPostal = control.value;

		if( !CODIGO_POSTAL_REGEX.test( stgCodigoPostal ) ) {
			return { 'codigoPostal': true }
		}

		return null;
	}

}