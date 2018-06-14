import { DetalleProducto } from './detalle-producto';

let detalleGastosFunerarios: DetalleProducto = new DetalleProducto();

	detalleGastosFunerarios.descProducto = 'Siempre los últimos gastos son un imprevisto y no sabes quién los pueda cubrir, asegúrate de contar con la protección necesaria con un seguro de gastos funerarios, cobertura de fallecimiento.';
	detalleGastosFunerarios.beneficios =
	[
		'Fácil de contratar.',
		'Sin requisitos de examen médico.',
		'Asistencia funeraria con pago directo en caso de solicitarlo.',
		'Centro de atención telefónica las 24 horas, los 365 días del año.'
	],
	detalleGastosFunerarios.ventajas =
	[
		'Adicionalmente puede contratar la cobertura por muerte accidental.',
		'Tipo de plan: Individual o familiar.',
		'Formato de pago: efectivo, cheque, tarjeta de crédito o débito.',
		'Edades de aceptación de 18 a 64 años.'
	],
	detalleGastosFunerarios.rutaImagen1 = './assets/img/sinImagen.png';
	detalleGastosFunerarios.rutaImagen2 = './assets/img/sinImagen.png';

export const DET_PROD_GF = detalleGastosFunerarios;