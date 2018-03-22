package mx.com.dti.os.service.persistence.dao.configuracion;

import java.util.List;

import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatRol;

public interface CatRolDAO {

	public List<CatRol> buscarPorCriterio(CriterioGenerico<?>...criterion);
	
	public CatRol guardarActualizar(CatRol rol);
	
}
