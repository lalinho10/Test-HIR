package mx.com.dti.os.service.persistence.dao.configuracion;

import javax.persistence.EntityManager;

import mx.com.dti.os.service.persistence.dao.generico.GenericDAO;
import mx.com.dti.os.service.persistence.entity.configuracion.TblFacRol;

public class TblFacRolDAOimpl extends GenericDAO<TblFacRol, Integer> implements TblFacRolDAO {
	
	public TblFacRolDAOimpl(EntityManager em){
		super(TblFacRol.class);
		super.em = em;
	}

}
