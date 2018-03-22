package mx.com.dti.os.service.persistence.entity.configuracion;

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


@Entity
@Table(name = "CAT_FACULTAD")
public class CatFacultad implements java.io.Serializable {

	private Integer idFac;
	private String descripcion;
	private Integer idFacPadre;
	private Date fecAlta;
	private Date fecBaja;
	private Date fecMod;
	private Boolean estatus;

	public CatFacultad() {
	}

	public CatFacultad(Integer idFac, String descripcion, Date fecAlta, Boolean estatus) {
		this.idFac = idFac;
		this.descripcion = descripcion;
		this.fecAlta = fecAlta;
		this.estatus = estatus;
	}

	public CatFacultad(Integer idFac, String descripcion, Integer idFacPadre, Date fecAlta, Date fecBaja, Date fecMod,
			Boolean estatus) {
		this.idFac = idFac;
		this.descripcion = descripcion;
		this.idFacPadre = idFacPadre;
		this.fecAlta = fecAlta;
		this.fecBaja = fecBaja;
		this.fecMod = fecMod;
		this.estatus = estatus;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_FAC", unique = true, nullable = false)
	public Integer getIdFac() {
		return this.idFac;
	}

	public void setIdFac(Integer idFac) {
		this.idFac = idFac;
	}

	@Column(name = "DESCRIPCION", nullable = false, length = 200)
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	@Column(name = "ID_FAC_PADRE")
	public Integer getIdFacPadre() {
		return this.idFacPadre;
	}

	public void setIdFacPadre(Integer idFacPadre) {
		this.idFacPadre = idFacPadre;
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
}
