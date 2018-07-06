import { DetalleProducto } from './detalle-producto';

let detalleApindividual: DetalleProducto = new DetalleProducto();

	detalleApindividual.descProductoHTML =
		`Un reembolso por  gastos médicos que origine el accidente.<br><br>
		Una indemnización en caso de fallecimiento por el accidente.<br><br>
		Paquetes a tu elección`;
	detalleApindividual.dataTable =
	{
		columns:
		[
			{ key: 'tipo', name: '' },
			{ key: 'costo', name: 'Costo por año' },
			{ key: 'remGM', name: 'Reembolso de gastos médicos *' },
			{ key: 'indFallAcc', name: 'Indemnización por falleciemiento por accidente' }
		],
		rows:
		[
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'A' },
					{ columnKey: 'costo', cellData: '$300.00' },
					{ columnKey: 'remGM', cellData: '$10,000.00' },
					{ columnKey: 'indFallAcc', cellData: '$15,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'B' },
					{ columnKey: 'costo', cellData: '$370.00' },
					{ columnKey: 'remGM', cellData: '$15,000.00' },
					{ columnKey: 'indFallAcc', cellData: '$25,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'C' },
					{ columnKey: 'costo', cellData: '$555.00' },
					{ columnKey: 'remGM', cellData: '$25,000.00' },
					{ columnKey: 'indFallAcc', cellData: '$25,000.00' }
				]
			}
		],
		footer: '(*) El gastos debe ser superior a $500 pesos'
	};
	detalleApindividual.tipoProducto = 'accidentes';
	detalleApindividual.beneficios =
	[
		'Una cobertura por 365 días, las 24 horas del día.',
		'Pago de indemnizaciones en ventanillas bancarias.',
		'Garantia de pago de reembolsos en 7 días.'
	];
	detalleApindividual.ventajas =
	[
		'Deducible mínimo de $500 pesos.',
		'Plan de protección anual.',
		'Renovación automática.',
		'Tarifa única.',
		'Formato de pago: efectivo, cheque, tarjeta de crédito o débito.'
	];
	detalleApindividual.rutaImagen1 = './assets/img/Prod_APIndividual.gif';
	detalleApindividual.rutaImagen2 = './assets/img/Nom_APIndividual.png';

export const DET_PROD_API = detalleApindividual;