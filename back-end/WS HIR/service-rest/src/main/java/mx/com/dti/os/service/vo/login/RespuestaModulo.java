/**
 * 
 */
package mx.com.dti.os.service.vo.login;

import java.util.Date;

/**
 * @author DTI
 *
 */
public class RespuestaModulo {

	private Integer min;
	private Integer max;
	private Date fechaOperacion;
	private String mensaje;
	private Integer codigoRespuesta;
	/**
	 * @return the min
	 */
	public Integer getMin() {
		return min;
	}
	/**
	 * @param min the min to set
	 */
	public void setMin(Integer min) {
		this.min = min;
	}
	/**
	 * @return the max
	 */
	public Integer getMax() {
		return max;
	}
	/**
	 * @param max the max to set
	 */
	public void setMax(Integer max) {
		this.max = max;
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
	 * 
	 */
	public RespuestaModulo() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param min
	 * @param max
	 * @param fechaOperacion
	 * @param mensaje
	 * @param codigoRespuesta
	 */
	public RespuestaModulo(Integer min, Integer max, Date fechaOperacion, String mensaje, Integer codigoRespuesta) {
		super();
		this.min = min;
		this.max = max;
		this.fechaOperacion = fechaOperacion;
		this.mensaje = mensaje;
		this.codigoRespuesta = codigoRespuesta;
	}
	
}
