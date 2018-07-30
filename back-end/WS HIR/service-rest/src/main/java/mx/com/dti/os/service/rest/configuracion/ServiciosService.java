package mx.com.dti.os.service.rest.configuracion;

import java.net.URL;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.xml.namespace.QName;
import javax.xml.ws.WebServiceException;

import mx.com.dti.os.service.soap.configuracion.servicios.ServiciosServiceWS;
import mx.com.dti.os.service.vo.configuracion.servicios.ServiciosResponseVO;

@ApplicationScoped
public class ServiciosService {

	private ServiciosServiceWS port;
	
	@PostConstruct
	private void init()throws WebServiceException{
		try{
			URL url = new URL("http://localhost:8080/service-soap-hir/ServiciosServiceWS?wsdl");
			QName qName = new QName("http://servicios.configuracion.soap.service.os.dti.com.mx", "ServiciosServiceWS");
			port = new ServiciosServiceWS(url,qName);
		}catch(Exception e){
			throw new WebServiceException();
		}
	}
	
	private ServiciosServiceWS getInstanceServiciosService() throws WebServiceException{
		if(port == null){
			this.init();
		}
		return port;
	}
	
	public ServiciosResponseVO recuperaCatalogoServicios(){
		ServiciosResponseVO respuesta = null;
		try {
			respuesta = this.getInstanceServiciosService().getServiciosServiceImplPort().consultarCatalogoServicios();
		} catch (WebServiceException | mx.com.dti.os.service.soap.configuracion.servicios.ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
}
