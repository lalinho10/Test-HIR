import { Component }	   from '@angular/core';

import { DetalleProducto } from 'app/core/data/productos/detalle-producto';
import { DET_PROD_GF }	   from 'app/core/data/productos/gastos-funerarios';

@Component({
	selector: 'pehir-pgastos-funerarios',
	templateUrl: 'gastos-funerarios.component.html'
})

export class GastosFunerariosComponent {
	titulo: string = 'Productos - Gastos Funerarios';

	detalleGastosFunerarios: DetalleProducto = DET_PROD_GF;
}