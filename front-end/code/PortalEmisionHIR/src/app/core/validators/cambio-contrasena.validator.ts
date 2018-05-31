import { FormGroup, ValidatorFn } from '@angular/forms';

export function CambioContrasenaValidator( contrasenaActualKey: string, contrasenaNuevaKey: string, confContrasenaNuevaKey: string ): ValidatorFn {
	
	return ( formGroup: FormGroup ): { [ key: string ]: any } => {
		const valor1 = formGroup.controls[ contrasenaActualKey ].value;
		const valor2 = formGroup.controls[ contrasenaNuevaKey ].value;
		const valor3 = formGroup.controls[ confContrasenaNuevaKey ].value;

		if( valor1 === valor2 ) {
			return { 'cambioIgualdadContrasenas': true }
		}

		if( valor2 !== valor3 ) {
			return { 'cambioDiferenciaContrasenas': true }
		}

		return null;
	}

}