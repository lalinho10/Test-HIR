package mx.com.dti.os.service.rest.configuracion;

import java.net.URL;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.xml.namespace.QName;
import javax.xml.ws.WebServiceException;

import mx.com.dti.os.service.soap.configuracion.states.CatStateResponseVO;
import mx.com.dti.os.service.soap.configuracion.states.ServiceException_Exception;
import mx.com.dti.os.service.soap.configuracion.states.StateServiceWS;

@ApplicationScoped
public class StatesService {
	
	private StateServiceWS port;
	
	@PostConstruct
	private void init()throws WebServiceException{
		try{
			URL url = new URL("http://localhost:8080/service-soap-hir/StateServiceWS?wsdl");
			QName qName = new QName("http://states.configuracion.soap.service.os.dti.com.mx", "StateServiceWS");
			port = new StateServiceWS(url,qName);
		}catch(Exception e){
			throw new WebServiceException();
		}
	}
	
	private StateServiceWS getInstanceStatesService() throws WebServiceException{
		if(port == null){
			this.init();
		}
		return port;
	}
	
	public CatStateResponseVO recuperaCatalogoStates(){
		CatStateResponseVO respuesta = null;
		try {
			respuesta = this.getInstanceStatesService().getStateServiceImplPort().consultarCatalogoStates();
		} catch (WebServiceException | ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}

}
