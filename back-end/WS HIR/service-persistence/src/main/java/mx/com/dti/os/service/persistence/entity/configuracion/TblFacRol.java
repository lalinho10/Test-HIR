package mx.com.dti.os.service.persistence.entity.configuracion;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "TBL_FAC_ROL")
public class TblFacRol implements java.io.Serializable {

	private Integer idFacRol;
	private CatRol catRol;
	private CatFacultad catFacultad;
	private Date fecAlta;
	private Date fecMod;
	private Date fecBaja;
	private Boolean estatus;

	public TblFacRol() {
	}

	public TblFacRol(Integer idFacRol, CatRol catRol, CatFacultad catFacultad, Date fecAlta, Boolean estatus) {
		this.idFacRol = idFacRol;
		this.catRol = catRol;
		this.catFacultad = catFacultad;
		this.fecAlta = fecAlta;
		this.estatus = estatus;
	}

	public TblFacRol(Integer idFacRol, CatRol catRol, CatFacultad catFacultad, Date fecAlta, Date fecMod, Date fecBaja,
			Boolean estatus) {
		this.idFacRol = idFacRol;
		this.catRol = catRol;
		this.catFacultad = catFacultad;
		this.fecAlta = fecAlta;
		this.fecMod = fecMod;
		this.fecBaja = fecBaja;
		this.estatus = estatus;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_FAC_ROL", unique = true, nullable = false)
	public Integer getIdFacRol() {
		return this.idFacRol;
	}

	public void setIdFacRol(Integer idFacRol) {
		this.idFacRol = idFacRol;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_ROL", nullable = false)
	public CatRol getCatRol() {
		return this.catRol;
	}

	public void setCatRol(CatRol catRol) {
		this.catRol = catRol;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ID_FAC", nullable = false)
	public CatFacultad getCatFacultad() {
		return this.catFacultad;
	}

	public void setCatFacultad(CatFacultad catFacultad) {
		this.catFacultad = catFacultad;
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

}
