import { Component }		 from '@angular/core';

import { CotizacionService } from '../cotizacion.service';

@Component({
	selector: 'pehir-cotizacion-vida',
	templateUrl: 'cotizacion-vida.component.html'
})

export class CotizacionVidaComponent {
	titulo: string = 'Cotización - Seguros de vida';

	constructor( private cotizacionService: CotizacionService ){
		this.cotizacionService.definirEdicion( false );
	}
}