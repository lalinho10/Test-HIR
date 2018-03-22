
package mx.com.dti.os.service.soap.configuracion.states;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ConsultarCatalogoStatesResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ConsultarCatalogoStatesResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoStatesResponse" type="{http://states.configuracion.soap.eservices.os.planetmedia.com.mx}catStateResponseVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ConsultarCatalogoStatesResponse", propOrder = {
    "catalogoStatesResponse"
})
public class ConsultarCatalogoStatesResponse {

    @XmlElement(name = "CatalogoStatesResponse", namespace = "http://states.configuracion.soap.eservices.os.planetmedia.com.mx")
    protected CatStateResponseVO catalogoStatesResponse;

    /**
     * Gets the value of the catalogoStatesResponse property.
     * 
     * @return
     *     possible object is
     *     {@link CatStateResponseVO }
     *     
     */
    public CatStateResponseVO getCatalogoStatesResponse() {
        return catalogoStatesResponse;
    }

    /**
     * Sets the value of the catalogoStatesResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link CatStateResponseVO }
     *     
     */
    public void setCatalogoStatesResponse(CatStateResponseVO value) {
        this.catalogoStatesResponse = value;
    }

}
