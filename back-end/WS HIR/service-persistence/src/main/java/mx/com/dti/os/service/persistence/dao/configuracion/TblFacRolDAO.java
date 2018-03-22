package mx.com.dti.os.service.persistence.dao.configuracion;

import java.util.Collection;
import java.util.List;

import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.TblFacRol;

public interface TblFacRolDAO {

	public TblFacRol guardar(TblFacRol entity);
	public Collection<TblFacRol> guardarTodo(Collection<TblFacRol>  entityes);
	public List<TblFacRol> buscarPorCriterio(CriterioGenerico<?>...criterion);
	public void borrarTodo(Collection<TblFacRol>  entityes);
}
