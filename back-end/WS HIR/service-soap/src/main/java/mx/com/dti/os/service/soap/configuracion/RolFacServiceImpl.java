package mx.com.dti.os.service.soap.configuracion;

import javax.inject.Inject;
import javax.jws.WebService;
import javax.persistence.PersistenceException;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.business.configuracion.TblFacRolBusiness;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.ConfigRolFacRequestVO;

@WebService(endpointInterface = "mx.com.dti.os.service.soap.configuracion.RolFacService", 
serviceName = "RolFacServiceWS", 
targetNamespace="http://rolfac.configuracion.soap.service.os.dti.com.mx")
public class RolFacServiceImpl implements RolFacService {

	@Inject
	public TblFacRolBusiness tblFacRolBusiness;
	
	@Override
	public ResponseTxVO guardarFacultadRol(ConfigRolFacRequestVO request) throws ServiceException {
		ResponseTxVO out = null;
		try{
			out = tblFacRolBusiness.guardarActualizarRolFac(request);
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
