package mx.com.dti.os.service.business.configuracion;

import javax.persistence.PersistenceException;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatRolVO;
import mx.com.dti.os.service.common.vo.configuracion.RolesResponseVO;

public interface CatRolBusiness {
	
	public RolesResponseVO obtenerCatalogoRoles() throws PersistenceException; 
	
	public ResponseTxVO mergeCatRol(CatRolVO rol);

}
