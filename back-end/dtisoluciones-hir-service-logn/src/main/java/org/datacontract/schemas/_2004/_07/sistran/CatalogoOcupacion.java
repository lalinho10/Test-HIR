
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoOcupacion complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoOcupacion">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="Ocupacion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idOcupacion" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoOcupacion", propOrder = {
    "ocupacion",
    "idOcupacion"
})
public class CatalogoOcupacion {

    @XmlElementRef(name = "Ocupacion", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<String> ocupacion;
    @XmlElementRef(name = "idOcupacion", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<String> idOcupacion;

    /**
     * Obtiene el valor de la propiedad ocupacion.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getOcupacion() {
        return ocupacion;
    }

    /**
     * Define el valor de la propiedad ocupacion.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setOcupacion(JAXBElement<String> value) {
        this.ocupacion = value;
    }

    /**
     * Obtiene el valor de la propiedad idOcupacion.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getIdOcupacion() {
        return idOcupacion;
    }

    /**
     * Define el valor de la propiedad idOcupacion.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setIdOcupacion(JAXBElement<String> value) {
        this.idOcupacion = value;
    }

}
