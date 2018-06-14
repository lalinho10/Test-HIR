import { Component, Input } from '@angular/core';

import { DetalleProducto }  from 'app/core/data/productos/detalle-producto';

@Component({
	selector: 'pehir-product-container',
	templateUrl: 'product-container.component.html',
	styleUrls: [ 'product-container.component.css' ]
})

export class ProductContainerComponent {
	@Input() detalleProducto: DetalleProducto;

	imageHIRPath: string = './assets/img/logoHIR.png';
}