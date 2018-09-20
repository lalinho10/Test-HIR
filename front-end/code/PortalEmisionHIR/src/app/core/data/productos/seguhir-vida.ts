import { DetalleProducto } from './detalle-producto';

let detalleSeguhirVida: DetalleProducto = new DetalleProducto();

	detalleSeguhirVida.descProductoHTML =
		`HIR Seguros es soporte en los momentos más difíciles con un seguro de vida con cobertura por fallecimiento desde $150 pesos, cuenta con un respaldo y la seguridad para que la familia tenga recursos para solventar un momento difícil.<br><br>
		Amparado por Fallecimiento y Muerte accidental.<br><br>
		Paquetes a tu elección
		<ol>
			<li>1er. Diagnóstico de cáncer: Se paga al asegurado una indemnización una vez que sea comprobado el diagnóstico de cáncer de mayor incidencia.</li>
			<li>Cáncer de mayor incidencia: Se paga a los beneficiarios de la póliza la suma asegurada contratada por el fallecimiento del asegurado a causa de un cáncer de mayor incidencia.</li>
			<li>3.	Fallecimiento por cáncer: Se paga a los beneficiarios de la póliza la suma asegurada contratada por el fallecimiento del asegurado a causa de cualquier cáncer.</li>
		</ol>
		Adicional e independiente de estas coberturas mencionadas se otorga una suma asegurada que va desde los $248,000.00 pesos por el fallecimiento de cualquier causa del asegurado a los beneficiarios de la póliza.
		`;
	detalleSeguhirVida.dataTable =
	{
		columns:
		[
			{ key: 'costoMensual', name: 'Costo mensual' },
			{ key: '240', name: '$240.00' },
			{ key: '360', name: '$360.00' },
			{ key: '480', name: '$480.00' }
		],
		rows:
		[
			{
				cells:
				[
					{ columnKey: 'costoMensual', cellData: 'Cobertura fallecimiento' },
					{ columnKey: '240', cellData: '$248,000.00' },
					{ columnKey: '360', cellData: '$372,000.00' },
					{ columnKey: '480', cellData: '$496,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'costoMensual', cellData: 'Primer Diagnóstico de Cáncer' },
					{ columnKey: '240', cellData: '$60,000.00' },
					{ columnKey: '360', cellData: '$90,000.00' },
					{ columnKey: '480', cellData: '$120,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'costoMensual', cellData: 'Fallecimiento por Cáncer de Mayor Incidencia' },
					{ columnKey: '240', cellData: '$60,000.00' },
					{ columnKey: '360', cellData: '$90,000.00' },
					{ columnKey: '480', cellData: '$120,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'costoMensual', cellData: 'Fallecimiento por Cáncer' },
					{ columnKey: '240', cellData: '$60,000.00' },
					{ columnKey: '360', cellData: '$90,000.00' },
					{ columnKey: '480', cellData: '$120,000.00' }
				]
			}
		]
	};
	detalleSeguhirVida.tipoProducto = 'vida';
	detalleSeguhirVida.beneficios =
	[
		'Acceso a una primera indemnización para la atención médica después de la detección de cáncer.',
		'Fácil de contratar.'
	];
	detalleSeguhirVida.ventajas =
	[
		'Tarifa única.',
		'Las edades de aceptación son desde 18 años, hasta los 64 años.',
		'Renovación automática.'
	];
	detalleSeguhirVida.asistenciaHTML = ``;
	detalleSeguhirVida.rutaImagen1 = './assets/img/Prod_SeguHIRVida.gif';
	detalleSeguhirVida.rutaImagen2 = './assets/img/Nom_SeguHIRVida.png';

export const DET_PROD_SV = detalleSeguhirVida;