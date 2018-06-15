import { DetalleProducto } from './detalle-producto';

let detalleSegubici: DetalleProducto = new DetalleProducto();

	detalleSegubici.descProducto = 'Seguro de accidentes personales con reembolso de gastos médicos y cobertura por muerte accidental.';
	detalleSegubici.beneficios =
	[
		'Fácil de contratar.',
		'Pago de indemnizaciones en ventanilla banacaria.',
		'Garantia de pago de reembolsos en 7 días.'
	],
	detalleSegubici.ventajas =
	[
		'Deducible mínimo de $500 pesos.',
		'Plan de protección anual.',
		'Renovación automática.',
		'Tarifa única',
		'Formato de pago: efectivo, cheque, tarjeta de crédito o débito.'
	],
	detalleSegubici.rutaImagen1 = './assets/img/sinImagen.png';
	detalleSegubici.rutaImagen2 = './assets/img/sinImagen.png';

export const DET_PROD_SB = detalleSegubici;