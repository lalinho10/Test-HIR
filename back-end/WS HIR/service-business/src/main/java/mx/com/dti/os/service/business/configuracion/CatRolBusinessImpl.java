package mx.com.dti.os.service.business.configuracion;

import java.util.List;

import javax.annotation.Resource;
import javax.ejb.Local;
import javax.ejb.SessionContext;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;

import mx.com.dti.os.service.business.converter.configuracion.FacultadConverter;
import mx.com.dti.os.service.business.converter.configuracion.RolesConverter;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatFacultadRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.CatRolVO;
import mx.com.dti.os.service.common.vo.configuracion.RolesResponseVO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatRolDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatRolDAOImpl;
import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatFacultad;
import mx.com.dti.os.service.persistence.entity.configuracion.CatRol;

@Stateless
@Local
public class CatRolBusinessImpl implements CatRolBusiness {
	
	@PersistenceContext(unitName="eservicesEM")
	public EntityManager em;
	
	@Resource
	public SessionContext sessionContext;
	
	public CatRolDAO catRolDAO;
	
	
	private void inicializaDAO(){
		this.catRolDAO = new CatRolDAOImpl(em);
	}

	@Override
	public RolesResponseVO obtenerCatalogoRoles() throws PersistenceException {
		RolesResponseVO respuesta = null;
		try{
			inicializaDAO();
			CriterioGenerico<String> criterioEstatus = new CriterioGenerico<String>("estatus", "", "=", "A", String.class);
			List<CatRol> listaRoles = catRolDAO.buscarPorCriterio(criterioEstatus);
			respuesta = RolesConverter.toResponseCatRoles(listaRoles);
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return respuesta;
	}
	
	@Override
	public ResponseTxVO mergeCatRol(CatRolVO rol) throws PersistenceException {
		ResponseTxVO outRespuesta = new ResponseTxVO();
		try{
			inicializaDAO();
			CatRol rolInsertar = RolesConverter.toRequestCatRol(rol);
			rolInsertar = catRolDAO.guardarActualizar(rolInsertar);
			if(rolInsertar.getIdRol() != 0){
				outRespuesta = RolesConverter.toResponseCatRol();
			}
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return outRespuesta;
	}

}
