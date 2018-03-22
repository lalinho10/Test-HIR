package mx.com.dti.os.service.persistence.dao.configuracion;

import javax.persistence.EntityManager;

import mx.com.dti.os.service.persistence.dao.generico.GenericDAO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatRol;

public class CatRolDAOImpl extends GenericDAO<CatRol, Integer>implements CatRolDAO {

	public CatRolDAOImpl(EntityManager em){
		super(CatRol.class);
		super.em = em;
	}
}
