package mx.com.dti.os.service.common.vo.configuracion;

public class CatFacultadRequestVO {
	
	private int idFac;
	private String descripcion;
	private Integer idFacPadre;
	private Boolean estatus;
	
	public Integer getIdFac() {
		return idFac;
	}
	public void setIdFac(Integer idFac) {
		this.idFac = idFac;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public Integer getIdFacPadre() {
		return idFacPadre;
	}
	public void setIdFacPadre(Integer idFacPadre) {
		this.idFacPadre = idFacPadre;
	}
	public Boolean getEstatus() {
		return estatus;
	}
	public void setEstatus(Boolean estatus) {
		this.estatus = estatus;
	}
}
