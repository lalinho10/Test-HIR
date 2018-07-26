
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.ArrayOfCatalogoCoberturas;


/**
 * <p>Clase Java para anonymous complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ConsultaCatalogoCoberturasResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoCoberturas" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "consultaCatalogoCoberturasResult"
})
@XmlRootElement(name = "ConsultaCatalogoCoberturasResponse")
public class ConsultaCatalogoCoberturasResponse {

    @XmlElementRef(name = "ConsultaCatalogoCoberturasResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoCoberturas> consultaCatalogoCoberturasResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoCoberturasResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoCoberturas }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoCoberturas> getConsultaCatalogoCoberturasResult() {
        return consultaCatalogoCoberturasResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoCoberturasResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoCoberturas }{@code >}
     *     
     */
    public void setConsultaCatalogoCoberturasResult(JAXBElement<ArrayOfCatalogoCoberturas> value) {
        this.consultaCatalogoCoberturasResult = value;
    }

}
