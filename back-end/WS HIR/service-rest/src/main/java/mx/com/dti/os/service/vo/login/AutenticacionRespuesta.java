/**
 * 
 */
package mx.com.dti.os.service.vo.login;

import java.util.Date;

/**
 * @author DTI
 *
 */
public class AutenticacionRespuesta extends LoginRespuesta {

	/**
	 * 
	 */
	public AutenticacionRespuesta() {
		super();
	}

	private String nombreUsuario;
	private Date ultimoLogin;
	private String claveRol;
	private String mensaje;
	private Integer codigoRespuesta;
	
	/**
	 * @return the nombreUsuario
	 */
	public String getNombreUsuario() {
		return nombreUsuario;
	}
	/**
	 * @param nombreUsuario the nombreUsuario to set
	 */
	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	
	public Date getUltimoLogin() {
		return ultimoLogin;
	}
	public void setUltimoLogin(Date ultimoLogin) {
		this.ultimoLogin = ultimoLogin;
	}
	public String getClaveRol() {
		return claveRol;
	}
	public void setClaveRol(String claveRol) {
		this.claveRol = claveRol;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public Integer getCodigoRespuesta() {
		return codigoRespuesta;
	}
	public void setCodigoRespuesta(Integer codigoRespuesta) {
		this.codigoRespuesta = codigoRespuesta;
	}
	
}
