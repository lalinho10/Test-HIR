
package org.datacontract.schemas._2004._07.sistran;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para ArrayOfConsultaCatalogoFormaPago complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfConsultaCatalogoFormaPago">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ConsultaCatalogoFormaPago" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ConsultaCatalogoFormaPago" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfConsultaCatalogoFormaPago", propOrder = {
    "consultaCatalogoFormaPago"
})
public class ArrayOfConsultaCatalogoFormaPago {

    @XmlElement(name = "ConsultaCatalogoFormaPago", nillable = true)
    protected List<ConsultaCatalogoFormaPago> consultaCatalogoFormaPago;

    /**
     * Gets the value of the consultaCatalogoFormaPago property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the consultaCatalogoFormaPago property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getConsultaCatalogoFormaPago().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ConsultaCatalogoFormaPago }
     * 
     * 
     */
    public List<ConsultaCatalogoFormaPago> getConsultaCatalogoFormaPago() {
        if (consultaCatalogoFormaPago == null) {
            consultaCatalogoFormaPago = new ArrayList<ConsultaCatalogoFormaPago>();
        }
        return this.consultaCatalogoFormaPago;
    }

}
