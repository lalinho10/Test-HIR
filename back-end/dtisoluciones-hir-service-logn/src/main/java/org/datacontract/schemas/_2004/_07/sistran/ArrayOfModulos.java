
package org.datacontract.schemas._2004._07.sistran;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para ArrayOfModulos complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfModulos">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Modulos" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}Modulos" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfModulos", propOrder = {
    "modulos"
})
public class ArrayOfModulos {

    @XmlElement(name = "Modulos", nillable = true)
    protected List<Modulos> modulos;

    /**
     * Gets the value of the modulos property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the modulos property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getModulos().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Modulos }
     * 
     * 
     */
    public List<Modulos> getModulos() {
        if (modulos == null) {
            modulos = new ArrayList<Modulos>();
        }
        return this.modulos;
    }

}
