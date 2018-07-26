
package org.datacontract.schemas._2004._07.sistran;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para ArrayOfCatalogoConocimiento complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfCatalogoConocimiento">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoConocimiento" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoConocimiento" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfCatalogoConocimiento", propOrder = {
    "catalogoConocimiento"
})
public class ArrayOfCatalogoConocimiento {

    @XmlElement(name = "CatalogoConocimiento", nillable = true)
    protected List<CatalogoConocimiento> catalogoConocimiento;

    /**
     * Gets the value of the catalogoConocimiento property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the catalogoConocimiento property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCatalogoConocimiento().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CatalogoConocimiento }
     * 
     * 
     */
    public List<CatalogoConocimiento> getCatalogoConocimiento() {
        if (catalogoConocimiento == null) {
            catalogoConocimiento = new ArrayList<CatalogoConocimiento>();
        }
        return this.catalogoConocimiento;
    }

}
