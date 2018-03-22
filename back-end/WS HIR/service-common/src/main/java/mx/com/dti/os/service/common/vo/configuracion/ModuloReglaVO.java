package mx.com.dti.os.service.common.vo.configuracion;

import java.util.Date;

public class ModuloReglaVO {
	
	private Integer idFacultad;
	private Integer idModulo;
	private Integer idServicio;
	private String operLogico;
	private Boolean estatus;

	public Integer getIdFacultad() {
		return idFacultad;
	}
	public void setIdFacultad(Integer idFacultad) {
		this.idFacultad = idFacultad;
	}
	public Integer getIdModulo() {
		return idModulo;
	}
	public void setIdModulo(Integer idModulo) {
		this.idModulo = idModulo;
	}
	public Integer getIdServicio() {
		return idServicio;
	}
	public void setIdServicio(Integer idServicio) {
		this.idServicio = idServicio;
	}
	public String getOperLogico() {
		return operLogico;
	}
	public void setOperLogico(String operLogico) {
		this.operLogico = operLogico;
	}
	public Boolean getEstatus() {
		return estatus;
	}
	public void setEstatus(Boolean estatus) {
		this.estatus = estatus;
	}
}
