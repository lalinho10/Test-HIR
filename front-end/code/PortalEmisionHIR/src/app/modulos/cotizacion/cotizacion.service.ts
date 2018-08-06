import { Injectable }		   from '@angular/core';

import { Cotizacion }		   from './cotizacion';
import { ResultadoCotizacion } from './resultado-cotizacion/resultado-cotizacion';

import { PRODUCTOS }		   from 'app/core/data/productos';

import { Producto }			   from 'app/core/models/producto';
import { TarifaCobertura }	   from 'app/core/models/tarifa-cobertura';

@Injectable()
export class CotizacionService {
	private editarCotizacion: boolean = false;

	private cotizacion: Cotizacion;
	private producto: Producto;
	private resultadoCotizacion: ResultadoCotizacion;

	private productos = PRODUCTOS;

	definirEdicion( editarCotizacion: boolean ): void {
		if( !editarCotizacion ) {
			this.definirCotizacion( null );
		}

		this.editarCotizacion = editarCotizacion;
	}

	esEdicion(): boolean {
		return this.editarCotizacion;
	}

	definirCotizacion( cotizacion: Cotizacion ): void {
		this.cotizacion = cotizacion;
	}

	obtenerCotizacion(): Cotizacion {
		return this.cotizacion;
	}

	hayDatosCotizacion(): boolean {
		return ( this.cotizacion !== null && typeof this.cotizacion !== 'undefined' );
	}

	definirProducto( idProducto: number ): void {
		let filtroProductos = this.productos.filter( ( producto: Producto ) => producto.idProducto == idProducto );
		this.producto = filtroProductos[ 0 ];
	}

	obtenerDescripcionProducto(): string {
		return this.producto.descProducto;
	}

	definirResultadoCotizacion( responseTarifa: any ): void {
		this.resultadoCotizacion = new ResultadoCotizacion();

		this.resultadoCotizacion.edad = responseTarifa.edad;
		this.resultadoCotizacion.tarifas = new Array();

		for( let i = 0; i < responseTarifa.data.length; i++ ) {
			let tarifaCobertura: TarifaCobertura = new TarifaCobertura();

			tarifaCobertura.tarifa = responseTarifa.data[ i ].tarifa;
			tarifaCobertura.deducible = responseTarifa.data[ i ].deducible;
			tarifaCobertura.suma = responseTarifa.data[ i ].suma;
			tarifaCobertura.descripcion = responseTarifa.data[ i ].descripcion;

			this.resultadoCotizacion.tarifas.push( tarifaCobertura );
		}
	}

	obtenerResultadoCotizacion(): ResultadoCotizacion {
		return this.resultadoCotizacion;
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