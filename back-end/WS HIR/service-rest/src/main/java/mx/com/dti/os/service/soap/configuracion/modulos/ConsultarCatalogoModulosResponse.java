
package mx.com.dti.os.service.soap.configuracion.modulos;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ConsultarCatalogoModulosResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ConsultarCatalogoModulosResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoModulosResponse" type="{http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx}modulosResponseVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ConsultarCatalogoModulosResponse", propOrder = {
    "catalogoModulosResponse"
})
public class ConsultarCatalogoModulosResponse {

    @XmlElement(name = "CatalogoModulosResponse", namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx")
    protected ModulosResponseVO catalogoModulosResponse;

    /**
     * Gets the value of the catalogoModulosResponse property.
     * 
     * @return
     *     possible object is
     *     {@link ModulosResponseVO }
     *     
     */
    public ModulosResponseVO getCatalogoModulosResponse() {
        return catalogoModulosResponse;
    }

    /**
     * Sets the value of the catalogoModulosResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link ModulosResponseVO }
     *     
     */
    public void setCatalogoModulosResponse(ModulosResponseVO value) {
        this.catalogoModulosResponse = value;
    }

}
