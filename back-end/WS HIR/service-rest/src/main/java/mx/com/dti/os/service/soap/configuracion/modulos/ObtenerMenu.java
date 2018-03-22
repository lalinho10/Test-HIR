
package mx.com.dti.os.service.soap.configuracion.modulos;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ObtenerMenu complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ObtenerMenu">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ObtenerMenuRequest" type="{http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx}facRolRequestVO"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ObtenerMenu", propOrder = {
    "obtenerMenuRequest"
})
public class ObtenerMenu {

    @XmlElement(name = "ObtenerMenuRequest", required = true)
    protected FacRolRequestVO obtenerMenuRequest;

    /**
     * Gets the value of the obtenerMenuRequest property.
     * 
     * @return
     *     possible object is
     *     {@link FacRolRequestVO }
     *     
     */
    public FacRolRequestVO getObtenerMenuRequest() {
        return obtenerMenuRequest;
    }

    /**
     * Sets the value of the obtenerMenuRequest property.
     * 
     * @param value
     *     allowed object is
     *     {@link FacRolRequestVO }
     *     
     */
    public void setObtenerMenuRequest(FacRolRequestVO value) {
        this.obtenerMenuRequest = value;
    }

}
