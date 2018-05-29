import { IMyDateModel }    from 'mydatepicker';

import { CondicionFisica } from 'app/core/models/condicion-fisica';

export class PreguntaMedica {
	idPregunta: number;
	textoPregunta: string;
	confirmacionPregunta: boolean;
	nombrePadecimiento?: string;
	fechaPadecimiento?: IMyDateModel;
	duracionPadecimiento?: number;
	condicionesActuales?: CondicionFisica;
}