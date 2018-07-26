import { Component }	   from '@angular/core';

import { DetalleProducto } from 'app/core/data/productos/detalle-producto';
import { DET_PROD_SE }	   from 'app/core/data/productos/seguhir-empresario';

@Component({
	selector: 'pehir-pseguhir-empresario',
	templateUrl: 'seguhir-empresario.component.html'
})

export class SeguhirEmpresarioComponent {
	titulo: string = 'Productos - SeguHIR Empresario';

	detalleSeguhirEmpresario: DetalleProducto = DET_PROD_SE;
}