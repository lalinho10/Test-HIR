
package mx.com.dti.os.service.vo.configuracion.facultades;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for facultadesVO complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="facultadesVO">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="idFacultad" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="descripcion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idPadre" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="estatus" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="listaNodos" type="{facultades.configuracion.vo.common.eservices.os.planetmedia.com.mx}facultadesVO" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "facultadesVO", propOrder = {
    "idFacultad",
    "descripcion",
    "idPadre",
    "estatus",
    "listaNodos"
})
public class FacultadesVO {

    protected int idFacultad;
    protected String descripcion;
    protected int idPadre;
    protected boolean estatus;
    protected List<FacultadesVO> listaNodos;

    /**
     * Gets the value of the idFacultad property.
     * 
     */
    public int getIdFacultad() {
        return idFacultad;
    }

    /**
     * Sets the value of the idFacultad property.
     * 
     */
    public void setIdFacultad(int value) {
        this.idFacultad = value;
    }

    /**
     * Gets the value of the descripcion property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * Sets the value of the descripcion property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDescripcion(String value) {
        this.descripcion = value;
    }

    /**
     * Gets the value of the idPadre property.
     * 
     */
    public int getIdPadre() {
        return idPadre;
    }

    /**
     * Sets the value of the idPadre property.
     * 
     */
    public void setIdPadre(int value) {
        this.idPadre = value;
    }

    /**
     * Gets the value of the estatus property.
     * 
     */
    public boolean isEstatus() {
        return estatus;
    }

    /**
     * Sets the value of the estatus property.
     * 
     */
    public void setEstatus(boolean value) {
        this.estatus = value;
    }

    /**
     * Gets the value of the listaNodos property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the listaNodos property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getListaNodos().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link FacultadesVO }
     * 
     * 
     */
    public List<FacultadesVO> getListaNodos() {
        if (listaNodos == null) {
            listaNodos = new ArrayList<FacultadesVO>();
        }
        return this.listaNodos;
    }

}
