
package mx.com.dti.os.service.soap.configuracion.rolfac;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import mx.com.dti.os.service.vo.configuracion.rolfac.ConfigRolFacRequestVO;


/**
 * <p>Java class for GuardarRelacionFacRol complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GuardarRelacionFacRol">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GuardarRelacionFacRolRequest" type="{rolfac.configuracion.vo.common.eservices.os.planetmedia.com.mx}configRolFacRequestVO"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GuardarRelacionFacRol", propOrder = {
    "guardarRelacionFacRolRequest"
})
public class GuardarRelacionFacRol {

    @XmlElement(name = "GuardarRelacionFacRolRequest", required = true)
    protected ConfigRolFacRequestVO guardarRelacionFacRolRequest;

    /**
     * Gets the value of the guardarRelacionFacRolRequest property.
     * 
     * @return
     *     possible object is
     *     {@link ConfigRolFacRequestVO }
     *     
     */
    public ConfigRolFacRequestVO getGuardarRelacionFacRolRequest() {
        return guardarRelacionFacRolRequest;
    }

    /**
     * Sets the value of the guardarRelacionFacRolRequest property.
     * 
     * @param value
     *     allowed object is
     *     {@link ConfigRolFacRequestVO }
     *     
     */
    public void setGuardarRelacionFacRolRequest(ConfigRolFacRequestVO value) {
        this.guardarRelacionFacRolRequest = value;
    }

}
