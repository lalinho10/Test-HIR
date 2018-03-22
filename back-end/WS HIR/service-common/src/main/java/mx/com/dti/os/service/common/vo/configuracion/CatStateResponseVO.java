package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

public class CatStateResponseVO {
	
	private String mensaje;
	private List<CatStateVO> states;
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public List<CatStateVO> getStates() {
		return states;
	}
	public void setStates(List<CatStateVO> states) {
		this.states = states;
	}
}
