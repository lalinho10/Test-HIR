
package mx.com.dti.os.service.soap.configuracion.rolfac;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import mx.com.dti.os.service.common.util.comunes.ResponseTxVO;


/**
 * <p>Java class for GuardarRelacionFacRolResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GuardarRelacionFacRolResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GuardarRelacionFacRolResponse" type="{comunes.util.common.eservices.os.planetmedia.com.mx}responseTxVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GuardarRelacionFacRolResponse", propOrder = {
    "guardarRelacionFacRolResponse"
})
public class GuardarRelacionFacRolResponse {

    @XmlElement(name = "GuardarRelacionFacRolResponse", namespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx")
    protected ResponseTxVO guardarRelacionFacRolResponse;

    /**
     * Gets the value of the guardarRelacionFacRolResponse property.
     * 
     * @return
     *     possible object is
     *     {@link ResponseTxVO }
     *     
     */
    public ResponseTxVO getGuardarRelacionFacRolResponse() {
        return guardarRelacionFacRolResponse;
    }

    /**
     * Sets the value of the guardarRelacionFacRolResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link ResponseTxVO }
     *     
     */
    public void setGuardarRelacionFacRolResponse(ResponseTxVO value) {
        this.guardarRelacionFacRolResponse = value;
    }

}
