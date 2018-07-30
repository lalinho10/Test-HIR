
package org.datacontract.schemas._2004._07.sistran;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para ArrayOfCatalogoProductos complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfCatalogoProductos">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoProductos" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoProductos" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfCatalogoProductos", propOrder = {
    "catalogoProductos"
})
public class ArrayOfCatalogoProductos {

    @XmlElement(name = "CatalogoProductos", nillable = true)
    protected List<CatalogoProductos> catalogoProductos;

    /**
     * Gets the value of the catalogoProductos property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the catalogoProductos property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCatalogoProductos().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CatalogoProductos }
     * 
     * 
     */
    public List<CatalogoProductos> getCatalogoProductos() {
        if (catalogoProductos == null) {
            catalogoProductos = new ArrayList<CatalogoProductos>();
        }
        return this.catalogoProductos;
    }

}
