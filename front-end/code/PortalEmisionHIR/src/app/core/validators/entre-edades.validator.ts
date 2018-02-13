import { AbstractControl, ValidatorFn } from '@angular/forms';

export function EntreEdadesValidator( aniosMin: number, aniosMax: number ): ValidatorFn {
	let hoy = new Date();

	let minFecNac = new Date();
		minFecNac.setFullYear( hoy.getFullYear() - aniosMax );
		minFecNac.setHours( 0, 0, 0, 0 );

	let maxFecNac = new Date();
		maxFecNac.setFullYear( hoy.getFullYear() - aniosMin );
		maxFecNac.setHours( 0, 0, 0, 0 );

	return ( control: AbstractControl ): { [ key: string ]: any } => {
		const calFecNac = control.value;

		if( calFecNac.jsdate ) {
			let selFecNac = calFecNac.jsdate.getTime();

			if( !( selFecNac >= minFecNac.getTime() && selFecNac <= maxFecNac.getTime() ) ) {
				return { 'entreedades': true }
			}
		}

		return null;
	}

}