
package mx.com.dti.os.service.vo.configuracion.roles;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for catRolVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="catRolVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idRol" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="descripcion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="estatus" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "catRolVO", propOrder = {
    "idRol",
    "descripcion",
    "estatus"
})
public class CatRolVO {

    protected int idRol;
    protected String descripcion;
    protected boolean estatus;

    /**
     * Gets the value of the idRol property.
     * 
     */
    public int getIdRol() {
        return idRol;
    }

    /**
     * Sets the value of the idRol property.
     * 
     */
    public void setIdRol(int value) {
        this.idRol = value;
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
     * Gets the value of the estatus property.
     * 
     */
    public boolean isEstatus() {
        return estatus;
    }

    /**
     * Sets the value of the estatus property.
     * 
     */
    public void setEstatus(boolean value) {
        this.estatus = value;
    }

}
