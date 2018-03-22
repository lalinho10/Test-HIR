package mx.com.dti.os.service.common.util;
import java.util.Date;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlRootElement(name="ResponseTxVO")
@XmlType(
		propOrder={"estatus","mensaje","fechaOperacion"}, 
		namespace="comunes.util.common.eservices.os.planetmedia.com.mx"
		)
@XmlAccessorType(XmlAccessType.FIELD)
public class ResponseTxVO{

	@XmlElement(name = "estatus")
	private Boolean estatus;
	@XmlElement(name = "mensaje")
	private String mensaje;
	@XmlElement(name = "fechaOperacion")
	private Date fechaOperacion;
	
	public ResponseTxVO() {
		super();
	}

	public Boolean getEstatus() {
		return estatus;
	}

	public void setEstatus(Boolean estatus) {
		this.estatus = estatus;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public Date getFechaOperacion() {
		return fechaOperacion;
	}

	public void setFechaOperacion(Date fechaOperacion) {
		this.fechaOperacion = fechaOperacion;
	}

}
