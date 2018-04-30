import { Component }		 from '@angular/core';

import { CotizacionService } from '../cotizacion.service';

@Component({
	selector: 'pehir-cotizacion-accidentes',
	templateUrl: 'cotizacion-accidentes.component.html'
})

export class CotizacionAccidentesComponent {
	titulo: string = 'Cotización - Seguros de accidentes';

	constructor( private cotizacionService: CotizacionService ){
		this.cotizacionService.definirEdicion( false );
	}
}