/**
 * 
 */
package mx.com.dti.os.service.vo.login;

/**
 * @author DTI
 *
 */
public class LoginRegistroVO {

	/**
	 * 
	 */
	public LoginRegistroVO() {
		super();
	}

	private String nombre;
	private String paterno;
	private String materno;
	private String correo;
	private String contrasenia;
	private String confirmarContrasenia;
	private String telefonoCelular;
	private String telefonoFijo;
	
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
	 * @return the correo
	 */
	public String getCorreo() {
		return correo;
	}
	/**
	 * @param correo the correo to set
	 */
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	/**
	 * @return the contrasenia
	 */
	public String getContrasenia() {
		return contrasenia;
	}
	/**
	 * @param contrasenia the contrasenia to set
	 */
	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}
	/**
	 * @return the confirmarContrasenia
	 */
	public String getConfirmarContrasenia() {
		return confirmarContrasenia;
	}
	/**
	 * @param confirmarContrasenia the confirmarContrasenia to set
	 */
	public void setConfirmarContrasenia(String confirmarContrasenia) {
		this.confirmarContrasenia = confirmarContrasenia;
	}
	/**
	 * @return the telefonoCelular
	 */
	public String getTelefonoCelular() {
		return telefonoCelular;
	}
	/**
	 * @param telefonoCelular the telefonoCelular to set
	 */
	public void setTelefonoCelular(String telefonoCelular) {
		this.telefonoCelular = telefonoCelular;
	}
	/**
	 * @return the telefonoFijo
	 */
	public String getTelefonoFijo() {
		return telefonoFijo;
	}
	/**
	 * @param telefonoFijo the telefonoFijo to set
	 */
	public void setTelefonoFijo(String telefonoFijo) {
		this.telefonoFijo = telefonoFijo;
	}
	
	/**
	 * @param nombre
	 * @param paterno
	 * @param materno
	 * @param correo
	 * @param contrasenia
	 * @param confirmarContrasenia
	 * @param telefonoCelular
	 * @param telefonoFijo
	 */
	public LoginRegistroVO(String nombre, String paterno, String materno, String correo, String contrasenia,
			String confirmarContrasenia, String telefonoCelular, String telefonoFijo) {
		super();
		this.nombre = nombre;
		this.paterno = paterno;
		this.materno = materno;
		this.correo = correo;
		this.contrasenia = contrasenia;
		this.confirmarContrasenia = confirmarContrasenia;
		this.telefonoCelular = telefonoCelular;
		this.telefonoFijo = telefonoFijo;
	}
	
}
