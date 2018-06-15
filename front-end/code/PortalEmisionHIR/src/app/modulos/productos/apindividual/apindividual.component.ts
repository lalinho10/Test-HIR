import { Component } from '@angular/core';

import { DetalleProducto } from 'app/core/data/productos/detalle-producto';
import { DET_PROD_API }	   from 'app/core/data/productos/apindividual';

@Component({
	selector: 'pehir-papindividual',
	templateUrl: 'apindividual.component.html'
})

export class ApindividualComponent {
	titulo: string = 'Productos - Accidentes Personales Individual';

	detalleApindividual: DetalleProducto = DET_PROD_API;
}