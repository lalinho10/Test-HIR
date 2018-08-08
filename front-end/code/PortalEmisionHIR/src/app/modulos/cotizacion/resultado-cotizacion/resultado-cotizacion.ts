import { TarifaCobertura } from 'app/core/models/tarifa-cobertura';

export class ResultadoCotizacion {
	edad: number;
	pago: number;
	tarifas: TarifaCobertura[];
}