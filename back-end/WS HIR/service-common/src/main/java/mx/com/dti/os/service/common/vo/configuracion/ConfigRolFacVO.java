package mx.com.dti.os.service.common.vo.configuracion;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(propOrder={"idRol", "idFacultad","activo"}, 
		namespace="rolfac.configuracion.vo.common.eservices.os.planetmedia.com.mx")
public class ConfigRolFacVO {
	
	@XmlElement(name = "idRol")
	private int idRol;
	@XmlElement(name = "idFacultad")
	private int idFacultad;
	@XmlElement(name = "activo")
	
	private boolean activo;
	
	public int getIdRol() {
		return idRol;
	}
	public void setIdRol(int idRol) {
		this.idRol = idRol;
	}
	public int getIdFacultad() {
		return idFacultad;
	}
	public void setIdFacultad(int idFacultad) {
		this.idFacultad = idFacultad;
	}
	public boolean isActivo() {
		return activo;
	}
	public void setActivo(boolean activo) {
		this.activo = activo;
	}
	
}
