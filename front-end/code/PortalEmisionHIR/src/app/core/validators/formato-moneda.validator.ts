import { AbstractControl, ValidatorFn } from '@angular/forms';

const FORMATO_MONEDA_REGEX = new RegExp( /^[1-9](\d{1,2})?((,)?\d{3})*(\.\d{1,2})?$/ );

export function FormatoMonedaValidator(): ValidatorFn {
	
	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const stgFormatoMoneda = control.value;

		if( !FORMATO_MONEDA_REGEX.test( stgFormatoMoneda ) ) {
			return { 'formatoMoneda': true }
		}

		return null;
	}

}
