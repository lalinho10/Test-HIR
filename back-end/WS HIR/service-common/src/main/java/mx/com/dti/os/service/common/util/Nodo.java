package mx.com.dti.os.service.common.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class Nodo {
	
	private int id;
	private String descipcion;
	private int idPadre;
	private int orden;
	private int idState;
	private String descripcionState;
	private boolean estatus;
	private List<Object> reglas;
	private List<Nodo> elementosNodo;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescipcion() {
		return descipcion;
	}
	public void setDescipcion(String descipcion) {
		this.descipcion = descipcion;
	}
	public int getIdPadre() {
		return idPadre;
	}
	public void setIdPadre(int idPadre) {
		this.idPadre = idPadre;
	}
	public List<Nodo> getElementosNodo() {
		return elementosNodo;
	}
	public void setElementosNodo(List<Nodo> elementosNodo) {
		this.elementosNodo = elementosNodo;
	}
	public int getOrden() {
		return orden;
	}
	public void setOrden(int orden) {
		this.orden = orden;
	}
	public int getIdState() {
		return idState;
	}
	public void setIdState(int idState) {
		this.idState = idState;
	}	
	public String getDescripcionState() {
		return descripcionState;
	}
	public void setDescripcionState(String descripcionState) {
		this.descripcionState = descripcionState;
	}	
	public boolean isEstatus() {
		return estatus;
	}
	public void setEstatus(boolean estatus) {
		this.estatus = estatus;
	}
	public List<Object> getReglas() {
		return reglas;
	}
	public void setReglas(List<Object> reglas) {
		this.reglas = reglas;
	}
	
	public List<Nodo> getHijos(Integer padre, long nivel, TreeMap<Integer, Nodo> arbol) {
		nivel++;
		List<Nodo> hijos = new ArrayList<Nodo>();
		// Obtener hijos
		for (Map.Entry<Integer, Nodo> entry : arbol.entrySet()) {
			Integer key = entry.getKey();
			Nodo value = entry.getValue();
			if (value.getIdPadre() == padre.intValue()) {
				Nodo nodo = new Nodo();
				nodo.setId(value.getId());
				nodo.setDescipcion(value.getDescipcion());
				nodo.setIdPadre(value.getIdPadre());
				nodo.setOrden(value.getOrden());
				nodo.setIdState(value.getIdState());
				nodo.setDescripcionState(value.getDescripcionState());
				nodo.setEstatus(value.isEstatus());
				nodo.setReglas(value.getReglas());
				nodo.setElementosNodo(getHijos(key, nivel, arbol));
				hijos.add(nodo);
			}
		}
		return hijos;
	}
}
