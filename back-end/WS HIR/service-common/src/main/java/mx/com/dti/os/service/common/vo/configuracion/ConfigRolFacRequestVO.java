package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name="RolesFacultadesResponse")
@XmlType(
		propOrder={"rolesFacultades"}, 
		namespace="rolfac.configuracion.vo.common.eservices.os.planetmedia.com.mx"
		)
@XmlAccessorType(XmlAccessType.FIELD)
public class ConfigRolFacRequestVO {
	
	@XmlElement(name = "rolesFacultades")
	private List<ConfigRolFacVO> rolesFacultades;

	public List<ConfigRolFacVO> getRolesFacultades() {
		return rolesFacultades;
	}

	public void setRolesFacultades(List<ConfigRolFacVO> rolesFacultades) {
		this.rolesFacultades = rolesFacultades;
	}
}
