import { Injectable }	 from '@angular/core';

import { SeguhirVidaP3 } from './seguhir-vida-p3';

@Injectable()
export class SeguhirVidaP3Service {
	private seguhirVidaP3: SeguhirVidaP3;

	setModelP3( frmSeguhirVidaP3: any ) {
		this.seguhirVidaP3 = new SeguhirVidaP3();

		this.seguhirVidaP3.estatura = frmSeguhirVidaP3.estatura;
		this.seguhirVidaP3.peso = frmSeguhirVidaP3.peso;
		this.seguhirVidaP3.variacionPeso = frmSeguhirVidaP3.variacionPeso;
		this.seguhirVidaP3.disminucionPeso = ( frmSeguhirVidaP3.variacionPeso ) ? frmSeguhirVidaP3.disminucionPeso : undefined;
		this.seguhirVidaP3.aumentoPeso = ( frmSeguhirVidaP3.variacionPeso ) ? frmSeguhirVidaP3.aumentoPeso : undefined;
		this.seguhirVidaP3.causaVariacion = ( frmSeguhirVidaP3.variacionPeso ) ? frmSeguhirVidaP3.causaVariacion : undefined;
		this.seguhirVidaP3.datosAtencion = frmSeguhirVidaP3.datosAtencion;
		this.seguhirVidaP3.deportes = frmSeguhirVidaP3.deportes;
		this.seguhirVidaP3.competencias = frmSeguhirVidaP3.competencias;
		this.seguhirVidaP3.nivelCompetencia = frmSeguhirVidaP3.nivelCompetencia;
		this.seguhirVidaP3.frecuenciaDeporte = frmSeguhirVidaP3.frecuenciaDeporte;
		this.seguhirVidaP3.confirmacionAlcohol = frmSeguhirVidaP3.confirmacionAlcohol;
		this.seguhirVidaP3.claseAlcohol = ( frmSeguhirVidaP3.confirmacionAlcohol ) ? frmSeguhirVidaP3.claseAlcohol : undefined;
		this.seguhirVidaP3.cantidadAlcohol = ( frmSeguhirVidaP3.confirmacionAlcohol ) ? frmSeguhirVidaP3.cantidadAlcohol : undefined;
		this.seguhirVidaP3.frecuenciaAlcohol = ( frmSeguhirVidaP3.confirmacionAlcohol ) ? frmSeguhirVidaP3.frecuenciaAlcohol : undefined;
		this.seguhirVidaP3.confirmacionFuma = frmSeguhirVidaP3.confirmacionFuma;
		this.seguhirVidaP3.claseFuma = ( frmSeguhirVidaP3.confirmacionFuma ) ? frmSeguhirVidaP3.claseFuma : undefined;
		this.seguhirVidaP3.cantidadFuma = ( frmSeguhirVidaP3.confirmacionFuma ) ? frmSeguhirVidaP3.cantidadFuma : undefined;
		this.seguhirVidaP3.frecuenciaFuma = ( frmSeguhirVidaP3.confirmacionFuma ) ? frmSeguhirVidaP3.frecuenciaFuma : undefined;
		this.seguhirVidaP3.pasajeroAvion = frmSeguhirVidaP3.pasajeroAvion;
		this.seguhirVidaP3.horasVuelo = ( frmSeguhirVidaP3.pasajeroAvion ) ? frmSeguhirVidaP3.horasVuelo : undefined;
	}

	getModelP3(): SeguhirVidaP3 {
		return this.seguhirVidaP3;
	}

	hasModelP3(): boolean {
		return ( this.seguhirVidaP3 !== null && typeof this.seguhirVidaP3 !== 'undefined' );
	}

	cleanModelP3(): void {
		this.seguhirVidaP3 = undefined;
	}
}