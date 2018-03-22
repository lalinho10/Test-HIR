
package mx.com.dti.os.service.soap.configuracion.modulos;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for moduloReglaVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="moduloReglaVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="estatus" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="idFacultad" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="idModulo" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="idServicio" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="operLogico" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "moduloReglaVO", propOrder = {
    "estatus",
    "idFacultad",
    "idModulo",
    "idServicio",
    "operLogico"
})
public class ModuloReglaVO {

    protected Boolean estatus;
    protected Integer idFacultad;
    protected Integer idModulo;
    protected Integer idServicio;
    protected String operLogico;

    /**
     * Gets the value of the estatus property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isEstatus() {
        return estatus;
    }

    /**
     * Sets the value of the estatus property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setEstatus(Boolean value) {
        this.estatus = value;
    }

    /**
     * Gets the value of the idFacultad property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIdFacultad() {
        return idFacultad;
    }

    /**
     * Sets the value of the idFacultad property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIdFacultad(Integer value) {
        this.idFacultad = value;
    }

    /**
     * Gets the value of the idModulo property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIdModulo() {
        return idModulo;
    }

    /**
     * Sets the value of the idModulo property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIdModulo(Integer value) {
        this.idModulo = value;
    }

    /**
     * Gets the value of the idServicio property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIdServicio() {
        return idServicio;
    }

    /**
     * Sets the value of the idServicio property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIdServicio(Integer value) {
        this.idServicio = value;
    }

    /**
     * Gets the value of the operLogico property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOperLogico() {
        return operLogico;
    }

    /**
     * Sets the value of the operLogico property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOperLogico(String value) {
        this.operLogico = value;
    }

}
