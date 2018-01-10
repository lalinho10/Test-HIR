import { AbstractControl, ValidatorFn } from '@angular/forms';

const CODIGO_REGEX = new RegExp( /^[a-zA-Z0-9]{5,10}$/ );

export function CodigoValidator(): ValidatorFn {

	return( control: AbstractControl ): { [ key: string ]: any } => {
		const stgCodigo = control.value;

		if( !CODIGO_REGEX.test( stgCodigo ) ) {
			return { 'codigo': true }
		}

		return null;
	}
	
}