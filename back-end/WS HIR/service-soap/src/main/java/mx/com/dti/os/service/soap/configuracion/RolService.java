package mx.com.dti.os.service.soap.configuracion;

import static javax.jws.WebParam.Mode.IN;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatRolVO;
import mx.com.dti.os.service.common.vo.configuracion.RolesResponseVO;

@WebService(targetNamespace="http://roles.configuracion.soap.service.os.dti.com.mx")
public interface RolService {
	
	@WebMethod(operationName = "ConsultarCatalogoRoles")
	@WebResult(
			name = "CatalogoRolesResponse", 
			targetNamespace="http://roles.configuracion.soap.service.os.dti.com.mx")
	public RolesResponseVO obtenerCatalogoRoles() throws ServiceException;
	
	@WebMethod(operationName = "GuardarRol")
	@WebResult(
			name = "GuardarRolResponse", 
			targetNamespace="http://roles.configuracion.soap.service.os.dti.com.mx")
	public ResponseTxVO guardarRol(@WebParam(
			name = "GuardarRolRequest",
			targetNamespace="http://roles.configuracion.soap.service.os.dti.com.mx", 
			mode = IN)
			@XmlElement(required = true)CatRolVO request) throws ServiceException;
}
