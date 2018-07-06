import { DetalleProducto } from './detalle-producto';

let detalleProcuraVida: DetalleProducto = new DetalleProducto();

	detalleProcuraVida.descProductoHTML =
		`HIR Seguros es soporte en los momentos más difíciles con un seguro de vida con cobertura por fallecimiento desde $150 pesos, cuenta con un respaldo y la seguridad para que la familia tenga recursos para solventar un momento difícil.<br><br>
		Amparado por Fallecimiento y Muerte accidental.<br><br>
		Paquetes a tu elección`;
	detalleProcuraVida.dataTable =
	{
		columns:
		[
			{ key: 'tipo', name: '' },
			{ key: 'costo', name: 'Costo por año' },
			{ key: 'indFallAcc', name: 'Indemnización por fallecimiento por accidente' },
			{ key: 'indFallCua', name: 'Indemnización por fallecimineto por cualquier causa' }
		],
		rows:
		[
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'A' },
					{ columnKey: 'costo', cellData: '$150.00' },
					{ columnKey: 'indFallAcc', cellData: '$40,000.00' },
					{ columnKey: 'indFallCua', cellData: '$20,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'B' },
					{ columnKey: 'costo', cellData: '$300.00' },
					{ columnKey: 'indFallAcc', cellData: '$80,000.00' },
					{ columnKey: 'indFallCua', cellData: '$40,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'C' },
					{ columnKey: 'costo', cellData: '$450.00' },
					{ columnKey: 'indFallAcc', cellData: '$120,000.00' },
					{ columnKey: 'indFallCua', cellData: '$60,000.00' }
				]
			}
		]
	};
	detalleProcuraVida.tipoProducto = 'vida';
	detalleProcuraVida.beneficios =
	[
		'Fácil de contratar.',
		'Sin requisitos de examen médico.',
		'Es posible incrementar la suma asegurada.',
		'Asistencia funeraria con pago directo en caso de solicitarlo.'
	];
	detalleProcuraVida.ventajas =
	[
		'Plan de protección anual.',
		'Renovación automática.',
		'Tarifa única.',
		'Formato de pago: efectivo, cheque, tarjeta de crédito o débito.'
	];
	detalleProcuraVida.asistenciaHTML = `Asistencia funeraria a través de pago directo con cargo a la suma asegurada, el prestador del servicio es Lomas de Renacimiento.`;
	detalleProcuraVida.rutaImagen1 = './assets/img/Prod_ProcuraVida.gif';
	detalleProcuraVida.rutaImagen2 = './assets/img/Nom_ProcuraVida.png';

export const DET_PROD_PV = detalleProcuraVida;