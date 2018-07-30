
package org.datacontract.schemas._2004._07.sistran;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para ArrayOfCatalogoBebida complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfCatalogoBebida">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoBebida" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoBebida" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfCatalogoBebida", propOrder = {
    "catalogoBebida"
})
public class ArrayOfCatalogoBebida {

    @XmlElement(name = "CatalogoBebida", nillable = true)
    protected List<CatalogoBebida> catalogoBebida;

    /**
     * Gets the value of the catalogoBebida property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the catalogoBebida property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCatalogoBebida().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CatalogoBebida }
     * 
     * 
     */
    public List<CatalogoBebida> getCatalogoBebida() {
        if (catalogoBebida == null) {
            catalogoBebida = new ArrayList<CatalogoBebida>();
        }
        return this.catalogoBebida;
    }

}
