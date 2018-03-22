
package mx.com.dti.os.service.soap.configuracion.servicios;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import mx.com.dti.os.service.vo.configuracion.servicios.ServiciosResponseVO;


/**
 * <p>Java class for ConsultarCatalogoServiciosResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ConsultarCatalogoServiciosResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoServiciosResponse" type="{servicios.configuracion.vo.common.eservices.os.planetmedia.com.mx}serviciosResponseVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ConsultarCatalogoServiciosResponse", propOrder = {
    "catalogoServiciosResponse"
})
public class ConsultarCatalogoServiciosResponse {

    @XmlElement(name = "CatalogoServiciosResponse")
    protected ServiciosResponseVO catalogoServiciosResponse;

    /**
     * Gets the value of the catalogoServiciosResponse property.
     * 
     * @return
     *     possible object is
     *     {@link ServiciosResponseVO }
     *     
     */
    public ServiciosResponseVO getCatalogoServiciosResponse() {
        return catalogoServiciosResponse;
    }

    /**
     * Sets the value of the catalogoServiciosResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link ServiciosResponseVO }
     *     
     */
    public void setCatalogoServiciosResponse(ServiciosResponseVO value) {
        this.catalogoServiciosResponse = value;
    }

}
