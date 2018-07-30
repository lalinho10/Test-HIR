/**
 * 
 */
package mx.com.dti.os.service.vo.login;

import java.math.BigInteger;
import java.util.Date;

/**
 * @author DTI
 *
 */
public class LoginNormalRespuesta {

	private BigInteger idCodigo;
	private String mensaje;
	private Integer codigoRespuesta;
	private Date fechaOperacion;
	/**
	 * @return the idCodigo
	 */
	public BigInteger getIdCodigo() {
		return idCodigo;
	}
	/**
	 * @param idCodigo the idCodigo to set
	 */
	public void setIdCodigo(BigInteger idCodigo) {
		this.idCodigo = idCodigo;
	}
	/**
	 * @return the mensaje
	 */
	public String getMensaje() {
		return mensaje;
	}
	/**
	 * @param mensaje the mensaje to set
	 */
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	/**
	 * @return the codigoRespuesta
	 */
	public Integer getCodigoRespuesta() {
		return codigoRespuesta;
	}
	/**
	 * @param codigoRespuesta the codigoRespuesta to set
	 */
	public void setCodigoRespuesta(Integer codigoRespuesta) {
		this.codigoRespuesta = codigoRespuesta;
	}
	/**
	 * @return the fechaOperacion
	 */
	public Date getFechaOperacion() {
		return fechaOperacion;
	}
	/**
	 * @param fechaOperacion the fechaOperacion to set
	 */
	public void setFechaOperacion(Date fechaOperacion) {
		this.fechaOperacion = fechaOperacion;
	}
	
	public LoginNormalRespuesta() {
		super();
	}
	
	public LoginNormalRespuesta(BigInteger idCodigo, String mensaje, int codigoRespuesta, Date fechaOperacion) {
		super();
		this.idCodigo = idCodigo;
		this.mensaje = mensaje;
		this.codigoRespuesta = codigoRespuesta;
		this.fechaOperacion = fechaOperacion;
	}
	
	
}
