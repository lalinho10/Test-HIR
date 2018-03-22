package mx.com.dti.os.service.business.converter.configuracion;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateResponseVO;
import mx.com.dti.os.service.common.vo.configuracion.CatStateVO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatState;

public class StatesConverter {
	
	public static CatStateResponseVO toResponseCatalogo(List<CatState> listaStates){
		CatStateResponseVO out = new CatStateResponseVO();
		List<CatStateVO> listaVO = new ArrayList<>();
		for(CatState cState : listaStates){
			CatStateVO vo = new CatStateVO();
			vo.setDescripcion(cState.getDescripcion());
			vo.setIdState(cState.getIdState());
			listaVO.add(vo);
		}
		out.setMensaje("Catalogo recuperado con éxito");
		out.setStates(listaVO);
		return out;
	}

	public static CatState toCatState(CatStateVO in) {
		CatState out = new CatState();
		if(in.getIdState() != 0) {
			out.setIdState(in.getIdState());
			out.setFecMod(new Date());
		}
		else {
			out.setFecAlta(new Date());
		}
		out.setDescripcion(in.getDescripcion());
		out.setEstatus(in.getEstatus());
		out.setFuncion(in.getFuncion());
		return out;
	}
	
	public static ResponseTxVO toResponseState(){
		ResponseTxVO out = new ResponseTxVO();
		out.setEstatus(true);
		out.setFechaOperacion(new Date());
		out.setMensaje("State insertado/actulizado con éxito");
		return out;
	}
}
