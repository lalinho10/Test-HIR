import { DetalleProducto } from './detalle-producto';

let detalleGastosFunerarios: DetalleProducto = new DetalleProducto();

	detalleGastosFunerarios.descProductoHTML = 
		`Siempre los últimos gastos son un imprevisto y no sabes quién los pueda cubrir, asegúrate de contar con la protección necesaria con un seguro de gastos funerarios, cobertura de fallecimiento.`;
	detalleGastosFunerarios.dataTable =
	{
		columns:
		[
			{ key: 'prima', name: 'Prima' },
			{ key: 'primaAnual', name: 'Prima Anual (MA) solo el titular' },
			{ key: 'sumaSegurada', name: 'Suma Asegurada' }
		],
		rows:
		[
			{
				cells:
				[
					{ columnKey: 'prima', cellData: '$360.00' },
					{ columnKey: 'primaAnual', cellData: '$385.00' },
					{ columnKey: 'sumaSegurada', cellData: '$25,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'prima', cellData: '$720.00' },
					{ columnKey: 'primaAnual', cellData: '$770.00' },
					{ columnKey: 'sumaSegurada', cellData: '$50,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'prima', cellData: '$1,080.00' },
					{ columnKey: 'primaAnual', cellData: '$1,115.00' },
					{ columnKey: 'sumaSegurada', cellData: '$75,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'prima', cellData: '$1,140.00' },
					{ columnKey: 'primaAnual', cellData: '$1,540.00' },
					{ columnKey: 'sumaSegurada', cellData: '$100,000.00' }
				]
			}
		]
	};
	detalleGastosFunerarios.tipoProducto = 'vida';
	detalleGastosFunerarios.beneficios =
	[
		'Fácil de contratar.',
		'Sin requisitos de examen médico.',
		'Asistencia funeraria con pago directo en caso de solicitarlo.',
		'Centro de atención telefónica las 24 horas, los 365 días del año.'
	];
	detalleGastosFunerarios.ventajas =
	[
		'Adicionalmente puede contratar la cobertura por muerte accidental.',
		'Tipo de plan: individual o familiar.',
		'Formato de pago: efectivo, cheque, tarjeta de crédito o débito.',
		'Edades de aceptación de 18 a 64 años.'
	];
	detalleGastosFunerarios.rutaImagen1 = './assets/img/Prod_GastosFunerarios.gif';
	detalleGastosFunerarios.rutaImagen2 = './assets/img/Nom_GastosFunerarios.png';

export const DET_PROD_GF = detalleGastosFunerarios;