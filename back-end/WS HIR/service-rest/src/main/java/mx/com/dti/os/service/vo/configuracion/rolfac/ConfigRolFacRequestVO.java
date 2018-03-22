
package mx.com.dti.os.service.vo.configuracion.rolfac;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for configRolFacRequestVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="configRolFacRequestVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="rolesFacultades" type="{rolfac.configuracion.vo.common.eservices.os.planetmedia.com.mx}configRolFacVO" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "configRolFacRequestVO", propOrder = {
    "rolesFacultades"
})
public class ConfigRolFacRequestVO {

    protected List<ConfigRolFacVO> rolesFacultades;

    /**
     * Gets the value of the rolesFacultades property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the rolesFacultades property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getRolesFacultades().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ConfigRolFacVO }
     * 
     * 
     */
    public List<ConfigRolFacVO> getRolesFacultades() {
        if (rolesFacultades == null) {
            rolesFacultades = new ArrayList<ConfigRolFacVO>();
        }
        return this.rolesFacultades;
    }

}
