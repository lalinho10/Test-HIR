
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.ArrayOfConsultaCatalogoFormaPago;


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
 *         &lt;element name="CotizaFormaDePagoResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfConsultaCatalogoFormaPago" minOccurs="0"/>
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
    "cotizaFormaDePagoResult"
})
@XmlRootElement(name = "CotizaFormaDePagoResponse")
public class CotizaFormaDePagoResponse {

    @XmlElementRef(name = "CotizaFormaDePagoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfConsultaCatalogoFormaPago> cotizaFormaDePagoResult;

    /**
     * Obtiene el valor de la propiedad cotizaFormaDePagoResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfConsultaCatalogoFormaPago }{@code >}
     *     
     */
    public JAXBElement<ArrayOfConsultaCatalogoFormaPago> getCotizaFormaDePagoResult() {
        return cotizaFormaDePagoResult;
    }

    /**
     * Define el valor de la propiedad cotizaFormaDePagoResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfConsultaCatalogoFormaPago }{@code >}
     *     
     */
    public void setCotizaFormaDePagoResult(JAXBElement<ArrayOfConsultaCatalogoFormaPago> value) {
        this.cotizaFormaDePagoResult = value;
    }

}
