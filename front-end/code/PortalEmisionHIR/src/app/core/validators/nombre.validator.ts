import { AbstractControl, ValidatorFn } from '@angular/forms';

const NOMBRE_REGEX = new RegExp( /^[a-zñáéíóúüA-ZÑÁÉÍÓÚÜ ]{0,255}$/ );

export function NombreValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgNombre = control.value;

		if( !NOMBRE_REGEX.test( stgNombre ) ) {
			return { 'nombre': true }
		}

		return null;
	}

}