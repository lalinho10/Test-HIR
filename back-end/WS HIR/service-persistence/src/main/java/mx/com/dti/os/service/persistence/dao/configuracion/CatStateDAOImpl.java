package mx.com.dti.os.service.persistence.dao.configuracion;

import javax.persistence.EntityManager;

import mx.com.dti.os.service.persistence.dao.generico.GenericDAO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatState;

public class CatStateDAOImpl extends GenericDAO<CatState, Integer> implements CatStateDAO {

	public CatStateDAOImpl(EntityManager em){
		super(CatState.class);
		super.em = em;
	}

}
