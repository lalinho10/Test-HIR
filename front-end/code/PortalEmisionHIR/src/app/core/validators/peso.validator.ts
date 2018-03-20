import { AbstractControl, ValidatorFn } from '@angular/forms';

const PESO_REGEX = new RegExp( /^\d{1,3}(\.\d{1,3})?$/ );

export function PesoValidator(): ValidatorFn {

	return( control: AbstractControl ): { [ key: string ]: any } => {
		const stgPeso = control.value;

		if( !PESO_REGEX.test( stgPeso ) ) {
			return { 'peso': true }
		}

		return null;
	}
	
}