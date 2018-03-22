package mx.com.dti.os.service.business.configuracion;

import java.util.List;

import javax.annotation.Resource;
import javax.ejb.Local;
import javax.ejb.SessionContext;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;

import mx.com.dti.os.service.business.converter.configuracion.RolFacultadConverter;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.ConfigRolFacRequestVO;
import mx.com.dti.os.service.persistence.dao.configuracion.TblFacRolDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.TblFacRolDAOimpl;
import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.TblFacRol;

@Stateless
@Local
public class TblFacRolBusinessImpl implements TblFacRolBusiness {
	
	@PersistenceContext(unitName="eservicesEM")
	public EntityManager em;
	
	@Resource
    private SessionContext sessionContext;
	
	public TblFacRolDAO tblFacRolDAO;
	
	private void incializaDAO(){
		this.tblFacRolDAO = new TblFacRolDAOimpl(this.em); 
	}

	@Override
	public ResponseTxVO guardarActualizarRolFac(ConfigRolFacRequestVO request) throws PersistenceException {
		ResponseTxVO respuesta = null;
		List<TblFacRol> facsRoles = null;
		try{
			incializaDAO();
			int idRol = request.getRolesFacultades().get(0).getIdRol();
			CriterioGenerico<Integer> criterioRol = new CriterioGenerico<Integer>("catRol", "", "=", idRol, Integer.class);
			List<TblFacRol> listaFacsRolBorrar = tblFacRolDAO.buscarPorCriterio(criterioRol);
			tblFacRolDAO.borrarTodo(listaFacsRolBorrar);
			
			facsRoles = RolFacultadConverter.toRequestInsUpdFacRol(request.getRolesFacultades());
			facsRoles = (List<TblFacRol>) tblFacRolDAO.guardarTodo(facsRoles);
			//throw new PersistenceException("erorr provocado ");
			respuesta = RolFacultadConverter.toResponseInsUpd();
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return respuesta;
	}

}
