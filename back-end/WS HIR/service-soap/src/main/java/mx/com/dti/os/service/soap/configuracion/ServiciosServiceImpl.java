package mx.com.dti.os.service.soap.configuracion;

import javax.inject.Inject;
import javax.jws.WebService;
import javax.persistence.PersistenceException;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.business.configuracion.CatServiciosBusiness;
import mx.com.dti.os.service.common.vo.configuracion.ServiciosResponseVO;

@WebService(endpointInterface = "mx.com.dti.os.service.soap.configuracion.ServiciosService", 
serviceName = "ServiciosServiceWS", 
targetNamespace="http://servicios.configuracion.soap.service.os.dti.com.mx")
public class ServiciosServiceImpl implements ServiciosService {

	@Inject
	public CatServiciosBusiness catServiciosBusiness;
	
	@Override
	public ServiciosResponseVO obtenerCatalogoServicios() throws ServiceException {
		ServiciosResponseVO out = null;
		try{
			out = catServiciosBusiness.obtenerCatalogoServicios();
		}
		catch(PersistenceException e){
			throw new ServiceException(e.getMessage());
		}catch(Exception e){
			e.printStackTrace();
			throw new ServiceException(e.getMessage());
		}
		return out;
	}

}
