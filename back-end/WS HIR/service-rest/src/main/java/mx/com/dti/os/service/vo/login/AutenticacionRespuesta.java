/**
 * 
 */
package mx.com.dti.os.service.vo.login;

import java.math.BigInteger;
import java.util.List;

import mx.com.dti.os.service.vo.configuracion.modulos.RolRequestVO;
import mx.com.dti.os.service.vo.configuracion.modulos.ServicioRequestVO;

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

	private BigInteger idCodigo;
	private String nombreUsuario;
	private List<RolRequestVO> roles;
	private List<ServicioRequestVO> servicios;
	
	/**
	 * @return the idCodigo
	 */
	public BigInteger getIdCodigo() {
		return idCodigo;
	}
	/**
	 * @param idCodigo the idCodigo to set
	 */
	public void setIdCodigo(BigInteger idCodigo) {
		this.idCodigo = idCodigo;
	}
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
	/**
	 * @return the roles
	 */
	public List<RolRequestVO> getRoles() {
		return roles;
	}
	/**
	 * @param roles the roles to set
	 */
	public void setRoles(List<RolRequestVO> roles) {
		this.roles = roles;
	}
	/**
	 * @return the servicios
	 */
	public List<ServicioRequestVO> getServicios() {
		return servicios;
	}
	/**
	 * @param servicios the servicios to set
	 */
	public void setServicios(List<ServicioRequestVO> servicios) {
		this.servicios = servicios;
	}
	
	/**
	 * @param idCodigo
	 * @param nombreUsuario
	 * @param roles
	 * @param servicios
	 */
	public AutenticacionRespuesta(BigInteger idCodigo, String nombreUsuario, List<RolRequestVO> roles,
			List<ServicioRequestVO> servicios) {
		super();
		this.idCodigo = idCodigo;
		this.nombreUsuario = nombreUsuario;
		this.roles = roles;
		this.servicios = servicios;
	}
	
}
