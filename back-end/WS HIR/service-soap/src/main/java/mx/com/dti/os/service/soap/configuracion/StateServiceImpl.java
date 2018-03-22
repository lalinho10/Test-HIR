package mx.com.dti.os.service.soap.configuracion;

import javax.inject.Inject;
import javax.jws.WebService;
import javax.persistence.PersistenceException;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.business.configuracion.CatServiciosBusiness;
import mx.com.dti.os.service.business.configuracion.CatStateBusiness;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateResponseVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateVO;
import mx.com.dti.os.service.common.vo.configuracion.ServiciosResponseVO;

@WebService(endpointInterface = "mx.com.dti.os.service.soap.configuracion.StateService", 
serviceName = "StateServiceWS", 
targetNamespace="http://states.configuracion.soap.service.os.dti.com.mx")
public class StateServiceImpl implements StateService {
	
	@Inject
	public CatStateBusiness catStateBusiness;

	@Override
	public CatStateResponseVO obtenerCatalogoStates() throws ServiceException {
		CatStateResponseVO out = null;
		try{
			out = catStateBusiness.obtenerCatalogoStates();
		}
		catch(PersistenceException e){
			throw new ServiceException(e.getMessage());
		}catch(Exception e){
			e.printStackTrace();
			throw new ServiceException(e.getMessage());
		}
		return out;
	}

	@Override
	public ResponseTxVO guardarState(CatStateVO request) throws ServiceException {
		ResponseTxVO out = null;
		try{
			out = catStateBusiness.guardarState(request);
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
