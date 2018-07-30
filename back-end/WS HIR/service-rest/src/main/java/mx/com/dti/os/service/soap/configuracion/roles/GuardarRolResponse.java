
package mx.com.dti.os.service.soap.configuracion.roles;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import mx.com.dti.os.service.common.util.comunes.RespuestaVO;


/**
 * <p>Java class for GuardarRolResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GuardarRolResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GuardarRolResponse" type="{comunes.util.common.eservices.os.planetmedia.com.mx}responseTxVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GuardarRolResponse", propOrder = {
    "guardarRolResponse"
})
public class GuardarRolResponse {

    @XmlElement(name = "GuardarRolResponse")
    protected RespuestaVO guardarRolResponse;

    /**
     * Gets the value of the guardarRolResponse property.
     * 
     * @return
     *     possible object is
     *     {@link RespuestaVO }
     *     
     */
    public RespuestaVO getGuardarRolResponse() {
        return guardarRolResponse;
    }

    /**
     * Sets the value of the guardarRolResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link RespuestaVO }
     *     
     */
    public void setGuardarRolResponse(RespuestaVO value) {
        this.guardarRolResponse = value;
    }

}
