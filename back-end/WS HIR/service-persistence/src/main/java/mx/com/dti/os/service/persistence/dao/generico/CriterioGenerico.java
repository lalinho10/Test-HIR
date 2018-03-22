package mx.com.dti.os.service.persistence.dao.generico;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class CriterioGenerico <T extends Comparable<T>> {

	private String nombreColumna;
	private String operadorCondicion;
	private String operadorLogico;
	private T valor;
	private Class<T> tipoDato;
	
	/**
	 * operadorCondicion vacio = where, and = and yor = or
	 * @return
	 */
	public CriterioGenerico(String nombreColumna, String operadorCondicion, String operadorLogico, T valor,
			Class<T> tipoDato) {
		super();
		this.nombreColumna = nombreColumna;
		this.operadorCondicion = operadorCondicion;
		this.operadorLogico = operadorLogico;
		this.valor = valor;
		this.tipoDato = tipoDato;
	}
	
	public <R> Predicate toPredicate(CriteriaBuilder cb, Root<R> root) {
		Predicate predicateOut = null;
        if(">".equals(operadorLogico)) {
        	predicateOut =  cb.greaterThan(root.<T>get(nombreColumna), valor);
        }
        if("<".equals(operadorLogico)) {
        	predicateOut =  cb.lessThan(root.<T>get(nombreColumna), valor);
        }
        if(">=".equals(operadorLogico)) {
        	predicateOut =  cb.greaterThanOrEqualTo(root.<T>get(nombreColumna), valor);
        }
        if("<=".equals(operadorLogico)) {
        	predicateOut =  cb.lessThanOrEqualTo(root.<T>get(nombreColumna), valor);
        }
        if("=".equals(operadorLogico)) {
        	predicateOut =  cb.equal(root.<T>get(nombreColumna), valor);
        }
        if("!=".equals(operadorLogico)) {
        	predicateOut =  cb.notEqual(root.<T>get(nombreColumna), valor);
        }
        if ("like".equals(operadorLogico)) {
        	predicateOut =  cb.like(root.<String>get(nombreColumna), "%"+valor+"%");
        }
        if ("in".equals(operadorLogico)) {
        	List<Integer> ids = new ArrayList<>();
        	String[] idsArray = ((String)valor).split(",");
        	for(int i=0; i < idsArray.length; i++){
        		ids.add(Integer.parseInt(idsArray[i]));
        	}
        	Expression<T> expr = root.<T>get(nombreColumna);
        	predicateOut =  expr.in(ids);
        }
		return predicateOut;
    }
	
	public String getNombreColumna() {
		return nombreColumna;
	}
	public void setNombreColumna(String nombreColumna) {
		this.nombreColumna = nombreColumna;
	}
	public String getOperadorCondicion() {
		return operadorCondicion;
	}
	public void setOperadorCondicion(String operadorCondicion) {
		this.operadorCondicion = operadorCondicion;
	}
	public String getOperadorLogico() {
		return operadorLogico;
	}
	public void setOperadorLogico(String operadorLogico) {
		this.operadorLogico = operadorLogico;
	}
	public T getValor() {
		return valor;
	}
	public void setValor(T valor) {
		this.valor = valor;
	}
	public Class<T> getTipoDato() {
		return tipoDato;
	}
	public void setTipoDato(Class<T> tipoDato) {
		this.tipoDato = tipoDato;
	}
}
