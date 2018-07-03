import { DetalleProducto } from './detalle-producto';

let detalleApindividual: DetalleProducto = new DetalleProducto();

	detalleApindividual.descProducto = 'Un reembolso por  gastos médicos que origine el accidente. Una indemnización en caso de fallecimiento por el accidente.';
	detalleApindividual.beneficios =
	[
		'Una cobertura por 365 días, las 24 horas del día.',
		'Pago de indemnizaciones en ventanillas bancarias.',
		'Garantia de pago de reembolsos en 7 días.'
	],
	detalleApindividual.ventajas =
	[
		'Deducible mínimo de $500 pesos.',
		'Plan de protección anual.',
		'Renovación automática.',
		'Tarifa única.',
		'Formato de pago: efectivo, cheque, tarjeta de crédito o débito.'
	],
	detalleApindividual.rutaImagen1 = './assets/img/Prod_APIndividual.gif';
	detalleApindividual.rutaImagen2 = './assets/img/sinImagen.png';

export const DET_PROD_API = detalleApindividual;