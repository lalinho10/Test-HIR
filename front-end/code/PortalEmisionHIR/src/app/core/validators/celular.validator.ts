import { AbstractControl, ValidatorFn } from '@angular/forms';

const CELULAR_REGEX = new RegExp( /^[0-9]{10}$/ );

export function CelularValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgCelular = control.value;

		if( !CELULAR_REGEX.test( stgCelular ) ) {
			return { 'celular': true }
		}

		return null;
	}

}