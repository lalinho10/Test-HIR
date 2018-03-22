package mx.com.dti.os.service.business.converter.configuracion;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import mx.com.dti.os.service.common.util.Nodo;
import mx.com.dti.os.service.common.vo.configuracion.CatModuloVO;
import mx.com.dti.os.service.common.vo.configuracion.ModuloReglaVO;
import mx.com.dti.os.service.common.vo.configuracion.ModuloRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.ModulosResponseVO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatFacultad;
import mx.com.dti.os.service.persistence.entity.configuracion.CatModulo;
import mx.com.dti.os.service.persistence.entity.configuracion.CatServicios;
import mx.com.dti.os.service.persistence.entity.configuracion.CatState;
import mx.com.dti.os.service.persistence.entity.configuracion.TblModuloRegla;

public class ModulosConverter {
	
	public static ModulosResponseVO toResponseModulos(Nodo arbol){
		ModulosResponseVO respuesta = new ModulosResponseVO();
		List<CatModuloVO> arbolOut = new ArrayList<>();
		CatModuloVO modulo = null;
		for(Nodo nodo : arbol.getElementosNodo()){
			modulo = new CatModuloVO();
			modulo.setDescripcion(nodo.getDescipcion());
			modulo.setIdModulo(nodo.getId());
			modulo.setIdPadre(nodo.getIdPadre());
			modulo.setIdState(nodo.getIdState());
			modulo.setDescripcionState(nodo.getDescripcionState());
			modulo.setReglas(casteaObjectToModuloRegla(nodo.getReglas()));
			modulo.setListaNodos(getHijos(modulo, nodo.getElementosNodo()));
			arbolOut.add(modulo);
		}
		respuesta.setMensaje("Catalogo recuperado con éxito");
		respuesta.setModulos(arbolOut);
		return respuesta;
	}
	
	private static List<ModuloReglaVO> casteaObjectToModuloRegla(List<Object> reglasObjeto){
		List<ModuloReglaVO> reglas = new ArrayList<>();
		for(Object obj : reglasObjeto){
			TblModuloRegla tblModRegla = (TblModuloRegla)obj;
			ModuloReglaVO modRegla = new ModuloReglaVO();
			modRegla.setEstatus(tblModRegla.getEstatus());
			modRegla.setIdFacultad(tblModRegla.getCatFacultad().getIdFac());
			modRegla.setIdModulo(tblModRegla.getCatModulo().getIdMod());
			modRegla.setIdServicio(tblModRegla.getCatServicios().getIdServicio());
			modRegla.setOperLogico(tblModRegla.getOperLogico());
			reglas.add(modRegla);
		}
		return reglas;
	}
	
	private static List<CatModuloVO> getHijos(CatModuloVO padre, List<Nodo> hijosPadre) {
		List<CatModuloVO> hijos = new ArrayList<CatModuloVO>();
		CatModuloVO modulo = null;
		// Obtener hijos
		for (Nodo entry : hijosPadre) {
			modulo = new CatModuloVO();
			modulo.setDescripcion(entry.getDescipcion());
			modulo.setIdModulo(entry.getId());
			modulo.setIdPadre(entry.getIdPadre());
			modulo.setIdState(entry.getIdState());
			modulo.setDescripcionState(entry.getDescripcionState());
			modulo.setReglas(casteaObjectToModuloRegla(entry.getReglas()));
			if(!entry.getElementosNodo().isEmpty())
				modulo.setListaNodos(getHijos(padre,entry.getElementosNodo()));
			hijos.add(modulo);
		}
		return hijos;
	}
	
	public static CatModulo toRequestInsertaModulo(ModuloRequestVO requestModulo){
		CatModulo modulo = new CatModulo();
		if(requestModulo.getIdModulo() != 0)
			modulo.setIdMod(requestModulo.getIdModulo());
		modulo.setEstatus(requestModulo.getActivo());
		modulo.setDescripcion(requestModulo.getDescripcion());
		modulo.setIdModPadre(requestModulo.getIdPadre());
		modulo.setOrden(requestModulo.getOrden());
		CatState state = new CatState();
		state.setIdState(requestModulo.getIdState());
		modulo.setCatState(state);
		modulo.setFecAlta(new Date());
		return modulo;
	}
	
	public static List<TblModuloRegla> toRequestReglasModulo(List<ModuloReglaVO> reglas, int idModulo){
		List<TblModuloRegla> listaReglas = new ArrayList<>();
		TblModuloRegla regla = null;
		CatServicios servicio = null;
		for(ModuloReglaVO vo : reglas){
			regla = new TblModuloRegla();
			regla.setEstatus(Boolean.TRUE);
			regla.setFecAlta(new Date());
			regla.setOperLogico(vo.getOperLogico());
			CatFacultad facultad = new CatFacultad();
			facultad.setIdFac(vo.getIdFacultad());
			regla.setCatFacultad(facultad);
			if(vo.getIdServicio() != 0) {
				servicio = new CatServicios();
				servicio.setIdServicio(vo.getIdServicio());
			}
			regla.setCatServicios(servicio);
			CatModulo modulo = new CatModulo();
			modulo.setIdMod(idModulo);
			regla.setCatModulo(modulo);
			listaReglas.add(regla);
		}
		return listaReglas;
	}

}
