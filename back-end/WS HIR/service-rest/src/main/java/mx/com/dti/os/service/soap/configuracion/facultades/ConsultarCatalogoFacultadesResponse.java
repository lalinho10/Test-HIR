
package mx.com.dti.os.service.soap.configuracion.facultades;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

import mx.com.dti.os.service.vo.configuracion.facultades.FacultadesResponseVO;


/**
 * <p>Java class for ConsultarCatalogoFacultadesResponse complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ConsultarCatalogoFacultadesResponse">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoFacultadesResponse" type="{facultades.configuracion.vo.common.eservices.os.planetmedia.com.mx}facultadesResponseVO" minOccurs="0" form="qualified"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ConsultarCatalogoFacultadesResponse", propOrder = {
    "catalogoFacultadesResponse"
})
public class ConsultarCatalogoFacultadesResponse {

    @XmlElement(name = "CatalogoFacultadesResponse", namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx")
    protected FacultadesResponseVO catalogoFacultadesResponse;

    /**
     * Gets the value of the catalogoFacultadesResponse property.
     * 
     * @return
     *     possible object is
     *     {@link FacultadesResponseVO }
     *     
     */
    public FacultadesResponseVO getCatalogoFacultadesResponse() {
        return catalogoFacultadesResponse;
    }

    /**
     * Sets the value of the catalogoFacultadesResponse property.
     * 
     * @param value
     *     allowed object is
     *     {@link FacultadesResponseVO }
     *     
     */
    public void setCatalogoFacultadesResponse(FacultadesResponseVO value) {
        this.catalogoFacultadesResponse = value;
    }

}
