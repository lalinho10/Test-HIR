package mx.com.dti.os.service.common.vo.configuracion;

import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(propOrder={"idFacultad", "descripcion","idPadre","estatus","listaNodos"}, 
		namespace="facultades.configuracion.vo.common.eservices.os.planetmedia.com.mx")
public class FacultadesVO {
	
	@XmlElement(name = "idFacultad")
	private int idFacultad;
	@XmlElement(name = "descripcion")
	private String descripcion;
	@XmlElement(name = "idPadre")
	private int idPadre;
	@XmlElement(name = "estatus")
	private boolean estatus;
	@XmlElement(name = "listaNodos")
	private List<FacultadesVO> listaNodos;
	
	public int getIdFacultad() {
		return idFacultad;
	}
	public void setIdFacultad(int idFacultad) {
		this.idFacultad = idFacultad;
	}
	public String getDescripcion() {
		return descripcion;
	}
	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	public int getIdPadre() {
		return idPadre;
	}
	public void setIdPadre(int idPadre) {
		this.idPadre = idPadre;
	}
	public boolean isEstatus() {
		return estatus;
	}
	public void setEstatus(boolean estatus) {
		this.estatus = estatus;
	}
	public List<FacultadesVO> getListaNodos() {
		return listaNodos;
	}
	public void setListaNodos(List<FacultadesVO> listaNodos) {
		this.listaNodos = listaNodos;
	}
}
