import { Component }	   from '@angular/core';

import { DetalleProducto } from 'app/core/data/productos/detalle-producto';
import { DET_PROD_PV }	   from 'app/core/data/productos/procura-vida';

@Component({
	selector: 'pehir-pprocura-vida',
	templateUrl: 'procura-vida.component.html'
})

export class ProcuraVidaComponent {
	titulo: string = 'Productos - Procura Vida';

	detalleProcuraVida: DetalleProducto = DET_PROD_PV;
}