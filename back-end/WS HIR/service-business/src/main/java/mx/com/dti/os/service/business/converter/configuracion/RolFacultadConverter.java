package mx.com.dti.os.service.business.converter.configuracion;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import mx.com.dti.os.service.common.util.ResponseTxVO;
import mx.com.dti.os.service.common.vo.configuracion.ConfigRolFacVO;
import mx.com.dti.os.service.persistence.entity.configuracion.CatFacultad;
import mx.com.dti.os.service.persistence.entity.configuracion.CatRol;
import mx.com.dti.os.service.persistence.entity.configuracion.TblFacRol;

public class RolFacultadConverter {
	
	public static List<TblFacRol> toRequestInsUpdFacRol(List<ConfigRolFacVO> request){
		List<TblFacRol> listaFacRolesIns = new ArrayList<>();
		TblFacRol facRol = null;
		for(ConfigRolFacVO configRolFacVO : request){
			facRol = new TblFacRol();
			CatFacultad facultad = new CatFacultad();
			facultad.setIdFac(configRolFacVO.getIdFacultad());
			facRol.setCatFacultad(facultad);
			CatRol rol = new CatRol();
			rol.setIdRol(configRolFacVO.getIdRol());
			facRol.setCatRol(rol);
			facRol.setEstatus(configRolFacVO.isActivo());
			facRol.setFecAlta(new Date());
			listaFacRolesIns.add(facRol);
		}
		return listaFacRolesIns;
	}
	
	public static ResponseTxVO toResponseInsUpd(){
		ResponseTxVO respuesta = new ResponseTxVO();
		respuesta.setMensaje("Configuracion insertada con éxito");
		return  respuesta;
	}
}
