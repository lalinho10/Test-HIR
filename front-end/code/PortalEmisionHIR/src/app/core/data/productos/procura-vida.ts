import { DetalleProducto } from './detalle-producto';

let detalleProcuraVida: DetalleProducto = new DetalleProducto();

	detalleProcuraVida.descProducto = `HIR Seguros es soporte en los momentos más difíciles con un seguro de vida con cobertura por fallecimiento desde $150 pesos, cuenta con un respaldo y la seguridad para que la familia tenga recursos para solventar un momento difícil.
	Amparado por Fallecimiento y Muerte accidental.`;
	detalleProcuraVida.beneficios =
	[
		'Fácil de contratar.',
		'Sin requisitos de examen médico.',
		'Es posible incrementar la suma asegurada.',
		'Asistencia funeraria con pago directo en caso de solicitarlo.'
	],
	detalleProcuraVida.ventajas =
	[
		'Plan de protección anual.',
		'Renovación automática.',
		'Tarifa única.',
		'Formato de pago: efectivo, cheque, tarjeta de crédito o débito.'
	],
	detalleProcuraVida.rutaImagen1 = './assets/img/Prod_ProcuraVida.gif';
	detalleProcuraVida.rutaImagen2 = './assets/img/sinImagen.png';

export const DET_PROD_PV = detalleProcuraVida;