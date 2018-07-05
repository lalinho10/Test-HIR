import { DetalleProducto } from './detalle-producto';

let detalleApindividual: DetalleProducto = new DetalleProducto();

	detalleApindividual.descProductoHTML =
		`Un reembolso por  gastos médicos que origine el accidente.<br><br>
		Una indemnización en caso de fallecimiento por el accidente.<br><br>
		Paquetes a tu elección<br><br>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Costo por año</th>
					<th>Reembolso de gastos médicos*</th>
					<th>Indemnización por falleciemiento por accidente</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> A </td>
					<td>$300.00</td>
					<td>$10,000.00</td>
					<td>$15,000.00</td>
				</tr>
				<tr>
					<td> B </td>
					<td>$370.00</td>
					<td>$15,000.00</td>
					<td>$25,000.00</td>
				</tr>
				<tr>
					<td> C </td>
					<td>$555.00</td>
					<td>$25,000.00</td>
					<td>$25,000.00</td>
				</tr>
			</tbody>
		</table>
		<br>
		(*) El gastos debe ser superior a $500 pesos
		`;
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