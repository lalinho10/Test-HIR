package mx.com.dti.os.service.common.util.comunes;

public class ConsultaPorCodigoPostalVO {

	private String claveEstado;
	private String claveMunicipio;
	private String claveColonia;
	private String descripcionEstado;
	private String descripcionMunicipio;
	private String descripcionColonia;
	
	/**
	 * 
	 */
	public ConsultaPorCodigoPostalVO() {
		super();
	}

	/**
	 * @param claveEstado
	 * @param claveMunicipio
	 * @param claveColonia
	 * @param descripcionEstado
	 * @param descripcionMunicipio
	 * @param descripcionColonia
	 */
	public ConsultaPorCodigoPostalVO(String claveEstado, String claveMunicipio, String claveColonia,
			String descripcionEstado, String descripcionMunicipio, String descripcionColonia) {
		super();
		this.claveEstado = claveEstado;
		this.claveMunicipio = claveMunicipio;
		this.claveColonia = claveColonia;
		this.descripcionEstado = descripcionEstado;
		this.descripcionMunicipio = descripcionMunicipio;
		this.descripcionColonia = descripcionColonia;
	}

	/**
	 * @return the claveEstado
	 */
	public String getClaveEstado() {
		return claveEstado;
	}

	/**
	 * @param claveEstado the claveEstado to set
	 */
	public void setClaveEstado(String claveEstado) {
		this.claveEstado = claveEstado;
	}

	/**
	 * @return the claveMunicipio
	 */
	public String getClaveMunicipio() {
		return claveMunicipio;
	}

	/**
	 * @param claveMunicipio the claveMunicipio to set
	 */
	public void setClaveMunicipio(String claveMunicipio) {
		this.claveMunicipio = claveMunicipio;
	}

	/**
	 * @return the claveColonia
	 */
	public String getClaveColonia() {
		return claveColonia;
	}

	/**
	 * @param claveColonia the claveColonia to set
	 */
	public void setClaveColonia(String claveColonia) {
		this.claveColonia = claveColonia;
	}

	/**
	 * @return the descripcionEstado
	 */
	public String getDescripcionEstado() {
		return descripcionEstado;
	}

	/**
	 * @param descripcionEstado the descripcionEstado to set
	 */
	public void setDescripcionEstado(String descripcionEstado) {
		this.descripcionEstado = descripcionEstado;
	}

	/**
	 * @return the descripcionMunicipio
	 */
	public String getDescripcionMunicipio() {
		return descripcionMunicipio;
	}

	/**
	 * @param descripcionMunicipio the descripcionMunicipio to set
	 */
	public void setDescripcionMunicipio(String descripcionMunicipio) {
		this.descripcionMunicipio = descripcionMunicipio;
	}

	/**
	 * @return the descripcionColonia
	 */
	public String getDescripcionColonia() {
		return descripcionColonia;
	}

	/**
	 * @param descripcionColonia the descripcionColonia to set
	 */
	public void setDescripcionColonia(String descripcionColonia) {
		this.descripcionColonia = descripcionColonia;
	}
	
}
