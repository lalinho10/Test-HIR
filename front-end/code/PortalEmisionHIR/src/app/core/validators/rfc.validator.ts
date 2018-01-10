import { AbstractControl, ValidatorFn } from '@angular/forms';

const RFC_REGEX = new RegExp( /^[A-Z,a-z,Ñ,ñ,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,a-z,0-9]?[A-Z,a-z,0-9]?[0-9,A-Z,a-z]?$/ );

export function RfcValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgRfc = control.value;

		if( !RFC_REGEX.test( stgRfc ) ) {
			return { 'rfc': true }
		}

		return null;
	}

}

