import { DetalleProducto } from './detalle-producto';

let detalleSeguhirEmpresario: DetalleProducto = new DetalleProducto();

	detalleSeguhirEmpresario.descProductoHTML =
		`Eres un emprendedor y requieres cuidar de tu salud, ten un soporte económico para mantener tus proyectos, con una membresía HIR Seguros para el control de tu salud.<br><br>
		Seguro de vida con tres beneficios cobertura por fallecimiento, muerte accidental y membresía para el cuidado de tu salud.<br><br>
		Costo $850 adquiere una indemnización de $100,000 y el doble si la muerte ocurre a causa de un accidente. Esta cobertura por muerte accidental paga a los beneficiarios designados del asegurado $100,000 pesos adicionales si el asegurado fallece a consecuencia directa de un accidente cubierto ocurrido durante la vigencia de la póliza, siempre y cuando la muerte ocurra dentro de los 90 días siguientes a la fecha del accidente.`;
	detalleSeguhirEmpresario.tipoProducto = 'vida';
	detalleSeguhirEmpresario.beneficios =
	[
		'Fácil de contratar.',
		'Sin requisitos de examen médico.',
		'Membresía para el cuidado de su salud y asistencia funeraria con pago directo en caso de solicitarlo.'
	];
	detalleSeguhirEmpresario.ventajas =
	[
		'Plan de protección anual.',
		'Tarifa única.',
		'Forma de pago: efectivo, tarjeta de crédito o débito.'
	];
	detalleSeguhirEmpresario.asistenciaHTML =
		`Para el cuidado de su salud y asistencia funeraria.<br><br>
		Membresía de salud es un programa con el cual podrás monitorear y evaluar tu estado de salud, a través de consultas con médicos de primer contacto y de especialidad, estudios de gabinete  y laboratorio; médicos, enfermeras y cuidadoras a domicilio, todos estos servicios con descuento.<br><br>
		Asistencia Funeraria, puede acceder a una amplia gama de servicios, entre los que se cuentan: sala de velación, traslados, ataúd, carroza, capilla y trámites legales.
		`;
	detalleSeguhirEmpresario.rutaImagen1 = './assets/img/Prod_SeguHIREmpresario.gif';
	detalleSeguhirEmpresario.rutaImagen2 = './assets/img/Nom_SeguHIREmpresario.png';

export const DET_PROD_SE = detalleSeguhirEmpresario;