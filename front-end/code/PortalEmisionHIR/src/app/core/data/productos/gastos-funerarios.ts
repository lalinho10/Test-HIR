import { DetalleProducto } from './detalle-producto';

let detalleGastosFunerarios: DetalleProducto = new DetalleProducto();

	detalleGastosFunerarios.descProductoHTML = 
		`Siempre los últimos gastos son un imprevisto y no sabes quién los pueda cubrir, asegúrate de contar con la protección necesaria con un seguro de gastos funerarios, cobertura de fallecimiento.
		<br><br>
		<table>
			<thead>
				<tr>
					<th>Prima</th>
					<th>Prima Anual (MA) solo el titular</th>
					<th>Suma Asegurada</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>$360</td>
					<td>$385</td>
					<td>$25 mil</td>
				</tr>
				<tr>
					<td>$720</td>
					<td>$770</td>
					<td>$50 mil</td>
				</tr>
				<tr>
					<td>$1080</td>
					<td>$1155</td>
					<td>$75 mil</td>
				</tr>
				<tr>
					<td>$1440</td>
					<td>$1540</td>
					<td>$100 mil</td>
				</tr>
			</tbody>
		</table>
		`;
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