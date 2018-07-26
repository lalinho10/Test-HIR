import { Component, Input }	from '@angular/core';
import { Location }			from '@angular/common';

import { DetalleProducto }	from 'app/core/data/productos/detalle-producto';

@Component({
	selector: 'pehir-product-container',
	templateUrl: 'product-container.component.html',
	styleUrls: [ 'product-container.component.css' ]
})

export class ProductContainerComponent {
	@Input() detalleProducto: DetalleProducto;

	constructor(
		private location: Location
	) {}

	fnRegresar(): void {
		this.location.back();
	}
}