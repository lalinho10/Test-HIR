import { AbstractControl, ValidatorFn } from '@angular/forms';

const CONTRASENA_REGEX = new RegExp( /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[$@¡%*?&]).{8,20}$/ );

export function ContrasenaValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgContrasena = control.value;

		if( !CONTRASENA_REGEX.test( stgContrasena ) ) {
			return { 'contrasena': true }
		}

		return null;
	}

}