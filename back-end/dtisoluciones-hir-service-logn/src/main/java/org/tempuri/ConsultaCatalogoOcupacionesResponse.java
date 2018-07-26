
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoOcupacionRepuestas;


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
 *         &lt;element name="ConsultaCatalogoOcupacionesResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoOcupacionRepuestas" minOccurs="0"/>
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
    "consultaCatalogoOcupacionesResult"
})
@XmlRootElement(name = "ConsultaCatalogoOcupacionesResponse")
public class ConsultaCatalogoOcupacionesResponse {

    @XmlElementRef(name = "ConsultaCatalogoOcupacionesResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoOcupacionRepuestas> consultaCatalogoOcupacionesResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoOcupacionesResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoOcupacionRepuestas }{@code >}
     *     
     */
    public JAXBElement<CatalogoOcupacionRepuestas> getConsultaCatalogoOcupacionesResult() {
        return consultaCatalogoOcupacionesResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoOcupacionesResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoOcupacionRepuestas }{@code >}
     *     
     */
    public void setConsultaCatalogoOcupacionesResult(JAXBElement<CatalogoOcupacionRepuestas> value) {
        this.consultaCatalogoOcupacionesResult = value;
    }

}
