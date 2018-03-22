package mx.com.dti.os.service.soap.configuracion;

import javax.inject.Inject;
import javax.jws.WebService;
import javax.persistence.PersistenceException;
import javax.xml.rpc.ServiceException;

import mx.com.dti.os.service.business.configuracion.CatModuloBusiness;
import mx.com.dti.os.service.common.vo.configuracion.FacRolRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModuloRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModulosResponseVO;

@WebService(endpointInterface = "mx.com.dti.os.service.soap.configuracion.ModulosService", 
serviceName = "ModulosServiceWS", 
targetNamespace="http://modulos.configuracion.soap.service.os.dti.com.mx")
public class ModulosServiceImpl implements ModulosService {
	
	@Inject
	public CatModuloBusiness catModuloBusiness;

	@Override
	public ModulosResponseVO obtenerCatalogoModulos() throws ServiceException {
		ModulosResponseVO out = null;
		try{
			out = catModuloBusiness.obtenerCatologoModulos();
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
	public ModulosResponseVO guardarModulo(ModuloRequestVO request) throws ServiceException {
		ModulosResponseVO out = null;
		try{
			out = catModuloBusiness.mergeModulo(request);
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
	public ModulosResponseVO obtenerMenu(FacRolRequestVO vo) throws ServiceException {
		ModulosResponseVO out = null;
		try{
			out = catModuloBusiness.obtenerMenu(vo);
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
