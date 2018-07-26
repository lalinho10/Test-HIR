
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoFuma complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoFuma">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="descripcionFuma" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idFrecuenciaFuma" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoFuma", propOrder = {
    "descripcionFuma",
    "idFrecuenciaFuma"
})
public class CatalogoFuma {

    @XmlElementRef(name = "descripcionFuma", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<String> descripcionFuma;
    protected Integer idFrecuenciaFuma;

    /**
     * Obtiene el valor de la propiedad descripcionFuma.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getDescripcionFuma() {
        return descripcionFuma;
    }

    /**
     * Define el valor de la propiedad descripcionFuma.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setDescripcionFuma(JAXBElement<String> value) {
        this.descripcionFuma = value;
    }

    /**
     * Obtiene el valor de la propiedad idFrecuenciaFuma.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIdFrecuenciaFuma() {
        return idFrecuenciaFuma;
    }

    /**
     * Define el valor de la propiedad idFrecuenciaFuma.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIdFrecuenciaFuma(Integer value) {
        this.idFrecuenciaFuma = value;
    }

}
