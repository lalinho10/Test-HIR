
package mx.com.dti.os.service.soap.configuracion.facultades;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import mx.com.dti.os.service.common.util.comunes.RespuestaVO;


/**
 * <p>Java class for GuardarFacultadResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GuardarFacultadResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GuardarFacultadResponse" type="{comunes.util.common.eservices.os.planetmedia.com.mx}responseTxVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GuardarFacultadResponse", propOrder = {
    "guardarFacultadResponse"
})
public class GuardarFacultadResponse {

    @XmlElement(name = "GuardarFacultadResponse", namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx")
    protected RespuestaVO guardarFacultadResponse;

    /**
     * Gets the value of the guardarFacultadResponse property.
     * 
     * @return
     *     possible object is
     *     {@link RespuestaVO }
     *     
     */
    public RespuestaVO getGuardarFacultadResponse() {
        return guardarFacultadResponse;
    }

    /**
     * Sets the value of the guardarFacultadResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link RespuestaVO }
     *     
     */
    public void setGuardarFacultadResponse(RespuestaVO value) {
        this.guardarFacultadResponse = value;
    }

}
