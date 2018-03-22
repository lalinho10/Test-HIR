package mx.com.dti.os.service.persistence.dao.configuracion;

import java.util.List;

import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatModulo;

public interface CatModuloDAO {
	
	public List<CatModulo> buscarPorCriterio(CriterioGenerico<?>...criterion);
	public CatModulo guardar(CatModulo modulo);
	public void borrar(CatModulo modulo);
	public CatModulo buscarPorId(Integer id, boolean lock);
	public CatModulo guardarActualizar(CatModulo modulo);

}
