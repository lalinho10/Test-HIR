
package mx.com.dti.os.service.soap.configuracion.modulos;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ObtenerMenuResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ObtenerMenuResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ObtenerMenuResponse" type="{http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx}modulosResponseVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ObtenerMenuResponse", propOrder = {
    "obtenerMenuResponse"
})
public class ObtenerMenuResponse {

    @XmlElement(name = "ObtenerMenuResponse", namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx")
    protected ModulosResponseVO obtenerMenuResponse;

    /**
     * Gets the value of the obtenerMenuResponse property.
     * 
     * @return
     *     possible object is
     *     {@link ModulosResponseVO }
     *     
     */
    public ModulosResponseVO getObtenerMenuResponse() {
        return obtenerMenuResponse;
    }

    /**
     * Sets the value of the obtenerMenuResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link ModulosResponseVO }
     *     
     */
    public void setObtenerMenuResponse(ModulosResponseVO value) {
        this.obtenerMenuResponse = value;
    }

}
