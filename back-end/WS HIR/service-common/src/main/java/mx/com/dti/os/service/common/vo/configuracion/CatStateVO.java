package mx.com.dti.os.service.common.vo.configuracion;

public class CatStateVO {

	private Integer idState;
	private String descripcion;
	private String funcion;
	private Boolean estatus;
	
	/**
	 * @return the funcion
	 */
	public String getFuncion() {
		return funcion;
	}
	/**
	 * @param funcion the funcion to set
	 */
	public void setFuncion(String funcion) {
		this.funcion = funcion;
	}
	/**
	 * @return the estatus
	 */
	public Boolean getEstatus() {
		return estatus;
	}
	/**
	 * @param estatus the estatus to set
	 */
	public void setEstatus(Boolean estatus) {
		this.estatus = estatus;
	}
	public Integer getIdState() {
		return idState;
	}
	public void setIdState(Integer idState) {
		this.idState = idState;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
}
