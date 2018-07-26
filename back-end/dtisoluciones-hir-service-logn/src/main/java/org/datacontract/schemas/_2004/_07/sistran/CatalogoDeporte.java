
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoDeporte complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoDeporte">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="descripcionDeporte" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="idFrecuenciaDeporte" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoDeporte", propOrder = {
    "descripcionDeporte",
    "idFrecuenciaDeporte"
})
public class CatalogoDeporte {

    @XmlElementRef(name = "descripcionDeporte", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<String> descripcionDeporte;
    protected Integer idFrecuenciaDeporte;

    /**
     * Obtiene el valor de la propiedad descripcionDeporte.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getDescripcionDeporte() {
        return descripcionDeporte;
    }

    /**
     * Define el valor de la propiedad descripcionDeporte.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setDescripcionDeporte(JAXBElement<String> value) {
        this.descripcionDeporte = value;
    }

    /**
     * Obtiene el valor de la propiedad idFrecuenciaDeporte.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIdFrecuenciaDeporte() {
        return idFrecuenciaDeporte;
    }

    /**
     * Define el valor de la propiedad idFrecuenciaDeporte.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIdFrecuenciaDeporte(Integer value) {
        this.idFrecuenciaDeporte = value;
    }

}
