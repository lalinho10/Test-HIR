import { Component }		   from '@angular/core';
import { Router }			   from '@angular/router';

import { ResultadoCotizacion } from 'app/core/models/cotizacion/resultado-cotizacion';

import { CotizacionService }   from './cotizacion.service'

@Component({
	selector: 'pehir-resultado-cotizacion',
	templateUrl: 'resultado-cotizacion.component.html'
})

export class ResultadoCotizacionComponent {
	titulo: string = 'Resultado de la cotización';

	tipoCotizacion: string = 'SeguHIR Vida';

	resultadoCotizacion: ResultadoCotizacion = new ResultadoCotizacion(
		{
			sumaAsegurada: 200000,
			nombreUsuario: 'Juan Pérez',
			correoUsuario: 'jperez@mail.com',
			telefonoUsuario: '5501010101',
			edad: 55,
			sexo: 'Masculino',
			tipoPago: 'Anual',
			montoPago: 50000
		}
	);

	constructor(
		private router: Router,
		private cotizacionService: CotizacionService
	) {}

	fnIrEmision(): void {
		this.router.navigateByUrl( this.cotizacionService.obtenerRutaEmision() );
	}

	fnIrCotizacion(): void {
		this.router.navigateByUrl( this.cotizacionService.obtenerRutaRegreso() );
	}
}