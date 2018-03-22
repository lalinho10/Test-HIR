package mx.com.dti.os.service.business.converter.configuracion;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.CatRolVO;
import mx.com.dti.os.service.common.vo.configuracion.RolesResponseVO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatRol;

public class RolesConverter {
	
	public static RolesResponseVO toResponseCatRoles(List<CatRol> roles){
		RolesResponseVO outResponse = new RolesResponseVO();
		List<CatRolVO> rolesOut = new ArrayList<>();
		if(!roles.isEmpty()){
			CatRolVO rolOut = null;
			for(CatRol rol : roles){
				rolOut = new CatRolVO();
				rolOut.setDescripcion(rol.getDescripcion());
				rolOut.setEstatus(rol.getEstatus());
				rolOut.setIdRol(rol.getIdRol());
				rolesOut.add(rolOut);
			}
			outResponse.setMensaje("Catalogo recuperado con éxito");
			outResponse.setRoles(rolesOut);
		}
		else{
			outResponse.setMensaje("Fallo la recuperación del catálogo");
		}
		return outResponse;
	}
	
	public static CatRol toRequestCatRol(CatRolVO vo){
		CatRol rol = new CatRol();
		if(vo.getIdRol() != 0)
			rol.setIdRol(vo.getIdRol());
		rol.setDescripcion(vo.getDescripcion());
		rol.setEstatus(vo.isEstatus());
		rol.setFecAlta(new Date());
		return rol;
	}
	
	public static ResponseTxVO toResponseCatRol(){
		ResponseTxVO out = new ResponseTxVO();
		out.setEstatus(true);
		out.setFechaOperacion(new Date());
		out.setMensaje("Rol insertado/actulizado con éxito");
		return out;
	}

}
