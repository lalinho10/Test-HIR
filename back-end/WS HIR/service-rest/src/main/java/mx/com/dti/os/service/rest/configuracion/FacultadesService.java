package mx.com.dti.os.service.rest.configuracion;

import java.net.URL;

import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.xml.namespace.QName;
import javax.xml.ws.WebServiceException;

import mx.com.dti.os.service.common.util.comunes.RespuestaVO;
import mx.com.dti.os.service.common.util.comunes.WsdlLocationConstant;
import mx.com.dti.os.service.soap.configuracion.facultades.CatFacultadRequestVO;
import mx.com.dti.os.service.soap.configuracion.facultades.FacRolRequestVO;
import mx.com.dti.os.service.soap.configuracion.facultades.FacultadServiceWS;
import mx.com.dti.os.service.soap.configuracion.facultades.ServiceException_Exception;
import mx.com.dti.os.service.vo.configuracion.facultades.FacultadesResponseVO;

@ApplicationScoped
public class FacultadesService {

	private FacultadServiceWS port;
	@Inject
	private WsdlLocationConstant wsdlLocation;
	
	@PostConstruct
	private void init()throws WebServiceException{
		try{
			//URL url = new URL("http://localhost:8080/service-soap/FacultadServiceWS?wsdl");
			URL url = new URL("http://localhost:8080/service-soap-hir/FacultadServiceWS?wsdl");
			QName qName = new QName("http://facultades.configuracion.soap.service.os.dti.com.mx", "FacultadServiceWS");
			port = new FacultadServiceWS(url,qName);
		}catch(Exception e){
			throw new WebServiceException();
		}
	}
	
	private FacultadServiceWS getInstanceFacultadService() throws WebServiceException{
		if(port == null){
			this.init();
		}
		return port;
	}
	
	public FacultadesResponseVO recuperaCatalogoFacultades(){
		FacultadesResponseVO respuesta = null;
		try {
			respuesta = this.getInstanceFacultadService().getFacultadServiceImplPort().consultarCatalogoFacultades();
		} catch (WebServiceException | ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
	public RespuestaVO guardaFacultad(CatFacultadRequestVO facultad){
		RespuestaVO respuesta = null;
		try {
			respuesta = this.getInstanceFacultadService().getFacultadServiceImplPort().guardarFacultad(facultad);
		} catch (WebServiceException | ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
	public FacultadesResponseVO obtenerConfiguracionRol(FacRolRequestVO vo){
		FacultadesResponseVO respuesta = null;
		try {
			respuesta = this.getInstanceFacultadService().getFacultadServiceImplPort().consultarFacultadesRol(vo);
		} catch (WebServiceException | ServiceException_Exception e) {
			e.printStackTrace();
		}
		return respuesta;
	}
	
}
