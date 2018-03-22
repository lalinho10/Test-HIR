/**
 * 
 */
package mx.com.dti.os.service.vo.login;

/**
 * @author DTI
 *
 */
public class RecuperaClaveVO {

	/**
	 * 
	 */
	public RecuperaClaveVO() {
		super();
	}

	private String correo;

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
	 * @param correo
	 */
	public RecuperaClaveVO(String correo) {
		super();
		this.correo = correo;
	}
	
}
