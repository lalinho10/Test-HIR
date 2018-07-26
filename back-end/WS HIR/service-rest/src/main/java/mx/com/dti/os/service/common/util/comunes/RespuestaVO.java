
package mx.com.dti.os.service.common.util.comunes;

import java.util.Date;

import javax.ws.rs.core.Response.Status;

public class RespuestaVO<T> {

	private Integer code;
	private Boolean status;
	private String mensaje;
	private Date dateTime;
	private T data;
	
	public RespuestaVO() {
		// TODO Auto-generated constructor stub
	}
	
	public RespuestaVO(Integer code, T data) {
		super();
		this.code = code;
		this.data = data;
	}

	public RespuestaVO(Integer code, boolean status, T data) {
		super();
		this.code = code;
		this.status = status;
		this.data = data;
	}
	
	public RespuestaVO(Integer code, Boolean status, String mensaje){
		super();
		this.code = code;
		this.status = status;
		this.mensaje = mensaje;
	}

	public RespuestaVO(Boolean status, int code, String mensaje, T data) {
		super();
		this.status = status;
		this.code = code;
		this.mensaje = mensaje;
		this.data = data;
	}

	public RespuestaVO(Status internalServerError, String string) {
		super();
		this.code = internalServerError.getStatusCode();
		this.mensaje = string;
	}

	/**
	 * @return the code
	 */
	public Integer getCode() {
		return code;
	}
	/**
	 * @param code the code to set
	 */
	public void setCode(Integer code) {
		this.code = code;
	}
	/**
	 * @return the status
	 */
	public Boolean getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(Boolean status) {
		this.status = status;
	}
	/**
	 * @return the data
	 */
	public T getData() {
		return data;
	}
	/**
	 * @param data the data to set
	 */
	public void setData(T data) {
		this.data = data;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}


}
