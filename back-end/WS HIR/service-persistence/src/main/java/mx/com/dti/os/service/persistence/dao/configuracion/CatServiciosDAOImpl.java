package mx.com.dti.os.service.persistence.dao.configuracion;

import javax.persistence.EntityManager;

import mx.com.dti.os.service.persistence.dao.generico.GenericDAO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatServicios;


public class CatServiciosDAOImpl extends GenericDAO<CatServicios, Integer> implements CatServiciosDAO {

	public CatServiciosDAOImpl(EntityManager em){
		super(CatServicios.class);
		super.em = em;
	}

}
