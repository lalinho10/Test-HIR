package mx.com.dti.os.service.persistence.entity.configuracion;
// Generated 10-ago-2016 17:14:31 by Hibernate Tools 4.0.0.Final

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * CatState generated by hbm2java
 */
@Entity
@Table(name = "CAT_STATE")
public class CatState implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4950859175800750761L;
	private Integer idState;
	private String descripcion;
	private Date fecAlta;
	private Date fecMod;
	private Date fecBaja;
	private Boolean estatus;
	private String funcion;
	private Set<CatModulo> catModulos = new HashSet<CatModulo>(0);

	public CatState() {
	}

	public CatState(Integer idState, String descripcion, Date fecAlta, Boolean estatus, String funcion) {
		this.idState = idState;
		this.descripcion = descripcion;
		this.fecAlta = fecAlta;
		this.estatus = estatus;
		this.funcion = funcion;
	}

	public CatState(Integer idState, String descripcion, Date fecAlta, Date fecMod, Date fecBaja, Boolean estatus,
			String funcion, Set<CatModulo> catModulos) {
		this.idState = idState;
		this.descripcion = descripcion;
		this.fecAlta = fecAlta;
		this.fecMod = fecMod;
		this.fecBaja = fecBaja;
		this.estatus = estatus;
		this.funcion = funcion;
		this.catModulos = catModulos;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_STATE", unique = true, nullable = false)
	public Integer getIdState() {
		return this.idState;
	}

	public void setIdState(Integer idState) {
		this.idState = idState;
	}

	@Column(name = "DESCRIPCION", nullable = false, length = 50)
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "FEC_ALTA", nullable = false, length = 23)
	public Date getFecAlta() {
		return this.fecAlta;
	}

	public void setFecAlta(Date fecAlta) {
		this.fecAlta = fecAlta;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "FEC_MOD", length = 23)
	public Date getFecMod() {
		return this.fecMod;
	}

	public void setFecMod(Date fecMod) {
		this.fecMod = fecMod;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "FEC_BAJA", length = 23)
	public Date getFecBaja() {
		return this.fecBaja;
	}

	public void setFecBaja(Date fecBaja) {
		this.fecBaja = fecBaja;
	}

	@Column(name = "ESTATUS", nullable = false, length = 1)
	public Boolean getEstatus() {
		return this.estatus;
	}

	public void setEstatus(Boolean estatus) {
		this.estatus = estatus;
	}
	
	@Column(name = "FUNCION", nullable = false, length = 50)
	public String getFuncion() {
		return this.funcion;
	}

	public void setFuncion(String funcion) {
		this.funcion = funcion;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "catState")
	public Set<CatModulo> getCatModulos() {
		return this.catModulos;
	}

	public void setCatModulos(Set<CatModulo> catModulos) {
		this.catModulos = catModulos;
	}

}
