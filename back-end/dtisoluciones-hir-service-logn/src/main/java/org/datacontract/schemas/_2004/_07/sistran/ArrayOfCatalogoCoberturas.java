
package org.datacontract.schemas._2004._07.sistran;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para ArrayOfCatalogoCoberturas complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfCatalogoCoberturas">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoCoberturas" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoCoberturas" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfCatalogoCoberturas", propOrder = {
    "catalogoCoberturas"
})
public class ArrayOfCatalogoCoberturas {

    @XmlElement(name = "CatalogoCoberturas", nillable = true)
    protected List<CatalogoCoberturas> catalogoCoberturas;

    /**
     * Gets the value of the catalogoCoberturas property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the catalogoCoberturas property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCatalogoCoberturas().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CatalogoCoberturas }
     * 
     * 
     */
    public List<CatalogoCoberturas> getCatalogoCoberturas() {
        if (catalogoCoberturas == null) {
            catalogoCoberturas = new ArrayList<CatalogoCoberturas>();
        }
        return this.catalogoCoberturas;
    }

}
