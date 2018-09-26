import { Producto } from 'app/core/models/producto';

export class Pago {
	idContratante: number;
	producto: Producto;
	monto: number;
}