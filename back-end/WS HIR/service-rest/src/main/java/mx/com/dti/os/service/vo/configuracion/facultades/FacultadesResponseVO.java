
package mx.com.dti.os.service.vo.configuracion.facultades;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for facultadesResponseVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="facultadesResponseVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="mensaje" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="facultades" type="{facultades.configuracion.vo.common.eservices.os.planetmedia.com.mx}facultadesVO" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "facultadesResponseVO", propOrder = {
    "mensaje",
    "facultades"
})
public class FacultadesResponseVO {

    protected String mensaje;
    protected List<FacultadesVO> facultades;

    /**
     * Gets the value of the mensaje property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMensaje() {
        return mensaje;
    }

    /**
     * Sets the value of the mensaje property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMensaje(String value) {
        this.mensaje = value;
    }

    /**
     * Gets the value of the facultades property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the facultades property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getFacultades().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link FacultadesVO }
     * 
     * 
     */
    public List<FacultadesVO> getFacultades() {
        if (facultades == null) {
            facultades = new ArrayList<FacultadesVO>();
        }
        return this.facultades;
    }

}
