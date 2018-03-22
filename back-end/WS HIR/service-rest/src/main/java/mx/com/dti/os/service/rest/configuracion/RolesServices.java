package mx.com.dti.os.service.rest.configuracion;

import java.net.URL;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.xml.namespace.QName;
import javax.xml.ws.WebServiceException;

import mx.com.dti.os.service.common.util.comunes.ResponseTxVO;
import mx.com.dti.os.service.soap.configuracion.roles.RolServiceWS;
import mx.com.dti.os.service.soap.configuracion.roles.ServiceException_Exception;
import mx.com.dti.os.service.vo.configuracion.roles.CatRolVO;
import mx.com.dti.os.service.vo.configuracion.roles.RolesResponseVO;

@ApplicationScoped
public class RolesServices {

	private RolServiceWS port;
	
	@PostConstruct
	private void init()throws WebServiceException{
		try{
			URL url = new URL("http://localhost:8080/service-soap/RolServiceWS?wsdl");
			QName qName = new QName("http://roles.configuracion.soap.service.os.dti.com.mx", "RolServiceWS");
			port = new RolServiceWS(url,qName);
		}catch(Exception e){
			throw new WebServiceException();
		}
	}
	
	private RolServiceWS getInstanceRolService() throws WebServiceException{
		if(port == null){
			this.init();
		}
		return port;
	}
	
	public RolesResponseVO obtenerCatalogoRoles(){
		RolesResponseVO respuesta = null;
		try {
			respuesta = this.getInstanceRolService().getRolServiceImplPort().consultarCatalogoRoles();
		} catch (WebServiceException e) {
			e.printStackTrace();
		} catch (mx.com.dti.os.service.soap.configuracion.roles.ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
	public ResponseTxVO guardaRol(CatRolVO rol){
		ResponseTxVO respuesta = null;
		try {
			respuesta = this.getInstanceRolService().getRolServiceImplPort().guardarRol(rol);
		} catch (WebServiceException | ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
}
