package mx.com.dti.os.service.common.util.comunes;

public class RespuestaEntidadVO {

	private String claveEntidad;
	private String descripcionEntidad;
	
	/**
	 * 
	 */
	public RespuestaEntidadVO() {
		super();
	}
	
	/**
	 * @param claveEntidad
	 * @param descripcionEntidad
	 */
	public RespuestaEntidadVO(String claveEntidad, String descripcionEntidad) {
		super();
		this.claveEntidad = claveEntidad;
		this.descripcionEntidad = descripcionEntidad;
	}
	
	/**
	 * @return the claveEntidad
	 */
	public String getClaveEntidad() {
		return claveEntidad;
	}
	
	/**
	 * @param claveEntidad the claveEntidad to set
	 */
	public void setClaveEntidad(String claveEntidad) {
		this.claveEntidad = claveEntidad;
	}
	
	/**
	 * @return the descripcionEntidad
	 */
	public String getDescripcionEntidad() {
		return descripcionEntidad;
	}
	
	/**
	 * @param descripcionEntidad the descripcionEntidad to set
	 */
	public void setDescripcionEntidad(String descripcionEntidad) {
		this.descripcionEntidad = descripcionEntidad;
	}

}
