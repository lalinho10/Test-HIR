import { Component }		 from '@angular/core';

import { CotizacionService } from './cotizacion.service';

@Component({
	selector: 'pehir-cotizacion',
	templateUrl: 'cotizacion.component.html'
})

export class CotizacionComponent {
	titulo: string = 'Cotización';

	constructor( private cotizacionService: CotizacionService ){
		this.cotizacionService.definirEdicion( false );
	}
}