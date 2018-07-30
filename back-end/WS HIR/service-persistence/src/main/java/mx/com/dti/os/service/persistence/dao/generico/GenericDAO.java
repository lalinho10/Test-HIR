/**
 * 
 */
package mx.com.dti.os.service.persistence.dao.generico;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.ejb.EJBException;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.LockModeType;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceContextType;
import javax.persistence.PersistenceException;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

/**
 * @author DTI
 *
 */
public class GenericDAO<T, ID extends Serializable> {

	@PersistenceContext(unitName="eservicesEM", type = PersistenceContextType.EXTENDED)
	public EntityManager em;
	
    protected Class<T> entityClass;
    

    public GenericDAO() {  
    	
     }
    
    public GenericDAO(Class<T> entityClass) {
        this.entityClass = entityClass;
    }
    
    public Class<T> getPersistentClass() {  
        return entityClass;  
    } 

	public T guardar(T entity){  
    	try {
    		em.persist(entity);
		} catch (PersistenceException e) {
			throw (EJBException) new EJBException(e).initCause(e);
		}		
        return entity;  
    }  
    
    public T guardarActualizar(T entity){  
    	try {
    		entity = em.merge(entity); 
		} catch (PersistenceException e) {
			e.printStackTrace();
			throw (EJBException) new EJBException(e).initCause(e);
		}		
        return entity;  
    }  
    
    public Collection<T> guardarTodo(Collection<T>  entityes){  
    	try {
    		for (T entity : entityes) {
    			em.merge(entity);
			}
		} catch (PersistenceException e) {
			throw (EJBException) new EJBException(e).initCause(e);
		}		
        return entityes;  
    }
  
    public void borrar(T entity){  
    	try {
			em.remove(entity);
		} catch (PersistenceException e) {
			throw (EJBException) new EJBException(e).initCause(e);
		}
         
    }  
    
    public void borrarTodo(Collection<T>  entityes){ 
    	try {
    		for (T entity : entityes) {
    			em.remove(entity);	
			}
		} catch (PersistenceException e) {
			throw (EJBException) new EJBException(e).initCause(e);
		}         
    }  
  
    public void flush() {  
        em.flush();  
    }  
  
    public void limpiar() {  
		em.clear();  
    }     
    
    @SuppressWarnings({ "deprecation", "unchecked" })
	public T buscarPorId(ID id, boolean lock){  
        T entity = null;  
        try {
			if (lock) {
				entity = (T) em.find(getPersistentClass(), id,
						LockModeType.PESSIMISTIC_WRITE);
			} else {
				entity = (T) em.find(getPersistentClass(), id);

			}
		} catch (PersistenceException e) {
			throw (EJBException) new EJBException(e).initCause(e);
		}
		return entity;  
    } 

    public List<T> obtenerTodos() throws Exception {    
    	return buscarPorCriterio(); 
    }

    
    @SuppressWarnings("unchecked")
	public List<T> buscarPorCriterio(CriterioGenerico<?>...criterion){ 
    	
    	 List<T> result = new ArrayList<T>();
    	
    	try {
    		CriteriaBuilder cb = em.getCriteriaBuilder();
    		CriteriaQuery<T> crit = cb.createQuery(getPersistentClass());  
    		Root<T> root = crit.from(getPersistentClass());
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
            Query consulta = em.createQuery(crit);
            result = consulta.getResultList();
		} catch (PersistenceException e) {
			throw (EJBException) new EJBException(e).initCause(e);
		}
        return result;  
   }  
    
    @SuppressWarnings("unchecked")
	public T buscarPorCampo(String nombreCampo, Object parametro){ 
    	
    	 T result = null;
    	
    	try {
    		CriteriaBuilder cb = em.getCriteriaBuilder();
    		CriteriaQuery<T> crit = cb.createQuery(getPersistentClass());  
    		Root<T> root = crit.from(getPersistentClass());
    		Predicate condicion = cb.equal(root.get(nombreCampo), parametro);
            crit.where(condicion);
            Query consulta = em.createQuery(crit);
            result = (T)consulta.getSingleResult();
		} catch (PersistenceException e) {
			throw (EJBException) new EJBException(e);
		}
        return result;  
   }  
}
