/**
 * 
 */
package mx.com.dti.os.service.vo.login;

import java.math.BigInteger;

/**
 * @author DTI
 *
 */
public class RecuperaClaveRespuesta extends LoginRespuesta {

	/**
	 * 
	 */
	public RecuperaClaveRespuesta() {
		super();
	}

	/**
	 * @return the idCodigo
	 */
	public BigInteger getIdCodigo() {
		return idCodigo;
	}

	/**
	 * @param idCodigo the idCodigo to set
	 */
	public void setIdCodigo(BigInteger idCodigo) {
		this.idCodigo = idCodigo;
	}

	private BigInteger idCodigo;

	/**
	 * @param idCodigo
	 */
	public RecuperaClaveRespuesta(BigInteger idCodigo) {
		super();
		this.idCodigo = idCodigo;
	}
	
}
