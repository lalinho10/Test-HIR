
package mx.com.dti.os.service.soap.configuracion.roles;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import mx.com.dti.os.service.vo.configuracion.roles.RolesResponseVO;


/**
 * <p>Java class for ConsultarCatalogoRolesResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ConsultarCatalogoRolesResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoRolesResponse" type="{roles.configuracion.vo.common.eservices.os.planetmedia.com.mx}rolesResponseVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ConsultarCatalogoRolesResponse", propOrder = {
    "catalogoRolesResponse"
})
public class ConsultarCatalogoRolesResponse {

    @XmlElement(name = "CatalogoRolesResponse")
    protected RolesResponseVO catalogoRolesResponse;

    /**
     * Gets the value of the catalogoRolesResponse property.
     * 
     * @return
     *     possible object is
     *     {@link RolesResponseVO }
     *     
     */
    public RolesResponseVO getCatalogoRolesResponse() {
        return catalogoRolesResponse;
    }

    /**
     * Sets the value of the catalogoRolesResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link RolesResponseVO }
     *     
     */
    public void setCatalogoRolesResponse(RolesResponseVO value) {
        this.catalogoRolesResponse = value;
    }

}
