package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

public class CatModuloVO {

	private int idModulo;
	private int idPadre;
	private String descripcion;
	private int orden;
	private int idState;
	private String descripcionState;
	private Boolean activo;
	private List<ModuloReglaVO> reglas;
	private List<CatModuloVO> listaNodos;
	
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
	public Boolean getActivo() {
		return activo;
	}
	public void setActivo(Boolean activo) {
		this.activo = activo;
	}
	public String getDescripcionState() {
		return descripcionState;
	}
	public void setDescripcionState(String descripcionState) {
		this.descripcionState = descripcionState;
	}
	public List<ModuloReglaVO> getReglas() {
		return reglas;
	}
	public void setReglas(List<ModuloReglaVO> reglas) {
		this.reglas = reglas;
	}
	public List<CatModuloVO> getListaNodos() {
		return listaNodos;
	}
	public void setListaNodos(List<CatModuloVO> listaNodos) {
		this.listaNodos = listaNodos;
	}
	
}
