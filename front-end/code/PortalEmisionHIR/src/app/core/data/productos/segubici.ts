import { DetalleProducto } from './detalle-producto';

let detalleSegubici: DetalleProducto = new DetalleProducto();

	detalleSegubici.descProductoHTML =
		`Seguro de accidentes personales con reembolso de gastos médicos y cobertura por muerte accidental.<br><br>
		Paquetes a tu elección`;
	detalleSegubici.dataTable =
	{
		columns:
		[
			{ key: 'tipo', name: '' },
			{ key: 'costo', name: 'Costo por año' },
			{ key: 'indFallAcc', name: 'Indemnización por fallecimiento por accidente' },
			{ key: 'indRemGM', name: 'Indemnización por reembolso de gastos médicos' }
		],
		rows:
		[
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'A' },
					{ columnKey: 'costo', cellData: '$370.00' },
					{ columnKey: 'indFallAcc', cellData: '$25,000.00' },
					{ columnKey: 'indRemGM', cellData: '$25,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'B' },
					{ columnKey: 'costo', cellData: '$740.00' },
					{ columnKey: 'indFallAcc', cellData: '$50,000.00' },
					{ columnKey: 'indRemGM', cellData: '$50,000.00' }
				]
			},
			{
				cells:
				[
					{ columnKey: 'tipo', cellData: 'C' },
					{ columnKey: 'costo', cellData: '$1,110.00' },
					{ columnKey: 'indFallAcc', cellData: '$75,000.00' },
					{ columnKey: 'indRemGM', cellData: '$75,000.00' }
				]
			}
		]
	};
	detalleSegubici.tipoProducto = 'accidentes';
	detalleSegubici.beneficios =
	[
		'Fácil de contratar.',
		'Pago de indemnizaciones en ventanilla banacaria.',
		'Garantia de pago de reembolsos en 7 días.'
	];
	detalleSegubici.ventajas =
	[
		'Deducible mínimo de $500 pesos.',
		'Plan de protección anual.',
		'Renovación automática.',
		'Tarifa única',
		'Formato de pago: efectivo, cheque, tarjeta de crédito o débito.'
	];
	detalleSegubici.rutaImagen1 = './assets/img/Prod_SeguBici.gif';
	detalleSegubici.rutaImagen2 = './assets/img/Nom_SeguBici.png';

export const DET_PROD_SB = detalleSegubici;