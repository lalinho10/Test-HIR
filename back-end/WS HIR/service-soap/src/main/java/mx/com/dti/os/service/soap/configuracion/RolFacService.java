package mx.com.dti.os.service.soap.configuracion;

import static javax.jws.WebParam.Mode.IN;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.ConfigRolFacRequestVO;

@WebService(targetNamespace="http://rolfac.configuracion.soap.service.os.dti.com.mx")
public interface RolFacService {
	
	@WebMethod(operationName = "GuardarRelacionFacRol")
	@WebResult(
			name = "GuardarRelacionFacRolResponse", 
			targetNamespace="http://rolfac.configuracion.soap.service.os.dti.com.mx")
	public ResponseTxVO guardarFacultadRol(@WebParam(
											name = "GuardarRelacionFacRolRequest",
											targetNamespace="http://rolfac.configuracion.service.omnisuite.com", 
											mode = IN)
											@XmlElement(required = true)ConfigRolFacRequestVO request) throws ServiceException;

}
