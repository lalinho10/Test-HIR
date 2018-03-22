package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

public class ModulosResponseVO {
	
	private String mensaje;
	private List<CatModuloVO> modulos;
	
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public List<CatModuloVO> getModulos() {
		return modulos;
	}
	public void setModulos(List<CatModuloVO> modulos) {
		this.modulos = modulos;
	}
}
