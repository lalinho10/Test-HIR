import { AbstractControl, ValidatorFn } from '@angular/forms';

const TELEFONO_REGEX = new RegExp( /^([0-9]{10})?$/ );

export function TelefonoValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgTelefono = control.value;

		if( !TELEFONO_REGEX.test( stgTelefono ) ) {
			return { 'telefono': true }
		}

		return null;
	}

}