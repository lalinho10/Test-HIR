/**
 * 
 */
package mx.com.dti.os.service.vo.login;

/**
 * @author DTI
 *
 */
public class LoginDesbloqueoVO {

	/**
	 * 
	 */
	public LoginDesbloqueoVO() {
		super();
	}

	private String correo;
	private String telefonoCelular;
	
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
	 * @param correo
	 * @param telefonoCelular
	 */
	public LoginDesbloqueoVO(String correo, String telefonoCelular) {
		super();
		this.correo = correo;
		this.telefonoCelular = telefonoCelular;
	}
	
}
