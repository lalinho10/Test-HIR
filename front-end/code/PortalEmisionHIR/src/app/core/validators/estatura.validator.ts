import { AbstractControl, ValidatorFn } from '@angular/forms';

const ESTATURA_REGEX = new RegExp( /^\d{1}(\.\d{1,2})?$/ );

export function EstaturaValidator(): ValidatorFn {

	return( control: AbstractControl ): { [ key: string ]: any } => {
		const stgEstatura = control.value;

		if( !ESTATURA_REGEX.test( stgEstatura ) ) {
			return { 'estatura': true }
		}

		return null;
	}
	
}