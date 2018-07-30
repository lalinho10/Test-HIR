package mx.com.dti.os.service.common.util.comunes;

public class RespuestaRFCVO {

	private Integer codigoRespuesta;
	private String mensaje;
	private String rfc;
	
	/**
	 * 
	 */
	public RespuestaRFCVO() {
		super();
	}

	/**
	 * @param codigoRespuesta
	 * @param mensaje
	 * @param rfc
	 */
	public RespuestaRFCVO(Integer codigoRespuesta, String mensaje, String rfc) {
		super();
		this.codigoRespuesta = codigoRespuesta;
		this.mensaje = mensaje;
		this.rfc = rfc;
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
	 * @return the rfc
	 */
	public String getRfc() {
		return rfc;
	}

	/**
	 * @param rfc the rfc to set
	 */
	public void setRfc(String rfc) {
		this.rfc = rfc;
	}
	
}
