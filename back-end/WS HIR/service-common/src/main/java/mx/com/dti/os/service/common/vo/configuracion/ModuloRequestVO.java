package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

public class ModuloRequestVO {

	private int idModulo;
	private int idPadre;
	private String descripcion;
	private int orden;
	private int idState;
	private String icono; //base64 
	private Boolean activo;
	private List<ModuloReglaVO> reglas;
	
	public int getIdModulo() {
		return idModulo;
	}
	public void setIdModulo(int idModulo) {
		this.idModulo = idModulo;
	}
	public int getIdPadre() {
		return idPadre;
	}
	public void setIdPadre(int idPadre) {
		this.idPadre = idPadre;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public int getOrden() {
		return orden;
	}
	public void setOrden(int orden) {
		this.orden = orden;
	}
	public int getIdState() {
		return idState;
	}
	public void setIdState(int idState) {
		this.idState = idState;
	}
	public String getIcono() {
		return icono;
	}
	public void setIcono(String icono) {
		this.icono = icono;
	}
	public Boolean getActivo() {
		return activo;
	}
	public void setActivo(Boolean activo) {
		this.activo = activo;
	}
	public List<ModuloReglaVO> getReglas() {
		return reglas;
	}
	public void setReglas(List<ModuloReglaVO> reglas) {
		this.reglas = reglas;
	}
	
}
