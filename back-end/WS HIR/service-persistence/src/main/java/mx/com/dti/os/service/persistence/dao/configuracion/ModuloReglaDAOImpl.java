package mx.com.dti.os.service.persistence.dao.configuracion;

import javax.persistence.EntityManager;

import mx.com.dti.os.service.persistence.dao.generico.GenericDAO;
import mx.com.dti.os.service.persistence.entity.configuracion.TblModuloRegla;

public class ModuloReglaDAOImpl extends GenericDAO<TblModuloRegla, Integer> implements ModuloReglaDAO {
	
	public ModuloReglaDAOImpl(EntityManager em){
		super(TblModuloRegla.class);
		super.em = em;
	}

}
