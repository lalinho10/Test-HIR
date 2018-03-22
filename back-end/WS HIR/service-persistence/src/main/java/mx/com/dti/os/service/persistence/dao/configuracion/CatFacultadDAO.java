package mx.com.dti.os.service.persistence.dao.configuracion;

import java.util.List;

import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatFacultad;

public interface CatFacultadDAO {

	public CatFacultad guardarActualizar(CatFacultad facultad);
	public List<CatFacultad> buscarPorCriterio(CriterioGenerico<?>...criterion);
	
}
