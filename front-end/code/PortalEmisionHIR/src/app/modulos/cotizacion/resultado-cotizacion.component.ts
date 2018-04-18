import { Component, OnInit }   from '@angular/core';
import { Router }			   from '@angular/router';

import { Cotizacion }		   from './cotizacion';
import { CotizacionService }   from './cotizacion.service';

import { ResultadoCotizacion } from 'app/core/models/cotizacion/resultado-cotizacion';

@Component({
	selector: 'pehir-resultado-cotizacion',
	templateUrl: 'resultado-cotizacion.component.html'
})

export class ResultadoCotizacionComponent implements OnInit {
	private cotizacion: Cotizacion;

	titulo: string = 'Resultado de la cotización';

	tipoCotizacion: string;

	resultadoCotizacion: ResultadoCotizacion = new ResultadoCotizacion();

	constructor(
		private router: Router,
		private cotizacionService: CotizacionService
	) {}

	ngOnInit() {
		this.tipoCotizacion = this.cotizacionService.obtenerDescripcionProducto();
		this.cotizacion = this.cotizacionService.obtenerCotizacion();
		this.mapResultadoCotizacion();
	}

	private mapResultadoCotizacion(): void {
		let edad: number = new Date().getFullYear() - this.cotizacion.fechanac.getFullYear();

		this.resultadoCotizacion.sumaAsegurada = this.cotizacion.sumaAsegurada;
		this.resultadoCotizacion.nombreUsuario = this.cotizacion.nombre + ' ' +
												 this.cotizacion.apaterno + ' ' +
												 this.cotizacion.amaterno;
		this.resultadoCotizacion.correoUsuario = '';
		this.resultadoCotizacion.telefonoUsuario = '';
		this.resultadoCotizacion.edad = edad;
		this.resultadoCotizacion.sexo = this.cotizacion.genero.descGenero;
		this.resultadoCotizacion.tipoPago = this.cotizacion.formaPago.descFormaPago;
		this.resultadoCotizacion.montoPago = 0;
	}

	fnIrEmision(): void {
		this.router.navigateByUrl( this.cotizacionService.obtenerRutaEmision() );
	}

	fnIrCotizacion( edicionCotizacion: boolean ): void {
		this.cotizacionService.definirEdicion( edicionCotizacion );
		this.router.navigateByUrl( this.cotizacionService.obtenerRutaRegreso() );
	}
}