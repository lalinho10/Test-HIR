
package mx.com.dti.os.service.soap.configuracion.facultades;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for GuardarFacultad complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GuardarFacultad">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GuardarFacultadRequest" type="{http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx}catFacultadRequestVO"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GuardarFacultad", propOrder = {
    "guardarFacultadRequest"
})
public class GuardarFacultad {

    @XmlElement(name = "GuardarFacultadRequest", required = true)
    protected CatFacultadRequestVO guardarFacultadRequest;

    /**
     * Gets the value of the guardarFacultadRequest property.
     * 
     * @return
     *     possible object is
     *     {@link CatFacultadRequestVO }
     *     
     */
    public CatFacultadRequestVO getGuardarFacultadRequest() {
        return guardarFacultadRequest;
    }

    /**
     * Sets the value of the guardarFacultadRequest property.
     * 
     * @param value
     *     allowed object is
     *     {@link CatFacultadRequestVO }
     *     
     */
    public void setGuardarFacultadRequest(CatFacultadRequestVO value) {
        this.guardarFacultadRequest = value;
    }

}
