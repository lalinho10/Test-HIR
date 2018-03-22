package mx.com.dti.os.service.business.configuracion;

import java.util.List;

import javax.annotation.Resource;
import javax.ejb.Local;
import javax.ejb.SessionContext;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;

import mx.com.dti.os.service.business.converter.configuracion.StatesConverter;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateResponseVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateVO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatStateDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatStateDAOImpl;
import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatState;

@Stateless
@Local
public class CatStateBusinessImpl implements CatStateBusiness {

	@PersistenceContext(unitName="eservicesEM")
	public EntityManager em;
	
	@Resource
	public SessionContext sessionContext;
	
	public CatStateDAO catStateDAO;
	
	private void inicializaDAO(){
		this.catStateDAO = new CatStateDAOImpl(em);
	}
	
	@Override
	public CatStateResponseVO obtenerCatalogoStates() {
		CatStateResponseVO respuesta = null;
		try{
			inicializaDAO();
			CriterioGenerico<Boolean> criterioEstatus = new CriterioGenerico<Boolean>("estatus", "", "=", Boolean.TRUE, Boolean.class);
			List<CatState> listaStates = catStateDAO.buscarPorCriterio(criterioEstatus);
			respuesta = StatesConverter.toResponseCatalogo(listaStates);
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return respuesta;
	}

	@Override
	public ResponseTxVO guardarState(CatStateVO request) {
		ResponseTxVO respuesta = null;
		try{
			inicializaDAO();
			CatState state = StatesConverter.toCatState(request);
			state = catStateDAO.guardarActualizar(state);
			if(state.getIdState() != 0) {
				respuesta = StatesConverter.toResponseState();
			}
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return respuesta;
	}

}
