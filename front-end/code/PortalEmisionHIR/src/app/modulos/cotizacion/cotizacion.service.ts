import { Injectable } from '@angular/core';

import { PRODUCTOS }  from 'app/core/data/productos';

import { Producto }   from 'app/core/models/producto';

@Injectable()
export class CotizacionService {
	private idProducto: number;

	private productos = PRODUCTOS;

	definirProducto( idProducto: number ) {
		this.idProducto = idProducto;
	}

	obtenerRutaRegreso(): string {
		let producto: Producto[] = this.productos.filter( ( producto: Producto ) => producto.idProducto == this.idProducto );
		let path: string = '/cotizacion/' + producto[ 0 ].pathProducto;
		return path;
	}

	obtenerRutaEmision(): string {
		let producto: Producto[] = this.productos.filter( ( producto: Producto ) => producto.idProducto == this.idProducto );
		let path: string = '/emision/' + producto[ 0 ].pathProducto;
		return path;
	}
}