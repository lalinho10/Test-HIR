import { AbstractControl, ValidatorFn } from '@angular/forms';

const APELLIDO_REGEX = new RegExp( /^[a-zñáéíóúüA-ZÑÁÉÍÓÚÜ ]{0,25}$/ );

export function ApellidoValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgApellido = control.value;

		if( !APELLIDO_REGEX.test( stgApellido ) ) {
			return { 'apellido': true }
		}

		return null;
	}

}