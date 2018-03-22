package mx.com.dti.os.service.persistence.dao.configuracion;

import java.util.List;

import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatState;

public interface CatStateDAO {

	public List<CatState> buscarPorCriterio(CriterioGenerico<?>...criterion);
	public CatState guardarActualizar(CatState state);
}
