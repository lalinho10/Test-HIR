/**
 * 
 */
package mx.com.dti.os.service.vo.login;

import java.util.Date;

/**
 * @author DTI
 *
 */
public class ObtenerTarifaVO {

	private Integer idProd;
	private Integer idCob;
	private Integer idPlan;
	private Long fechaNacimiento;
	private Integer idFormaPago;
	private Integer modulos;
	
	/**
	 * @return the idProd
	 */
	public Integer getIdProd() {
		return idProd;
	}
	/**
	 * @param idProd the idProd to set
	 */
	public void setIdProd(Integer idProd) {
		this.idProd = idProd;
	}
	/**
	 * @return the idCob
	 */
	public Integer getIdCob() {
		return idCob;
	}
	/**
	 * @param idCob the idCob to set
	 */
	public void setIdCob(Integer idCob) {
		this.idCob = idCob;
	}
	/**
	 * @return the idPlan
	 */
	public Integer getIdPlan() {
		return idPlan;
	}
	/**
	 * @param idPlan the idPlan to set
	 */
	public void setIdPlan(Integer idPlan) {
		this.idPlan = idPlan;
	}
	/**
	 * 
	 */
	public ObtenerTarifaVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param idProd
	 * @param idCob
	 * @param idPlan
	 */
	public ObtenerTarifaVO(Integer idProd, Integer idCob, Integer idPlan, Long fechaNacimiento, Integer idFormaPago, Integer modulos) {
		super();
		this.idProd = idProd;
		this.idCob = idCob;
		this.idPlan = idPlan;
		this.fechaNacimiento = fechaNacimiento;
		this.idFormaPago = idFormaPago;
		this.modulos = modulos;
	}
	
	public Long getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNaciemiento(Long edad) {
		this.fechaNacimiento = edad;
	}
	public Integer getIdFormaPago() {
		return idFormaPago;
	}
	public void setIdFormaPago(Integer idFormaPago) {
		this.idFormaPago = idFormaPago;
	}
	public Integer getModulos() {
		return modulos;
	}
	public void setModulos(Integer edad) {
		this.modulos = edad;
	}
}
