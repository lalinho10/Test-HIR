import { AbstractControl, ValidatorFn } from '@angular/forms';

const CLAVE_AGENTE_REGEX = new RegExp( /^[0-9]{6}$/ );

export function ClaveAgenteValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgClaveAgente = control.value;

		if( !CLAVE_AGENTE_REGEX.test( stgClaveAgente ) ) {
			return { 'claveAgente': true }
		}

		return null;
	}

}