/**
 * 
 */
package mx.com.dti.os.service.vo.login;

import java.util.Date;

/**
 * @author DTI
 *
 */
public class LoginRespuesta {

	/**
	 * 
	 */
	public LoginRespuesta() {
		super();
	}

	private Date fechaOperacion;
	private String mensaje;
	private Integer codigoRespuesta;
	
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
	 * @param fechaOperacion
	 * @param mensaje
	 * @param codigoRespuesta
	 */
	public LoginRespuesta(Date fechaOperacion, String mensaje, Integer codigoRespuesta) {
		super();
		this.fechaOperacion = fechaOperacion;
		this.mensaje = mensaje;
		this.codigoRespuesta = codigoRespuesta;
	}
	
}
