package mx.com.dti.os.service.business.configuracion;

import javax.persistence.PersistenceException;

import mx.com.dti.os.service.common.vo.configuracion.FacRolRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModuloRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModulosResponseVO;

public interface CatModuloBusiness {

	public ModulosResponseVO obtenerCatologoModulos() throws PersistenceException;
	
	public ModulosResponseVO mergeModulo(ModuloRequestVO requestModulo) throws PersistenceException;
	
	public ModulosResponseVO obtenerMenu(FacRolRequestVO vo) throws PersistenceException;
	
}
