import { DetalleProducto } from './detalle-producto';

let detalleSeguhirEmpresario: DetalleProducto = new DetalleProducto();

	detalleSeguhirEmpresario.descProducto = `Eres un emprendedor y requieres cuidar de tu salud, ten un soporte económico para mantener tus proyectos,  con una membresía HIR Seguros para el control de tu salud.
Seguro de vida con tres beneficios cobertura por fallecimiento, muerte accidental y membresía para el cuidado de tu salud. 
Costo $850 adquiere una indemnización de $100,000 y el doble si la muerte ocurre a causa de un accidente. Esta cobertura por muerte accidental paga a los beneficiarios designados del asegurado $100,000 pesos adicionales si el asegurado fallece a consecuencia directa de un accidente cubierto ocurrido durante la vigencia de la póliza, siempre y cuando la  muerte ocurra dentro de los 90 días siguientes a la fecha del accidente.
`;
	detalleSeguhirEmpresario.beneficios =
	[
		'Fácil de contratar.',
		'Sin requisitos de examen médico.',
		'Membresía para el cuidado de su salud y asistencia funeraria con pago directo en caso de solicitarlo.'
	],
	detalleSeguhirEmpresario.ventajas =
	[
		'Plan de protección anual.',
		'Tarifa única.',
		'Forma de pago:Efectivo, tarjeta de crédito o débito.'
	],
	detalleSeguhirEmpresario.rutaImagen1 = './assets/img/Prod_SeguHIREmpresario.gif';
	detalleSeguhirEmpresario.rutaImagen2 = './assets/img/sinImagen.png';

export const DET_PROD_SE = detalleSeguhirEmpresario;