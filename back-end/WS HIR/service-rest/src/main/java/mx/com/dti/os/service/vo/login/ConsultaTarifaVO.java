/**
 * 
 */
package mx.com.dti.os.service.vo.login;

/**
 * @author DTI
 *
 */
public class ConsultaTarifaVO extends LoginRespuesta {

	private Double tarifa;
	private Double deducible;
	private Double suma;
	private Double edad;

	/**
	 * @return the tarifa
	 */
	public Double getTarifa() {
		return tarifa;
	}

	/**
	 * @param tarifa the tarifa to set
	 */
	public void setTarifa(Double tarifa) {
		this.tarifa = tarifa;
	}

	/**
	 * 
	 */
	public ConsultaTarifaVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Double getDeducible() {
		return deducible;
	}

	public void setDeducible(Double deducible) {
		this.deducible = deducible;
	}

	public Double getSuma() {
		return suma;
	}

	public void setSuma(Double suma) {
		this.suma = suma;
	}

	/**
	 * @param tarifa
	 * @param deducible
	 * @param suma
	 */
	public ConsultaTarifaVO(Double tarifa, Double deducible, Double suma, Double edad) {
		super();
		this.tarifa = tarifa;
		this.deducible = deducible;
		this.suma = suma;
		this.edad = edad;
	}

	public Double getEdad() {
		return edad;
	}

	public void setEdad(Double edad) {
		this.edad = edad;
	}
	
}
