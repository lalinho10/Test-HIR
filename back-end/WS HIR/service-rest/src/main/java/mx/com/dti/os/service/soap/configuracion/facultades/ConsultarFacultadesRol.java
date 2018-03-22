
package mx.com.dti.os.service.soap.configuracion.facultades;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for ConsultarFacultadesRol complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="ConsultarFacultadesRol">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ConsultarFacultadesRolRequest" type="{http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx}facRolRequestVO"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ConsultarFacultadesRol", propOrder = {
    "consultarFacultadesRolRequest"
})
public class ConsultarFacultadesRol {

    @XmlElement(name = "ConsultarFacultadesRolRequest", required = true)
    protected FacRolRequestVO consultarFacultadesRolRequest;

    /**
     * Gets the value of the consultarFacultadesRolRequest property.
     * 
     * @return
     *     possible object is
     *     {@link FacRolRequestVO }
     *     
     */
    public FacRolRequestVO getConsultarFacultadesRolRequest() {
        return consultarFacultadesRolRequest;
    }

    /**
     * Sets the value of the consultarFacultadesRolRequest property.
     * 
     * @param value
     *     allowed object is
     *     {@link FacRolRequestVO }
     *     
     */
    public void setConsultarFacultadesRolRequest(FacRolRequestVO value) {
        this.consultarFacultadesRolRequest = value;
    }

}
