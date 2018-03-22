package mx.com.dti.os.service.business.configuracion;

import javax.persistence.PersistenceException;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatFacultadRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacRolRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacultadesResponseVO;

public interface CatFacultadBusiness {

	public FacultadesResponseVO obtenerCatalogoFacs() throws PersistenceException;
	
	public ResponseTxVO mergeFacultad(CatFacultadRequestVO facultad) throws PersistenceException;
	
	public FacultadesResponseVO obtenerFacultadesRol(FacRolRequestVO vo) throws PersistenceException;
	
}
