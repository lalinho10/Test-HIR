package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name="ServiciosResponse")
@XmlType(
		propOrder={"mensaje","servicios"}, 
		namespace="servicios.configuracion.vo.common.eservices.os.planetmedia.com.mx"
		)
@XmlAccessorType(XmlAccessType.FIELD)
public class ServiciosResponseVO {

	@XmlElement(name = "mensaje")
	private String mensaje;
	@XmlElement(name = "servicios")
	private List<ServicioVO> servicios;
	
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public List<ServicioVO> getServicios() {
		return servicios;
	}
	public void setServicios(List<ServicioVO> servicios) {
		this.servicios = servicios;
	}
}
