import { Injectable }  from '@angular/core';

import { Cotizacion } from './cotizacion';

import { PRODUCTOS }   from 'app/core/data/productos';

import { Producto }    from 'app/core/models/producto';

@Injectable()
export class CotizacionService {
	private producto: Producto;

	private cotizacion: Cotizacion;

	private editarCotizacion: boolean = false;

	private productos = PRODUCTOS;

	definirProducto( idProducto: number ) {
		let filtroProductos = this.productos.filter( ( producto: Producto ) => producto.idProducto == idProducto );
		this.producto = filtroProductos[ 0 ];
	}

	obtenerDescripcionProducto() {
		return this.producto.descProducto;
	}

	definirCotizacion( cotizacion: Cotizacion ) {
		this.cotizacion = cotizacion;
	}

	obtenerCotizacion(): Cotizacion {
		return this.cotizacion;
	}

	definirEdicion( editarCotizacion: boolean ) {
		if( !editarCotizacion ) {
			this.definirCotizacion( null );
		}

		this.editarCotizacion = editarCotizacion;
	}

	esEdicion() {
		return this.editarCotizacion;
	}

	obtenerRutaRegreso(): string {
		let path: string = '/cotizacion/' + this.producto.pathProducto;
		return path;
	}

	obtenerRutaEmision(): string {
		let path: string = '/emision/' + this.producto.pathProducto;
		return path;
	}
}