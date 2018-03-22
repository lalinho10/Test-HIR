
package mx.com.dti.os.service.vo.configuracion.rolfac;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for configRolFacVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="configRolFacVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idRol" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="idFacultad" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="activo" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "configRolFacVO", propOrder = {
    "idRol",
    "idFacultad",
    "activo"
})
public class ConfigRolFacVO {

    protected int idRol;
    protected int idFacultad;
    protected boolean activo;

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
     * Gets the value of the idFacultad property.
     * 
     */
    public int getIdFacultad() {
        return idFacultad;
    }

    /**
     * Sets the value of the idFacultad property.
     * 
     */
    public void setIdFacultad(int value) {
        this.idFacultad = value;
    }

    /**
     * Gets the value of the activo property.
     * 
     */
    public boolean isActivo() {
        return activo;
    }

    /**
     * Sets the value of the activo property.
     * 
     */
    public void setActivo(boolean value) {
        this.activo = value;
    }

}
