
package mx.com.dti.os.service.soap.configuracion.roles;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import mx.com.dti.os.service.vo.configuracion.roles.CatRolVO;


/**
 * <p>Java class for GuardarRol complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GuardarRol">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GuardarRolRequest" type="{roles.configuracion.vo.common.eservices.os.planetmedia.com.mx}catRolVO"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GuardarRol", propOrder = {
    "guardarRolRequest"
})
public class GuardarRol {

    @XmlElement(name = "GuardarRolRequest", namespace = "", required = true)
    protected CatRolVO guardarRolRequest;

    /**
     * Gets the value of the guardarRolRequest property.
     * 
     * @return
     *     possible object is
     *     {@link CatRolVO }
     *     
     */
    public CatRolVO getGuardarRolRequest() {
        return guardarRolRequest;
    }

    /**
     * Sets the value of the guardarRolRequest property.
     * 
     * @param value
     *     allowed object is
     *     {@link CatRolVO }
     *     
     */
    public void setGuardarRolRequest(CatRolVO value) {
        this.guardarRolRequest = value;
    }

}
