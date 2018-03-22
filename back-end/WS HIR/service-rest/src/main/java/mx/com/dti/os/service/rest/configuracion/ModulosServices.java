package mx.com.dti.os.service.rest.configuracion;

import java.net.URL;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.xml.namespace.QName;
import javax.xml.ws.WebServiceException;

import mx.com.dti.os.service.soap.configuracion.modulos.FacRolRequestVO;
import mx.com.dti.os.service.soap.configuracion.modulos.ModuloRequestVO;
import mx.com.dti.os.service.soap.configuracion.modulos.ModulosResponseVO;
import mx.com.dti.os.service.soap.configuracion.modulos.ModulosServiceWS;
import mx.com.dti.os.service.soap.configuracion.modulos.ServiceException_Exception;

@ApplicationScoped
public class ModulosServices {

	private ModulosServiceWS port;
	
	@PostConstruct
	private void init()throws WebServiceException{
		try{
			URL url = new URL("http://localhost:8080/service-soap/ModulosServiceWS?wsdl");
			QName qName = new QName("http://modulos.configuracion.soap.service.os.dti.com.mx", "ModulosServiceWS");
			port = new ModulosServiceWS(url,qName);
		}catch(Exception e){
			throw new WebServiceException();
		}
	}
	
	private ModulosServiceWS getInstanceModuloService() throws WebServiceException{
		if(port == null){
			this.init();
		}
		return port;
	}
	
	public ModulosResponseVO obtenerCatalogoModulos(){
		ModulosResponseVO respuesta = null;
		try {
			respuesta = this.getInstanceModuloService().getModulosServiceImplPort().consultarCatalogoModulos();
		} catch (WebServiceException e) {
			e.printStackTrace();
		} catch (ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
	public ModulosResponseVO insertarModulo(ModuloRequestVO requestModulo){
		ModulosResponseVO respuesta = null;
		try {
			respuesta = this.getInstanceModuloService().getModulosServiceImplPort().guardaModulo(requestModulo);
		} catch (WebServiceException e) {
			e.printStackTrace();
		} catch (ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
	public ModulosResponseVO obtenerMenu(FacRolRequestVO requestModulo){
		ModulosResponseVO respuesta = null;
		try {
			respuesta = this.getInstanceModuloService().getModulosServiceImplPort().obtenerMenu(requestModulo);
		} catch (WebServiceException e) {
			e.printStackTrace();
		} catch (ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
}
