
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoBebida complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoBebida">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="descripcionBebida" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idFrecuenciaBebida" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoBebida", propOrder = {
    "descripcionBebida",
    "idFrecuenciaBebida"
})
public class CatalogoBebida {

    @XmlElementRef(name = "descripcionBebida", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<String> descripcionBebida;
    protected Integer idFrecuenciaBebida;

    /**
     * Obtiene el valor de la propiedad descripcionBebida.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getDescripcionBebida() {
        return descripcionBebida;
    }

    /**
     * Define el valor de la propiedad descripcionBebida.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setDescripcionBebida(JAXBElement<String> value) {
        this.descripcionBebida = value;
    }

    /**
     * Obtiene el valor de la propiedad idFrecuenciaBebida.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIdFrecuenciaBebida() {
        return idFrecuenciaBebida;
    }

    /**
     * Define el valor de la propiedad idFrecuenciaBebida.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIdFrecuenciaBebida(Integer value) {
        this.idFrecuenciaBebida = value;
    }

}
