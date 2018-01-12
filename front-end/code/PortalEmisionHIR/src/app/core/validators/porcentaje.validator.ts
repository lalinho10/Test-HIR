import { AbstractControl, ValidatorFn } from '@angular/forms';

const PORCENTAJE_REGEX = new RegExp( /^([1-9]|[1-9][0-9]|[1][0][0])$/ );

export function PorcentajeValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgPorcentaje = control.value;

		if( !PORCENTAJE_REGEX.test( stgPorcentaje ) ) {
			return { 'porcentaje': true }
		}

		return null;
	}

}
