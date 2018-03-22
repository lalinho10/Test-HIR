
package mx.com.dti.os.service.soap.configuracion.modulos;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for GuardaModuloResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GuardaModuloResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GuardarModuloResponse" type="{http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx}modulosResponseVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GuardaModuloResponse", propOrder = {
    "guardarModuloResponse"
})
public class GuardaModuloResponse {

    @XmlElement(name = "GuardarModuloResponse", namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx")
    protected ModulosResponseVO guardarModuloResponse;

    /**
     * Gets the value of the guardarModuloResponse property.
     * 
     * @return
     *     possible object is
     *     {@link ModulosResponseVO }
     *     
     */
    public ModulosResponseVO getGuardarModuloResponse() {
        return guardarModuloResponse;
    }

    /**
     * Sets the value of the guardarModuloResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link ModulosResponseVO }
     *     
     */
    public void setGuardarModuloResponse(ModulosResponseVO value) {
        this.guardarModuloResponse = value;
    }

}
