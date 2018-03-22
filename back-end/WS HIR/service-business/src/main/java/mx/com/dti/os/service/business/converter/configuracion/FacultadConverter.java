package mx.com.dti.os.service.business.converter.configuracion;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import mx.com.dti.os.service.common.util.Nodo;
import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatFacultadRequestVO;
import mx.com.dti.os.service.common.vo.configuracion.FacultadesResponseVO;
import mx.com.dti.os.service.common.vo.configuracion.FacultadesVO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatFacultad;

public class FacultadConverter {

	public static FacultadesResponseVO toRepsonseFacultades(Nodo arbol){
		FacultadesResponseVO respuesta = new FacultadesResponseVO();
		List<FacultadesVO> arbolOut = new ArrayList<FacultadesVO>(); 
		FacultadesVO facultad = null;
		for(Nodo nodo : arbol.getElementosNodo()){
			facultad = new FacultadesVO();
			facultad.setDescripcion(nodo.getDescipcion());
			facultad.setIdFacultad(nodo.getId());
			facultad.setIdPadre(nodo.getIdPadre());
			facultad.setEstatus(nodo.isEstatus());
			facultad.setListaNodos(getHijos(facultad, nodo.getElementosNodo()));
			arbolOut.add(facultad);
		}
		respuesta.setMensaje("Lista recuperada con éxito");
		respuesta.setFacultades(arbolOut);
		return respuesta;
	}
	
	private static List<FacultadesVO> getHijos(FacultadesVO padre, List<Nodo> hijosPadre) {
		List<FacultadesVO> hijos = new ArrayList<FacultadesVO>();
		FacultadesVO facultad = null;
		// Obtener hijos
		for (Nodo entry : hijosPadre) {
			facultad = new FacultadesVO();
			facultad.setDescripcion(entry.getDescipcion());
			facultad.setIdFacultad(entry.getId());
			facultad.setIdPadre(entry.getIdPadre());
			facultad.setEstatus(entry.isEstatus());
			if(!entry.getElementosNodo().isEmpty())
				facultad.setListaNodos(getHijos(padre,entry.getElementosNodo()));
			hijos.add(facultad);
		}
		return hijos;
	}
	
	public static CatFacultad toRequestCatFacultad(CatFacultadRequestVO request){
		CatFacultad facultad = new CatFacultad();
		if(request.getIdFac() != 0)
			facultad.setIdFac(request.getIdFac());
		facultad.setDescripcion(request.getDescripcion());
		facultad.setEstatus(request.getEstatus());
		facultad.setIdFacPadre(request.getIdFacPadre());
		facultad.setFecAlta(new Date());
		return facultad;
	}
	
	public static ResponseTxVO toResponseCatFacultad(){
		ResponseTxVO out = new ResponseTxVO();
		out.setEstatus(true);
		out.setFechaOperacion(new Date());
		out.setMensaje("Facultad insertada/actulizada con éxito");
		return out;
	}
}
