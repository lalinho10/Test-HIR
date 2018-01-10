export class ResultadoCotizacion {
	sumaAsegurada: number;
	nombreUsuario: string;
	correoUsuario: string;
	telefonoUsuario: string;
	edad: number;
	sexo: string;
	tipoPago: string;
	montoPago: number;

	constructor( resultadoCotizacion: ResultadoCotizacion ) {
		this.sumaAsegurada = resultadoCotizacion.sumaAsegurada;
		this.nombreUsuario = resultadoCotizacion.nombreUsuario;
		this.correoUsuario = resultadoCotizacion.correoUsuario;
		this.telefonoUsuario = resultadoCotizacion.telefonoUsuario;
		this.edad = resultadoCotizacion.edad;
		this.sexo = resultadoCotizacion.sexo;
		this.tipoPago = resultadoCotizacion.tipoPago;
		this.montoPago = resultadoCotizacion.montoPago;
	}
}