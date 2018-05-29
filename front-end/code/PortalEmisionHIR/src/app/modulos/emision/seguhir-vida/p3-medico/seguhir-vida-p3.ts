import { FrecuenciaDeporte } from 'app/core/models/frecuencia-deporte';
import { NivelCompetencia }  from 'app/core/models/nivel-competencia';
import { PreguntaMedica }    from 'app/core/models/pregunta-medica';

export class SeguhirVidaP3 {
	preguntasMedicas: PreguntaMedica[];
	estatura: number;
	peso: number;
	variacionPeso: boolean;
	disminucionPeso?: number;
	aumentoPeso?: number;
	causaVariacion?: string;
	datosAtencion: string;
	deportes: string;
	competencias: boolean;
	nivelCompetencia: NivelCompetencia;
	frecuenciaDeporte: FrecuenciaDeporte;
	confirmacionAlcohol: boolean;
	claseAlcohol?: string;
	cantidadAlcohol?: string;
	frecuenciaAlcohol?: string;
	confirmacionFuma: boolean;
	claseFuma?: string;
	cantidadFuma?: string;
	frecuenciaFuma?: string;
	pasajeroAvion: boolean;
	horasVuelo?: string;
}