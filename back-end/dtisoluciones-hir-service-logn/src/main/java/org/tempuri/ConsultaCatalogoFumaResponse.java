
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaFuma;


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
 *         &lt;element name="ConsultaCatalogoFumaResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoFrecuenciaFuma" minOccurs="0"/>
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
    "consultaCatalogoFumaResult"
})
@XmlRootElement(name = "ConsultaCatalogoFumaResponse")
public class ConsultaCatalogoFumaResponse {

    @XmlElementRef(name = "ConsultaCatalogoFumaResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoFrecuenciaFuma> consultaCatalogoFumaResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoFumaResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaFuma }{@code >}
     *     
     */
    public JAXBElement<CatalogoFrecuenciaFuma> getConsultaCatalogoFumaResult() {
        return consultaCatalogoFumaResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoFumaResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaFuma }{@code >}
     *     
     */
    public void setConsultaCatalogoFumaResult(JAXBElement<CatalogoFrecuenciaFuma> value) {
        this.consultaCatalogoFumaResult = value;
    }

}
