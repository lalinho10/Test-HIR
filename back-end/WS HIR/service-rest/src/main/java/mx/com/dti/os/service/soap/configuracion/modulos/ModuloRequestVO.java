
package mx.com.dti.os.service.soap.configuracion.modulos;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for moduloRequestVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="moduloRequestVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="activo" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="descripcion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="icono" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idModulo" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="idPadre" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="idState" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="orden" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="reglas" type="{http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx}moduloReglaVO" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "moduloRequestVO", propOrder = {
    "activo",
    "descripcion",
    "icono",
    "idModulo",
    "idPadre",
    "idState",
    "orden",
    "reglas"
})
public class ModuloRequestVO {

    protected Boolean activo;
    protected String descripcion;
    protected String icono;
    protected int idModulo;
    protected int idPadre;
    protected int idState;
    protected int orden;
    @XmlElement(nillable = true)
    protected List<ModuloReglaVO> reglas;

    /**
     * Gets the value of the activo property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isActivo() {
        return activo;
    }

    /**
     * Sets the value of the activo property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setActivo(Boolean value) {
        this.activo = value;
    }

    /**
     * Gets the value of the descripcion property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * Sets the value of the descripcion property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescripcion(String value) {
        this.descripcion = value;
    }

    /**
     * Gets the value of the icono property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getIcono() {
        return icono;
    }

    /**
     * Sets the value of the icono property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setIcono(String value) {
        this.icono = value;
    }

    /**
     * Gets the value of the idModulo property.
     * 
     */
    public int getIdModulo() {
        return idModulo;
    }

    /**
     * Sets the value of the idModulo property.
     * 
     */
    public void setIdModulo(int value) {
        this.idModulo = value;
    }

    /**
     * Gets the value of the idPadre property.
     * 
     */
    public int getIdPadre() {
        return idPadre;
    }

    /**
     * Sets the value of the idPadre property.
     * 
     */
    public void setIdPadre(int value) {
        this.idPadre = value;
    }

    /**
     * Gets the value of the idState property.
     * 
     */
    public int getIdState() {
        return idState;
    }

    /**
     * Sets the value of the idState property.
     * 
     */
    public void setIdState(int value) {
        this.idState = value;
    }

    /**
     * Gets the value of the orden property.
     * 
     */
    public int getOrden() {
        return orden;
    }

    /**
     * Sets the value of the orden property.
     * 
     */
    public void setOrden(int value) {
        this.orden = value;
    }

    /**
     * Gets the value of the reglas property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the reglas property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getReglas().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ModuloReglaVO }
     * 
     * 
     */
    public List<ModuloReglaVO> getReglas() {
        if (reglas == null) {
            reglas = new ArrayList<ModuloReglaVO>();
        }
        return this.reglas;
    }

}
