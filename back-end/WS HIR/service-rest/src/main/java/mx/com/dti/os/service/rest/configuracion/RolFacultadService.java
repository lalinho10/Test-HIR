package mx.com.dti.os.service.rest.configuracion;

import java.net.URL;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.xml.namespace.QName;
import javax.xml.ws.WebServiceException;

import mx.com.dti.os.service.common.util.comunes.RespuestaVO;
import mx.com.dti.os.service.soap.configuracion.rolfac.RolFacServiceWS;
import mx.com.dti.os.service.soap.configuracion.rolfac.ServiceException_Exception;
import mx.com.dti.os.service.vo.configuracion.rolfac.ConfigRolFacRequestVO;

@ApplicationScoped
public class RolFacultadService {

	private RolFacServiceWS port;
	
	@PostConstruct
	private void init()throws WebServiceException{
		try{
			URL url = new URL("http://localhost:8080/service-soap-hir/RolFacServiceWS?wsdl");
			QName qName = new QName("http://rolfac.configuracion.soap.service.os.dti.com.mx", "RolFacServiceWS");
			port = new RolFacServiceWS(url,qName);
		}catch(Exception e){
			throw new WebServiceException();
		}
	}
	
	private RolFacServiceWS getInstanceRolFacService() throws WebServiceException{
		if(port == null){
			this.init();
		}
		return port;
	}
	
	public RespuestaVO insertaRolFacultad(ConfigRolFacRequestVO request){
		RespuestaVO respuesta = null;
		try {
			respuesta = this.getInstanceRolFacService().getRolFacServiceImplPort().guardarRelacionFacRol(request);
		} catch (WebServiceException e) {
			e.printStackTrace();
		} catch (ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
}
