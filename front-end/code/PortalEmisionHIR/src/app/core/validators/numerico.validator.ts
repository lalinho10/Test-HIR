import { AbstractControl, ValidatorFn } from '@angular/forms';

const NUMERICO_REGEX = new RegExp( /^[0-9]+$/ );

export function NumericoValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgNumerico = control.value;

		if( !NUMERICO_REGEX.test( stgNumerico ) ) {
			return { 'numerico': true }
		}

		return null;
	}

}