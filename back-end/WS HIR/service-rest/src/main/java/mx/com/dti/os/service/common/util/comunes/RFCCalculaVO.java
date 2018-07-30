package mx.com.dti.os.service.common.util.comunes;

public class RFCCalculaVO {

	private String nombre;
	private String paterno;
	private String materno;
	private String fechaNacimiento;
	
	/**
	 * 
	 */
	public RFCCalculaVO() {
		super();
	}

	/**
	 * @param nombre
	 * @param paterno
	 * @param materno
	 * @param fechaNacimiento
	 */
	public RFCCalculaVO(String nombre, String paterno, String materno, String fechaNacimiento) {
		super();
		this.nombre = nombre;
		this.paterno = paterno;
		this.materno = materno;
		this.fechaNacimiento = fechaNacimiento;
	}

	/**
	 * @return the nombre
	 */
	public String getNombre() {
		return nombre;
	}

	/**
	 * @param nombre the nombre to set
	 */
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	/**
	 * @return the paterno
	 */
	public String getPaterno() {
		return paterno;
	}

	/**
	 * @param paterno the paterno to set
	 */
	public void setPaterno(String paterno) {
		this.paterno = paterno;
	}

	/**
	 * @return the materno
	 */
	public String getMaterno() {
		return materno;
	}

	/**
	 * @param materno the materno to set
	 */
	public void setMaterno(String materno) {
		this.materno = materno;
	}

	/**
	 * @return the fechaNacimiento
	 */
	public String getFechaNacimiento() {
		return fechaNacimiento;
	}

	/**
	 * @param fechaNacimiento the fechaNacimiento to set
	 */
	public void setFechaNacimiento(String fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	
}
