
package mx.com.dti.os.service.soap.configuracion.modulos;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for GuardaModulo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="GuardaModulo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="GuardarModuloRequest" type="{http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx}moduloRequestVO"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "GuardaModulo", propOrder = {
    "guardarModuloRequest"
})
public class GuardaModulo {

    @XmlElement(name = "GuardarModuloRequest", required = true)
    protected ModuloRequestVO guardarModuloRequest;

    /**
     * Gets the value of the guardarModuloRequest property.
     * 
     * @return
     *     possible object is
     *     {@link ModuloRequestVO }
     *     
     */
    public ModuloRequestVO getGuardarModuloRequest() {
        return guardarModuloRequest;
    }

    /**
     * Sets the value of the guardarModuloRequest property.
     * 
     * @param value
     *     allowed object is
     *     {@link ModuloRequestVO }
     *     
     */
    public void setGuardarModuloRequest(ModuloRequestVO value) {
        this.guardarModuloRequest = value;
    }

}
