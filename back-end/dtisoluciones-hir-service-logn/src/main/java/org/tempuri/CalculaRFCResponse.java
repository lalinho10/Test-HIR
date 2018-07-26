
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoCalcularRFC;


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
 *         &lt;element name="Calcula_RFCResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoCalcular_RFC" minOccurs="0"/>
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
    "calculaRFCResult"
})
@XmlRootElement(name = "Calcula_RFCResponse")
public class CalculaRFCResponse {

    @XmlElementRef(name = "Calcula_RFCResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoCalcularRFC> calculaRFCResult;

    /**
     * Obtiene el valor de la propiedad calculaRFCResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoCalcularRFC }{@code >}
     *     
     */
    public JAXBElement<CatalogoCalcularRFC> getCalculaRFCResult() {
        return calculaRFCResult;
    }

    /**
     * Define el valor de la propiedad calculaRFCResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoCalcularRFC }{@code >}
     *     
     */
    public void setCalculaRFCResult(JAXBElement<CatalogoCalcularRFC> value) {
        this.calculaRFCResult = value;
    }

}
