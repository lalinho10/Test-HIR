package mx.com.dti.os.service.persistence.dao.configuracion;

import java.util.Collection;
import java.util.List;

import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.TblModuloRegla;

public interface ModuloReglaDAO {
	
	public Collection<TblModuloRegla> guardarTodo(Collection<TblModuloRegla>  entityes);
	
	public void borrarTodo(Collection<TblModuloRegla>  entityes);
	
	public List<TblModuloRegla> buscarPorCriterio(CriterioGenerico<?>...criterion);

}
