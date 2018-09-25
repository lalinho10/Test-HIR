import { Injectable } from '@angular/core';

import { Pago }		  from './pago';

import { PRODUCTOS }  from 'app/core/data/productos';

import { Producto }	  from 'app/core/models/producto';

@Injectable()
export class PagoService {
	private pago: Pago;

	private productos = PRODUCTOS;

	definirPago( idProducto: number, monto: number ): void {
		let filtroProductos = this.productos.filter( ( producto: Producto ) => producto.idProducto === idProducto );

		this.pago = new Pago();
		this.pago.producto = filtroProductos[ 0 ];
		this.pago.monto = monto;
	}

	get montoPago(): number {
		return this.pago.monto;
	}

	get productoPago(): string {
		return this.pago.producto.descProducto;
	}

	cleanModel(): void {
		this.pago = undefined;
	}
}