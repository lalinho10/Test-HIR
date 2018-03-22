package mx.com.dti.os.service.vo.configuracion.modulos;

import java.util.List;

public class ObtenerMenuRequestVO {

	private List<ServicioRequestVO> servicios;
	private List<RolRequestVO> roles;
	private Integer idAplicacion;
	
	public List<ServicioRequestVO> getServicios() {
		return servicios;
	}
	public void setServicios(List<ServicioRequestVO> servicios) {
		this.servicios = servicios;
	}
	public List<RolRequestVO> getRoles() {
		return roles;
	}
	public void setRoles(List<RolRequestVO> roles) {
		this.roles = roles;
	}
	public Integer getIdAplicacion() {
		return idAplicacion;
	}
	public void setIdAplicacion(Integer idAplicacion) {
		this.idAplicacion = idAplicacion;
	}	
}