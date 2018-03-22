package mx.com.dti.os.service.business.configuracion;

import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

import javax.annotation.Resource;
import javax.ejb.Local;
import javax.ejb.SessionContext;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;

import mx.com.dti.os.service.business.converter.configuracion.FacultadConverter;
import mx.com.dti.os.service.common.util.Nodo;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatFacultadRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.CatRolVO;
import mx.com.dti.os.service.common.vo.configuracion.FacRolRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacultadesResponseVO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatFacultadDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatFacultadDAOImpl;
import mx.com.dti.os.service.persistence.dao.configuracion.TblFacRolDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.TblFacRolDAOimpl;
import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatFacultad;
import mx.com.dti.os.service.persistence.entity.configuracion.TblFacRol;

@Stateless
@Local
public class CatFacultadBusinessImpl implements CatFacultadBusiness {

	@PersistenceContext(unitName="eservicesEM")
	public EntityManager em;
	
	@Resource
    private SessionContext sessionContext;
	
	public CatFacultadDAO catFacultadDAO;
	public TblFacRolDAO tblFacRolDAO;
	private TreeMap<Integer, Nodo> arbol = null;
	
	private void incializaDAO(){
		this.catFacultadDAO = new CatFacultadDAOImpl(this.em); 
		this.tblFacRolDAO = new TblFacRolDAOimpl(em);
	}
	
	public FacultadesResponseVO obtenerCatalogoFacs() throws PersistenceException {
		FacultadesResponseVO outRespuesta = new FacultadesResponseVO();
		List<CatFacultad> listaFacultades = null;
		List<CatFacultad> listaFacultadesCopia = null;
		try{
			incializaDAO();
			CriterioGenerico<Boolean> criterioActivo = new CriterioGenerico<Boolean>("estatus", "", "=", Boolean.TRUE, Boolean.class);
			listaFacultades = catFacultadDAO.buscarPorCriterio(criterioActivo);
			listaFacultadesCopia = new ArrayList<>();
			for(CatFacultad facultad : listaFacultades){
				CatFacultad fac = new CatFacultad();
				fac.setDescripcion(facultad.getDescripcion());
				fac.setEstatus(facultad.getEstatus());
				fac.setFecAlta(facultad.getFecAlta());
				fac.setIdFac(facultad.getIdFac());
				fac.setIdFacPadre(facultad.getIdFacPadre());
				listaFacultadesCopia.add(fac);
			}
			Nodo nodoRaiz = generaArbolFacultades(listaFacultadesCopia);
			outRespuesta = FacultadConverter.toRepsonseFacultades(nodoRaiz);
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return outRespuesta;
	}

	@Override
	public ResponseTxVO mergeFacultad(CatFacultadRequestVO facultad) throws PersistenceException {
		ResponseTxVO outRespuesta = new ResponseTxVO();
		try{
			incializaDAO();
			CatFacultad facultadInsertar = FacultadConverter.toRequestCatFacultad(facultad);
			facultadInsertar = catFacultadDAO.guardarActualizar(facultadInsertar);
			if(facultadInsertar.getIdFac() != 0){
				outRespuesta = FacultadConverter.toResponseCatFacultad();
			}
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return outRespuesta;
	}

	@Override
	public FacultadesResponseVO obtenerFacultadesRol(FacRolRequestVO vo) throws PersistenceException {
		FacultadesResponseVO outRespuesta = new FacultadesResponseVO();
		List<CatFacultad> listaFacultades = null;
		List<TblFacRol> listaFacsRoles = null;
		List<CatFacultad> listaFacultadesCopia = null;
		try{
			incializaDAO();
			CriterioGenerico<Boolean> criterioActivo = new CriterioGenerico<Boolean>("estatus", "", "=", Boolean.TRUE, Boolean.class);
			listaFacultades = catFacultadDAO.buscarPorCriterio(criterioActivo);
			
			String rolesBuscar = "";
			for(CatRolVO rolVo : vo.getRoles()){
				rolesBuscar += String.valueOf(rolVo.getIdRol())+",";
			}
			rolesBuscar = rolesBuscar.substring(0, rolesBuscar.length()-1);
			CriterioGenerico<String> criterioRol = new CriterioGenerico<String>("catRol", "", "in", rolesBuscar, String.class);
			listaFacsRoles = tblFacRolDAO.buscarPorCriterio(criterioRol);
			
			listaFacultadesCopia = new ArrayList<>();
			for(CatFacultad facultad : listaFacultades){
				CatFacultad fac = new CatFacultad();
				fac.setDescripcion(facultad.getDescripcion());
				fac.setEstatus(facultad.getEstatus());
				fac.setFecAlta(facultad.getFecAlta());
				fac.setIdFac(facultad.getIdFac());
				fac.setIdFacPadre(facultad.getIdFacPadre());
				listaFacultadesCopia.add(fac);
			}
			
			for(CatFacultad facultad : listaFacultadesCopia){
				facultad.setEstatus(false);
				for(TblFacRol rolFac : listaFacsRoles){
					if(facultad.getIdFac() == rolFac.getCatFacultad().getIdFac()){
						if(rolFac.getEstatus())
							facultad.setEstatus(true);
					}
				}
			}
			
			Nodo nodoRaiz = generaArbolFacultades(listaFacultadesCopia);
			outRespuesta = FacultadConverter.toRepsonseFacultades(nodoRaiz);
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return outRespuesta;
	}
	
	private Nodo generaArbolFacultades(List<CatFacultad> listaFacultades){
		arbol = new TreeMap<Integer, Nodo>();			
		Nodo nodoPadre = null;
		for(CatFacultad facultad : listaFacultades){
			nodoPadre = new Nodo();
			nodoPadre.setId(facultad.getIdFac());
			nodoPadre.setIdPadre(facultad.getIdFacPadre());
			nodoPadre.setDescipcion(facultad.getDescripcion());
			nodoPadre.setEstatus(facultad.getEstatus());
			nodoPadre.setElementosNodo(new ArrayList<Nodo>());
			arbol.put(facultad.getIdFac(), nodoPadre);
		}
		//Agregar nodo raiz
		nodoPadre = new Nodo();
		nodoPadre.setId(0);
		nodoPadre.setIdPadre(-1);
		nodoPadre.setDescipcion("ROOT");
		nodoPadre.setElementosNodo(new ArrayList<Nodo>());
		arbol.put(nodoPadre.getId(), nodoPadre);
		
		Nodo nodoRaiz = new Nodo();
		nodoRaiz.setId(0);
		nodoRaiz.setIdPadre(0);
		nodoRaiz.setDescipcion("");
		nodoRaiz.setElementosNodo(nodoRaiz.getHijos(-1, 0, arbol));
		return nodoRaiz;
	}
	
	
}
