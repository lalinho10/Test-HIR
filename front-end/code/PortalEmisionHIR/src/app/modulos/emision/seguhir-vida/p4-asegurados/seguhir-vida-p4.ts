import { Asegurado } from 'app/core/models/asegurado';

export class SeguhirVidaP4 {
	conyuge?: Asegurado;
	hijo1?: Asegurado;
	hijo2?: Asegurado;
	confirmacionConyuge: boolean;
	padecimientoConyuge?: string;
	confirmacionHijo1: boolean;
	padecimientoHijo1?: string;
	confirmacionHijo2: boolean;
	padecimientoHijo2?: string;
}