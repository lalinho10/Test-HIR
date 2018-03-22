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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * CatModulo generated by hbm2java
 */
@Entity
@Table(name = "CAT_MODULO")
public class CatModulo implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6887308879916149061L;
	private Integer idMod;
	private CatState catState;
	private String descripcion;
	private Integer idModPadre;
	private Integer orden;
	private Date fecAlta;
	private Date fecBaja;
	private Date fecMod;
	private Boolean estatus;

	private Set<TblModuloRegla> tblModuloReglas = new HashSet<TblModuloRegla>(0);
	
	public CatModulo() {
	}

	public CatModulo(Integer idMod, CatState catState, String descripcion, Date fecAlta, Boolean estatus) {
		this.idMod = idMod;
		this.catState = catState;
		this.descripcion = descripcion;
		this.fecAlta = fecAlta;
		this.estatus = estatus;
	}

	public CatModulo(Integer idMod, CatState catState, String descripcion, Integer idModPadre, Integer orden, Date fecAlta,
			Date fecBaja, Date fecMod, Boolean estatus) {
		this.idMod = idMod;
		this.catState = catState;
		this.descripcion = descripcion;
		this.idModPadre = idModPadre;
		this.orden = orden;
		this.fecAlta = fecAlta;
		this.fecBaja = fecBaja;
		this.fecMod = fecMod;
		this.estatus = estatus;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_MOD", unique = true, nullable = false)
	public Integer getIdMod() {
		return this.idMod;
	}

	public void setIdMod(Integer idMod) {
		this.idMod = idMod;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ID_STATE", nullable = false)
	public CatState getCatState() {
		return this.catState;
	}

	public void setCatState(CatState catState) {
		this.catState = catState;
	}

	@Column(name = "DESCRIPCION", nullable = false, length = 200)
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	@Column(name = "ID_MOD_PADRE")
	public Integer getIdModPadre() {
		return this.idModPadre;
	}

	public void setIdModPadre(Integer idModPadre) {
		this.idModPadre = idModPadre;
	}

	@Column(name = "ORDEN")
	public Integer getOrden() {
		return this.orden;
	}

	public void setOrden(Integer orden) {
		this.orden = orden;
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
	@Column(name = "FEC_BAJA", length = 23)
	public Date getFecBaja() {
		return this.fecBaja;
	}

	public void setFecBaja(Date fecBaja) {
		this.fecBaja = fecBaja;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "FEC_MOD", length = 23)
	public Date getFecMod() {
		return this.fecMod;
	}

	public void setFecMod(Date fecMod) {
		this.fecMod = fecMod;
	}

	@Column(name = "ESTATUS", nullable = false, length = 1)
	public Boolean getEstatus() {
		return this.estatus;
	}

	public void setEstatus(Boolean estatus) {
		this.estatus = estatus;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "catModulo")
	public Set<TblModuloRegla> getTblModuloReglas() {
		return this.tblModuloReglas;
	}

	public void setTblModuloReglas(Set<TblModuloRegla> tblModuloReglas) {
		this.tblModuloReglas = tblModuloReglas;
	}
	
}
