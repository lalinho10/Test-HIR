package mx.com.dti.os.service.soap.configuracion;

import javax.inject.Inject;
import javax.jws.WebService;
import javax.persistence.PersistenceException;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.business.configuracion.CatRolBusiness;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatRolVO;
import mx.com.dti.os.service.common.vo.configuracion.RolesResponseVO;

@WebService(endpointInterface = "mx.com.dti.os.service.soap.configuracion.RolService", 
serviceName = "RolServiceWS", 
targetNamespace="http://roles.configuracion.soap.service.os.dti.com.mx")
public class RolServiceImpl implements RolService {

	@Inject
	public CatRolBusiness catRolBusiness;
	
	@Override
	public RolesResponseVO obtenerCatalogoRoles() throws ServiceException {
		RolesResponseVO out = null;
		try{
			out = catRolBusiness.obtenerCatalogoRoles();
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
	public ResponseTxVO guardarRol(CatRolVO request) throws ServiceException {
		ResponseTxVO out = null;
		try{
			out = catRolBusiness.mergeCatRol(request);
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
