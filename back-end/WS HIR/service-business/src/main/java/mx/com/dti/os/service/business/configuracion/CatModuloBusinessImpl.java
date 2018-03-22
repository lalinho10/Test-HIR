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

import mx.com.dti.os.service.business.converter.configuracion.ModulosConverter;
import mx.com.dti.os.service.common.util.Nodo;
import mx.com.dti.os.service.common.vo.configuracion.CatRolVO;
import mx.com.dti.os.service.common.vo.configuracion.FacRolRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModuloRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModulosResponseVO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatModuloDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatModuloDAOImpl;
import mx.com.dti.os.service.persistence.dao.configuracion.CatRolDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.CatRolDAOImpl;
import mx.com.dti.os.service.persistence.dao.configuracion.ModuloReglaDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.ModuloReglaDAOImpl;
import mx.com.dti.os.service.persistence.dao.configuracion.TblFacRolDAO;
import mx.com.dti.os.service.persistence.dao.configuracion.TblFacRolDAOimpl;
import mx.com.dti.os.service.persistence.dao.generico.CriterioGenerico;
import mx.com.dti.os.service.persistence.entity.configuracion.CatModulo;
import mx.com.dti.os.service.persistence.entity.configuracion.CatRol;
import mx.com.dti.os.service.persistence.entity.configuracion.TblFacRol;
import mx.com.dti.os.service.persistence.entity.configuracion.TblModuloRegla;

@Stateless
@Local
public class CatModuloBusinessImpl implements CatModuloBusiness {
	
	@PersistenceContext(unitName="eservicesEM")
	public EntityManager em;
	
	@Resource
	public SessionContext sessionContext;
	
	public CatModuloDAO catModuloDAO;
	public ModuloReglaDAO moduloReglaDAO;
	public TblFacRolDAO tblFacRolDAO;
	public CatRolDAO catRolDAO;
	
	private TreeMap<Integer, Nodo> arbol = null;
	
	private void inicializaDAO(){
		this.catModuloDAO = new CatModuloDAOImpl(em);
		this.moduloReglaDAO = new ModuloReglaDAOImpl(em);
		this.tblFacRolDAO = new TblFacRolDAOimpl(em);
		this.catRolDAO = new CatRolDAOImpl(em);
	}

	@Override
	public ModulosResponseVO obtenerCatologoModulos() throws PersistenceException {
		ModulosResponseVO respuesta = null;
		try{
			inicializaDAO();
			CriterioGenerico<Boolean> criterioEstatus = new CriterioGenerico<Boolean>("estatus", "", "=", Boolean.TRUE, Boolean.class);
			List<CatModulo> listaModulos = catModuloDAO.buscarPorCriterio(criterioEstatus);
						
			Nodo nodoRaiz = construyeArbolModulos(listaModulos);
			respuesta = ModulosConverter.toResponseModulos(nodoRaiz);
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return respuesta;
	}

	@Override
	public ModulosResponseVO mergeModulo(ModuloRequestVO requestModulo) throws PersistenceException {
		ModulosResponseVO respuesta = null;
		try{
			inicializaDAO();
			//Hacer insert de modulo
			CatModulo moduloInsertar = ModulosConverter.toRequestInsertaModulo(requestModulo);
			moduloInsertar = catModuloDAO.guardarActualizar(moduloInsertar);
			//Valida insercion de modulo
			if(moduloInsertar.getIdMod() != 0){
				//Borramos reglas anteriores
				CriterioGenerico<Integer> criterioModulo = new CriterioGenerico<Integer>("catModulo", "", "=", moduloInsertar.getIdMod(), Integer.class);
				List<TblModuloRegla> listaReglasBorrar = moduloReglaDAO.buscarPorCriterio(criterioModulo);
				if(listaReglasBorrar.size() != 0)
					moduloReglaDAO.borrarTodo(listaReglasBorrar);
				//InsertarReglas
				List<TblModuloRegla> listaReglasModulo = ModulosConverter.toRequestReglasModulo(requestModulo.getReglas(), moduloInsertar.getIdMod());
				listaReglasModulo = (List<TblModuloRegla>)moduloReglaDAO.guardarTodo(listaReglasModulo);
				
				respuesta = new ModulosResponseVO();
			}
			else{
				respuesta = new ModulosResponseVO();
				respuesta.setMensaje("Ocurrio un error al guardar el modulo");
			}
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return respuesta;
	}

	@Override
	public ModulosResponseVO obtenerMenu(FacRolRequestVO vo) throws PersistenceException {
		ModulosResponseVO respuesta = null;
		List<TblFacRol> listaFacsRoles = null;
		List<CatRol> rolIds = null;
		try{
			inicializaDAO();
			//Buccamos las facultades asociadas al rol
			String rolesBuscar = "";
			for(CatRolVO rolVo : vo.getRoles()){
				CriterioGenerico<String> criterioDesc = new CriterioGenerico<String>("descripcion", "", "=", rolVo.getDescripcion(), String.class);
				rolIds = catRolDAO.buscarPorCriterio(criterioDesc);
				rolesBuscar += String.valueOf(rolIds.get(0).getIdRol())+",";
			}
			rolesBuscar = rolesBuscar.substring(0, rolesBuscar.length()-1);
			CriterioGenerico<String> criterioRol = new CriterioGenerico<String>("catRol", "", "in", rolesBuscar, String.class);
			listaFacsRoles = tblFacRolDAO.buscarPorCriterio(criterioRol);
			
			if(!listaFacsRoles.isEmpty()){
				String facultadesBuscar = "";
				for(TblFacRol facRol : listaFacsRoles){
					facultadesBuscar += String.valueOf(facRol.getCatFacultad().getIdFac())+",";
				}
				facultadesBuscar = facultadesBuscar.substring(0, facultadesBuscar.length()-1);
				//Buscamos los modulos de acuerdo a las facultades anteriores
				CriterioGenerico<String> criterioFacultades = new CriterioGenerico<String>("catFacultad", "", "in", facultadesBuscar, String.class);
				List<TblModuloRegla> listaReglas = moduloReglaDAO.buscarPorCriterio(criterioFacultades);
				//Obtenemos todos los idModulo incluyendo los idPadre
				if(!listaReglas.isEmpty()){
					String modulosBuscar = "";
					for(TblModuloRegla modRegla : listaReglas){
						modulosBuscar += modRegla.getCatModulo().getIdMod()+",";
						if(modRegla.getCatModulo().getIdModPadre() != 0){
							modulosBuscar += modRegla.getCatModulo().getIdModPadre()+",";
							CatModulo modPadre= modRegla.getCatModulo();
							while(modPadre.getIdModPadre() != 0){
								modPadre = catModuloDAO.buscarPorId(modPadre.getIdModPadre(), false);
								modulosBuscar += modPadre.getIdModPadre()+",";
							}
							
						}
					}
					modulosBuscar = modulosBuscar.substring(0, modulosBuscar.length()-1);
					
					CriterioGenerico<String> criterioModulos = new CriterioGenerico<String>("idMod", "", "in", modulosBuscar, String.class);
					CriterioGenerico<Boolean> criterioEstatus = new CriterioGenerico<Boolean>("estatus", "", "=", Boolean.TRUE, Boolean.class);
					List<CatModulo> listaModulos = catModuloDAO.buscarPorCriterio(criterioModulos,criterioEstatus);
					
					Nodo nodoRaiz = construyeArbolModulos(listaModulos);
					respuesta = ModulosConverter.toResponseModulos(nodoRaiz);
				}
				else{
					respuesta = new ModulosResponseVO();
					respuesta.setMensaje("Rol no tiene asociado un menú");
				}
			}
			else{
				respuesta = new ModulosResponseVO();
				respuesta.setMensaje("Rol(es) no tiene asociada una configuracion rol-facultad(es)");
			}
			
			
		}
		catch(PersistenceException e){
			sessionContext.setRollbackOnly();
			System.out.println("fallo");
		}
		return respuesta;
	}
	
	private Nodo construyeArbolModulos(List<CatModulo> listaModulos){
		arbol = new TreeMap<Integer, Nodo>();
		Nodo nodo = null;
		for(CatModulo modulo : listaModulos){
			nodo = new Nodo();
			nodo.setId(modulo.getIdMod());
			nodo.setIdPadre(modulo.getIdModPadre());
			nodo.setIdState(modulo.getCatState().getIdState());
			nodo.setDescripcionState(modulo.getCatState().getDescripcion());
//			nodo.setIcono(modulo.getIcono());
			nodo.setOrden(modulo.getOrden());
			nodo.setDescipcion(modulo.getDescripcion());
			nodo.setEstatus(modulo.getEstatus());
			List<Object> reglas = null;
			if(modulo.getTblModuloReglas() != null)
				reglas = new ArrayList<Object>(modulo.getTblModuloReglas());
			else
				reglas = new ArrayList<Object>();
			nodo.setReglas(reglas);
			arbol.put(modulo.getIdMod(), nodo);
		}
		
		//Agrega nodo root
		nodo = new Nodo();
		nodo.setId(0);
		nodo.setIdPadre(-1);
		nodo.setIdState(0);
		nodo.setDescripcionState("");
//		nodo.setIcono("");
		nodo.setOrden(0);
		nodo.setDescipcion("ROOT");
		nodo.setEstatus(Boolean.TRUE);
		List<Object> reglas = null;
		reglas = new ArrayList<Object>();
		nodo.setReglas(reglas);
		arbol.put(nodo.getId(), nodo);
		
		Nodo nodoRaiz = new Nodo();
		nodoRaiz.setId(0);
		nodoRaiz.setIdPadre(0);
		nodoRaiz.setDescipcion("");
		nodoRaiz.setElementosNodo(nodoRaiz.getHijos(-1, 0, arbol));
		return nodoRaiz;
	}

}
