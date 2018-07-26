package mx.com.dti.os.service.vo.login;

public class CatConsultaVO {

	private Integer id;
	private String desc;
	/**
	 * @return the id
	 */
	public Integer getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * @return the desc
	 */
	public String getDesc() {
		return desc;
	}
	/**
	 * @param desc the desc to set
	 */
	public void setDesc(String desc) {
		this.desc = desc;
	}
	/**
	 * 
	 */
	public CatConsultaVO() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param id
	 * @param desc
	 */
	public CatConsultaVO(Integer id, String desc) {
		super();
		this.id = id;
		this.desc = desc;
	}

}
