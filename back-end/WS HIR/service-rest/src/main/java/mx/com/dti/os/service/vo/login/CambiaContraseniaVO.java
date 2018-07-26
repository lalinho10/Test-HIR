
package mx.com.dti.os.service.vo.login;

import mx.com.dti.os.service.vo.login.LoginNormalVO;
/**
 * @author DTI
 *
 */
public class CambiaContraseniaVO extends LoginNormalVO {

	private String nuevaContrasenia;

	/**
	 * @return the nuevaContrasenia
	 */
	public String getNuevaContrasenia() {
		return nuevaContrasenia;
	}

	/**
	 * @param nuevaContrasenia the nuevaContrasenia to set
	 */
	public void setNuevaContrasenia(String nuevaContrasenia) {
		this.nuevaContrasenia = nuevaContrasenia;
	}

	/**
	 * 
	 */
	public CambiaContraseniaVO() {
		super();
	}

	/**
	 * @param usuario
	 * @param contrasenia
	 */
	public CambiaContraseniaVO(String usuario, String contrasenia) {
		super(usuario, contrasenia);
	}

	/**
	 * @param nuevaContrasenia
	 */
	public CambiaContraseniaVO(String nuevaContrasenia) {
		super();
		this.nuevaContrasenia = nuevaContrasenia;
	}
	
}
