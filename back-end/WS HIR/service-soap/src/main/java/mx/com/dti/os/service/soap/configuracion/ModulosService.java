package mx.com.dti.os.service.soap.configuracion;

import static javax.jws.WebParam.Mode.IN;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.common.vo.configuracion.ConfigRolFacRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacRolRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModuloRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModulosResponseVO;

@WebService(targetNamespace="http://modulos.configuracion.soap.service.os.dti.com.mx")
public interface ModulosService {
	
	@WebMethod(operationName = "ConsultarCatalogoModulos")
	@WebResult(
			name = "CatalogoModulosResponse", 
			targetNamespace="http://modulos.configuracion.soap.service.os.dti.com.mx")
	public ModulosResponseVO obtenerCatalogoModulos() throws ServiceException;
	
	@WebMethod(operationName = "GuardaModulo")
	@WebResult(
			name = "GuardarModuloResponse", 
			targetNamespace="http://modulos.configuracion.soap.service.os.dti.com.mx")
	public ModulosResponseVO guardarModulo(@WebParam(
			name = "GuardarModuloRequest",
			targetNamespace="http://modulos.configuracion.soap.service.os.dti.com.mx", 
			mode = IN)
			@XmlElement(required = true)ModuloRequestVO request) throws ServiceException;
	
	@WebMethod(operationName = "ObtenerMenu")
	@WebResult(
			name = "ObtenerMenuResponse", 
			targetNamespace="http://modulos.configuracion.soap.service.os.dti.com.mx")
	public ModulosResponseVO obtenerMenu(@WebParam(
			name = "ObtenerMenuRequest",
			targetNamespace="http://modulos.configuracion.soap.service.os.dti.com.mx", 
			mode = IN)
			@XmlElement(required = true)FacRolRequestVO vo) throws ServiceException;

}
