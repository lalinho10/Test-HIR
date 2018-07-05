import { DetalleProducto } from './detalle-producto';

let detalleSegubici: DetalleProducto = new DetalleProducto();

	detalleSegubici.descProductoHTML =
		`Seguro de accidentes personales con reembolso de gastos médicos y cobertura por muerte accidental.<br><br>
		Paquetes a tu elección<br><br>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Costo por año</th>
					<th>Indemnización por fallecimiento por accidente</th>
					<th>Indemnización por reembolso de gastos médicos</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td> A </td>
					<td>$370.00</td>
					<td>$25,000.00</td>
					<td>$25,000.00</td>
				</tr>
				<tr>
					<td> B </td>
					<td>$740.00</td>
					<td>$50,000.00</td>
					<td>$50,000.00</td>
				</tr>
				<tr>
					<td> C </td>
					<td>$1110.00</td>
					<td>$75,000.00</td>
					<td>$75,000.00</td>
				</tr>
			</tbody>
		</table>
		`;
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