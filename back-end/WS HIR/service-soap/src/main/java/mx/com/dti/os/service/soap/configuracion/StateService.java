package mx.com.dti.os.service.soap.configuracion;

import static javax.jws.WebParam.Mode.IN;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateResponseVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateVO;

@WebService(targetNamespace="http://states.configuracion.soap.service.os.dti.com.mx")
public interface StateService {

	@WebMethod(operationName = "ConsultarCatalogoStates")
	@WebResult(
			name = "CatalogoStatesResponse", 
			targetNamespace="http://states.configuracion.soap.service.os.dti.com.mx")
	public CatStateResponseVO obtenerCatalogoStates() throws ServiceException;
	
	@WebMethod(operationName = "GuardarState")
	@WebResult(
			name = "GuardarStateResponse", 
			targetNamespace="http://states.configuracion.soap.service.os.dti.com.mx")
	public ResponseTxVO guardarState(@WebParam(
			name = "GuardarStateRequest",
			targetNamespace="http://states.configuracion.soap.service.os.dti.com.mx", 
			mode = IN)
			@XmlElement(required = true)CatStateVO request) throws ServiceException;
}
