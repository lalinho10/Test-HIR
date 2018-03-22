/**
 * 
 */
package mx.com.dti.os.service.vo.login;

import java.math.BigInteger;

/**
 * @author DTI
 *
 */
public class LoginSmsVO {

	/**
	 * 
	 */
	public LoginSmsVO() {
		super();
	}

	private BigInteger idCodigo;
	private String codigo;
	
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
	/**
	 * @return the codigo
	 */
	public String getCodigo() {
		return codigo;
	}
	/**
	 * @param codigo the codigo to set
	 */
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	
	/**
	 * @param idCodigo
	 * @param codigo
	 */
	public LoginSmsVO(BigInteger idCodigo, String codigo) {
		super();
		this.idCodigo = idCodigo;
		this.codigo = codigo;
	}
	
}
