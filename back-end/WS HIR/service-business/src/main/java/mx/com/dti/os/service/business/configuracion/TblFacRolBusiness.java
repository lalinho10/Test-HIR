package mx.com.dti.os.service.business.configuracion;

import javax.persistence.PersistenceException;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.ConfigRolFacRequestVO;

public interface TblFacRolBusiness {

	public ResponseTxVO guardarActualizarRolFac(ConfigRolFacRequestVO request) throws PersistenceException;
	
}
