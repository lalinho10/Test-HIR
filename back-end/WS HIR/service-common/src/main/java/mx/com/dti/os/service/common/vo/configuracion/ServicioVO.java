package mx.com.dti.os.service.common.vo.configuracion;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(propOrder={"idServicio", "descripcion","clave","servicio"}, 
		namespace="servicios.configuracion.vo.common.eservices.os.planetmedia.com.mx")
public class ServicioVO {
	
	@XmlElement(name = "idServicio")
	private int idServicio;
	@XmlElement(name = "descripcion")
	private String descripcion;
	@XmlElement(name = "clave")
	private String clave;
	@XmlElement(name = "servicio")
	private String servicio;
	
	public int getIdServicio() {
		return idServicio;
	}
	public void setIdServicio(int idServicio) {
		this.idServicio = idServicio;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public String getClave() {
		return clave;
	}
	public void setClave(String clave) {
		this.clave = clave;
	}
	public String getServicio() {
		return servicio;
	}
	public void setServicio(String servicio) {
		this.servicio = servicio;
	}
}
