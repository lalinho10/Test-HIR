package mx.com.dti.os.service.common.vo.configuracion;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(propOrder={"idRol", "descripcion","estatus"}, 
		namespace="roles.configuracion.vo.common.service.os.dti.com.mx")
public class CatRolVO {

	@XmlElement(name = "idRol")
	private Integer idRol;
	@XmlElement(name = "descripcion")
	private String descripcion;
	@XmlElement(name = "estatus")
	private String estatus;
	
	public Integer getIdRol() {
		return idRol;
	}
	public void setIdRol(Integer idRol) {
		this.idRol = idRol;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String isEstatus() {
		return estatus;
	}
	public void setEstatus(String estatus) {
		this.estatus = estatus;
	}
}
