
package org.datacontract.schemas._2004._07.sistran;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para ArrayOfCatalogoTDeporte complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfCatalogoTDeporte">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="CatalogoTDeporte" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoTDeporte" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfCatalogoTDeporte", propOrder = {
    "catalogoTDeporte"
})
public class ArrayOfCatalogoTDeporte {

    @XmlElement(name = "CatalogoTDeporte", nillable = true)
    protected List<CatalogoTDeporte> catalogoTDeporte;

    /**
     * Gets the value of the catalogoTDeporte property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the catalogoTDeporte property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCatalogoTDeporte().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CatalogoTDeporte }
     * 
     * 
     */
    public List<CatalogoTDeporte> getCatalogoTDeporte() {
        if (catalogoTDeporte == null) {
            catalogoTDeporte = new ArrayList<CatalogoTDeporte>();
        }
        return this.catalogoTDeporte;
    }

}
