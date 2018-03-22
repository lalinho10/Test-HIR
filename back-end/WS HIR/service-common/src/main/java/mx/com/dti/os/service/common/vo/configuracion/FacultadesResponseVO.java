package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name="FacultadesResponse")
@XmlType(
		propOrder={"mensaje","facultades"}, 
		namespace="facultades.configuracion.vo.common.eservices.os.planetmedia.com.mx"
		)
@XmlAccessorType(XmlAccessType.FIELD)
public class FacultadesResponseVO {
	
	@XmlElement(name = "mensaje")
	private String mensaje;
	@XmlElement(name = "facultades")
	private List<FacultadesVO> facultades;
	
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public List<FacultadesVO> getFacultades() {
		return facultades;
	}
	public void setFacultades(List<FacultadesVO> facultades) {
		this.facultades = facultades;
	}
}
