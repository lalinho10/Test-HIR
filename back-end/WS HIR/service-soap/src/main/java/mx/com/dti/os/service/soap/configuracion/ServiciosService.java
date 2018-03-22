package mx.com.dti.os.service.soap.configuracion;

import javax.jws.WebMethod;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.common.vo.configuracion.ServiciosResponseVO;

@WebService(targetNamespace="http://servicios.configuracion.soap.service.os.dti.com.mx")
public interface ServiciosService {

	
	@WebMethod(operationName = "ConsultarCatalogoServicios")
	@WebResult(
			name = "CatalogoServiciosResponse", 
			targetNamespace="http://servicios.configuracion.soap.service.os.dti.com.mx")
	public ServiciosResponseVO obtenerCatalogoServicios() throws ServiceException;
	
}
