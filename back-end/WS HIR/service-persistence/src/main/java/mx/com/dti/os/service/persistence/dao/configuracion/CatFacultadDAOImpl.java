package mx.com.dti.os.service.persistence.dao.configuracion;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJBException;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceException;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.dao.generico.GenericDAO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatFacultad;

public class CatFacultadDAOImpl extends GenericDAO<CatFacultad, Long> implements CatFacultadDAO {

	private EntityManager em;
	
	public CatFacultadDAOImpl(EntityManager em){
		super(CatFacultad.class);
		super.em = em;
		this.em = em;
	}
	
	public List<CatFacultad> buscarPorCriterio(CriterioGenerico<?>...criterion){
	   	 List<CatFacultad> result = new ArrayList<CatFacultad>();
	   	
	   	try {
	   		CriteriaBuilder cb = em.getCriteriaBuilder();
	   		CriteriaQuery<CatFacultad> crit = cb.createQuery(getPersistentClass());  
	   		Root<CatFacultad> root = crit.from(getPersistentClass());
	   		List<Predicate> predList = new ArrayList<Predicate>();
	           for (CriterioGenerico<?> c : criterion) {
	           	Predicate predicate = null;
	           	predicate = c.toPredicate(cb, root);
	           	if(c.getOperadorCondicion().equals("and")){
	           		predicate = cb.and(predicate);
	           	}
	           	else if(c.getOperadorCondicion().equals("or")){
	           		predicate = cb.or(predicate);
	           	}
	           	predList.add(predicate);  
	           }
	           Predicate[] predArray = new Predicate[predList.size()];
	           predList.toArray(predArray);
	           crit.where(predArray);
	           crit.orderBy(cb.asc(root.get("idFacPadre")));
	           Query consulta = em.createQuery(crit);
	           result = consulta.getResultList();
			} catch (PersistenceException e) {
				throw (EJBException) new EJBException(e).initCause(e);
			}
	       return result;  
	}  

}
