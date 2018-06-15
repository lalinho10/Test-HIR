import { Component }	   from '@angular/core';

import { DetalleProducto } from 'app/core/data/productos/detalle-producto';
import { DET_PROD_SB }	   from 'app/core/data/productos/segubici';

@Component({
	selector: 'pehir-psegubici',
	templateUrl: 'segubici.component.html'
})

export class SegubiciComponent {
	titulo: string = 'Productos - Segubici';

	detalleSegubici: DetalleProducto = DET_PROD_SB;
}