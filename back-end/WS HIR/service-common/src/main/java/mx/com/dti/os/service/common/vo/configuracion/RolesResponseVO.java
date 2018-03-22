package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name="RolesResponse")
@XmlType(
		propOrder={"mensaje","roles"}, 
		namespace="roles.configuracion.vo.common.eservices.os.planetmedia.com.mx"
		)
@XmlAccessorType(XmlAccessType.FIELD)
public class RolesResponseVO {

	@XmlElement(name = "mensaje")
	private String mensaje;
	@XmlElement(name = "roles")
	private List<CatRolVO> roles;
	
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public List<CatRolVO> getRoles() {
		return roles;
	}
	public void setRoles(List<CatRolVO> roles) {
		this.roles = roles;
	}
}
