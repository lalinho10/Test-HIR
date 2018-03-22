package mx.com.dti.os.service.business.configuracion;

import java.util.List;

import javax.annotation.Resource;
import javax.ejb.Local;
import javax.ejb.SessionContext;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;

import mx.com.dti.os.service.business.converter.configuracion.ServiciosConverter;
import mx.com.dti.os.service.common.vo.configuracion.ServiciosResponseVO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatServiciosDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatServiciosDAOImpl;
import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatServicios;

@Stateless
@Local
public class CatServiciosBusinessImpl implements CatServiciosBusiness {
	
	@PersistenceContext(unitName="eservicesEM")
	public EntityManager em;
	
	@Resource
	public SessionContext sessionContext;
	
	public CatServiciosDAO catServiciosDAO;
	
	private void inicializaDAO(){
		this.catServiciosDAO = new CatServiciosDAOImpl(em);
	}

	@Override
	public ServiciosResponseVO obtenerCatalogoServicios() throws PersistenceException {
		ServiciosResponseVO respuesta = null;
		try{
			inicializaDAO();
			CriterioGenerico<Boolean> criterioEstatus = new CriterioGenerico<Boolean>("estatus", "", "=", Boolean.TRUE, Boolean.class);
			List<CatServicios> listaServvicios = catServiciosDAO.buscarPorCriterio(criterioEstatus);
			respuesta = ServiciosConverter.toResponseCatalogoServicios(listaServvicios);
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return respuesta;
	}

}
