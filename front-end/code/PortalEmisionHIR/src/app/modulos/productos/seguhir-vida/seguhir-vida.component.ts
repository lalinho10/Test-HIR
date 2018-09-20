import { Component }	   from '@angular/core';

import { DetalleProducto } from 'app/core/data/productos/detalle-producto';
import { DET_PROD_SV }	   from 'app/core/data/productos/seguhir-vida';

@Component({
	selector: 'pehir-pseguhir-vida',
	templateUrl: 'seguhir-vida.component.html'
})

export class SeguhirVidaComponent {
	titulo: string = 'Productos - SeguHIR Vida';

	detalleSeguhirVida: DetalleProducto = DET_PROD_SV;
}