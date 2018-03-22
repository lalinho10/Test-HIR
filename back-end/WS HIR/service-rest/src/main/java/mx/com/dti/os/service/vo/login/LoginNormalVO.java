/**
 * 
 */
package mx.com.dti.os.service.vo.login;

/**
 * @author DTI
 *
 */
public class LoginNormalVO {

	/**
	 * 
	 */
	public LoginNormalVO() {
		super();
	}

	private String usuario;
	private String contrasenia;
	
	/**
	 * @return the usuario
	 */
	public String getUsuario() {
		return usuario;
	}
	/**
	 * @param usuario the usuario to set
	 */
	public void setUsuario(String usuario) {
		this.usuario = usuario;
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
	 * @param usuario
	 * @param contrasenia
	 */
	public LoginNormalVO(String usuario, String contrasenia) {
		super();
		this.usuario = usuario;
		this.contrasenia = contrasenia;
	}
	
}
