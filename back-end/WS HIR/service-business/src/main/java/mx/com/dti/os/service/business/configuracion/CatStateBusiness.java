package mx.com.dti.os.service.business.configuracion;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateResponseVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateVO;

public interface CatStateBusiness {

	public CatStateResponseVO obtenerCatalogoStates();
	public ResponseTxVO guardarState(CatStateVO request);
	
}
