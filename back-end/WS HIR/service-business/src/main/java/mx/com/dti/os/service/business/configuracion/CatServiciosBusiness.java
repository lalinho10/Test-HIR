package mx.com.dti.os.service.business.configuracion;

import javax.persistence.PersistenceException;

import mx.com.dti.os.service.common.vo.configuracion.ServiciosResponseVO;

public interface CatServiciosBusiness {

	public ServiciosResponseVO obtenerCatalogoServicios() throws PersistenceException;
	
}
