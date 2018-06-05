import { Component, OnInit }   from '@angular/core';
import { Router }			   from '@angular/router';

import { Cotizacion }		   from '../cotizacion';
import { ResultadoCotizacion } from './resultado-cotizacion';

import { CotizacionService }   from '../cotizacion.service';

@Component({
	selector: 'pehir-resultado-cotizacion',
	templateUrl: 'resultado-cotizacion.component.html'
})

export class ResultadoCotizacionComponent implements OnInit {
	titulo: string = 'Resultado de la cotización';

	tipoCotizacion: string;

	resultadoCotizacion: ResultadoCotizacion;

	constructor(
		private router: Router,
		private cotizacionService: CotizacionService
	) {}

	ngOnInit() {
		this.tipoCotizacion = this.cotizacionService.obtenerDescripcionProducto();
		this.resultadoCotizacion = this.cotizacionService.obtenerResultadoCotizacion();
	}

	fnIrEmision(): void {
		this.router.navigateByUrl( this.cotizacionService.obtenerRutaEmision() );
	}

	fnIrCotizacion( edicionCotizacion: boolean ): void {
		this.cotizacionService.definirEdicion( edicionCotizacion );
		this.router.navigateByUrl( this.cotizacionService.obtenerRutaRegreso() );
	}
}