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
@Table(name = "CAT_ROL")
public class CatRol implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3953223900887802103L;
	private Integer idRol;
	private String descripcion;
	private Date fecAlta;
	private Date fecBaja;
	private Date fecMod;
	private String estatus;
	private Set<TblFacRol> tblFacRols = new HashSet<TblFacRol>(0);

	public CatRol() {
	}

	public CatRol(Integer idRol, String descripcion, Date fecAlta, String estatus) {
		this.idRol = idRol;
		this.descripcion = descripcion;
		this.fecAlta = fecAlta;
		this.estatus = estatus;
	}

	public CatRol(Integer idRol, String descripcion, Date fecAlta, Date fecBaja, Date fecMod, String estatus,
			Set<TblFacRol> tblFacRols) {
		this.idRol = idRol;
		this.descripcion = descripcion;
		this.fecAlta = fecAlta;
		this.fecBaja = fecBaja;
		this.fecMod = fecMod;
		this.estatus = estatus;
		this.tblFacRols = tblFacRols;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_ROL", unique = true, nullable = false)
	public Integer getIdRol() {
		return this.idRol;
	}

	public void setIdRol(Integer idRol) {
		this.idRol = idRol;
	}

	@Column(name = "DESCRIPCION", nullable = false, length = 200)
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
	public String getEstatus() {
		return this.estatus;
	}

	public void setEstatus(String estatus) {
		this.estatus = estatus;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "catRol")
	public Set<TblFacRol> getTblFacRols() {
		return this.tblFacRols;
	}

	public void setTblFacRols(Set<TblFacRol> tblFacRols) {
		this.tblFacRols = tblFacRols;
	}

}
