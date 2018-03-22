package mx.com.dti.os.service.soap.configuracion;

import javax.inject.Inject;
import javax.jws.WebService;
import javax.persistence.PersistenceException;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.business.configuracion.CatFacultadBusiness;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatFacultadRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacRolRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacultadesResponseVO;

@WebService(endpointInterface = "mx.com.dti.os.service.soap.configuracion.FacultadService", 
serviceName = "FacultadServiceWS", 
targetNamespace="http://facultades.configuracion.soap.service.os.dti.com.mx")
public class FacultadServiceImpl implements FacultadService {

	@Inject
	public CatFacultadBusiness catFacultadBusiness;
	
	public FacultadesResponseVO obtenerCatalogoFacultades() throws ServiceException {
		FacultadesResponseVO out = null;
		try{
			out = catFacultadBusiness.obtenerCatalogoFacs();
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
	public ResponseTxVO guardarFacultad(CatFacultadRequestVO request) throws ServiceException {
		ResponseTxVO out = null;
		try{
			out = catFacultadBusiness.mergeFacultad(request);
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
	public FacultadesResponseVO obtenerRolesFacultades(FacRolRequestVO vo) throws ServiceException {
		FacultadesResponseVO out = null;
		try{
			out = catFacultadBusiness.obtenerFacultadesRol(vo);
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
