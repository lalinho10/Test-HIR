package mx.com.dti.os.service.business.converter.configuracion;

import java.util.ArrayList;
import java.util.List;

import mx.com.dti.os.service.common.vo.configuracion.ServicioVO;
import mx.com.dti.os.service.common.vo.configuracion.ServiciosResponseVO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatServicios;

public class ServiciosConverter {

	public static ServiciosResponseVO toResponseCatalogoServicios(List<CatServicios> servicios){
		ServiciosResponseVO out = new ServiciosResponseVO();
		List<ServicioVO> listaServiciosVO = new ArrayList<>();
		ServicioVO servicioOut = null;
		for(CatServicios servicio : servicios){
			servicioOut = new ServicioVO();
			servicioOut.setClave(servicio.getClave());
			servicioOut.setDescripcion(servicio.getDescripcion());
			servicioOut.setIdServicio(servicio.getIdServicio());
			servicioOut.setServicio(servicio.getServicio());
			listaServiciosVO.add(servicioOut);
		}
		out.setMensaje("Catalogo recuperado con éxito");
		out.setServicios(listaServiciosVO);
		return out;
	}
	
}
