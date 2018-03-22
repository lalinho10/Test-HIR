package mx.com.dti.os.service.persistence.dao.configuracion;

import java.util.List;

import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatServicios;

public interface CatServiciosDAO {

	public List<CatServicios> buscarPorCriterio(CriterioGenerico<?>...criterion);
	
}
