import { Component }		   from '@angular/core';

import { ResultadoCotizacion } from 'app/core/models/cotizacion/resultado-cotizacion';

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
}