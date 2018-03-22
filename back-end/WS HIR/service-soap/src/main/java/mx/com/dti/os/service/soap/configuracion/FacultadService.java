package mx.com.dti.os.service.soap.configuracion;

import static javax.jws.WebParam.Mode.IN;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatFacultadRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacRolRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacultadesResponseVO;

@WebService(targetNamespace="http://facultades.configuracion.soap.service.os.dti.com.mx")
public interface FacultadService {

	@WebMethod(operationName = "ConsultarCatalogoFacultades")
	@WebResult(
			name = "CatalogoFacultadesResponse", 
			targetNamespace="http://facultades.configuracion.soap.service.os.dti.com.mx")
	public FacultadesResponseVO obtenerCatalogoFacultades() throws ServiceException;
	
	@WebMethod(operationName = "GuardarFacultad")
	@WebResult(
			name = "GuardarFacultadResponse", 
			targetNamespace="http://facultades.configuracion.soap.service.os.dti.com.mx")
	public ResponseTxVO guardarFacultad(@WebParam(
			name = "GuardarFacultadRequest",
			targetNamespace="http://facultades.configuracion.soap.service.os.dti.com.mx", 
			mode = IN)
			@XmlElement(required = true)CatFacultadRequestVO request) throws ServiceException;
	
	@WebMethod(operationName = "ConsultarFacultadesRol")
	@WebResult(
			name = "ConsultarFacultadesRolResponse", 
			targetNamespace="http://facultades.configuracion.soap.service.os.dti.com.mx")
	public FacultadesResponseVO obtenerRolesFacultades(@WebParam(
			name = "ConsultarFacultadesRolRequest",
			targetNamespace="http://facultades.configuracion.soap.service.os.dti.com.mx", 
			mode = IN)
			@XmlElement(required = true)FacRolRequestVO vo) throws ServiceException;
}
