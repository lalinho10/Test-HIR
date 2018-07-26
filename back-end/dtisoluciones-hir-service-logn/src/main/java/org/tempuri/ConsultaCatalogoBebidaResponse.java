
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaBebida;


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
 *         &lt;element name="ConsultaCatalogoBebidaResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoFrecuenciaBebida" minOccurs="0"/>
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
    "consultaCatalogoBebidaResult"
})
@XmlRootElement(name = "ConsultaCatalogoBebidaResponse")
public class ConsultaCatalogoBebidaResponse {

    @XmlElementRef(name = "ConsultaCatalogoBebidaResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoFrecuenciaBebida> consultaCatalogoBebidaResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoBebidaResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaBebida }{@code >}
     *     
     */
    public JAXBElement<CatalogoFrecuenciaBebida> getConsultaCatalogoBebidaResult() {
        return consultaCatalogoBebidaResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoBebidaResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaBebida }{@code >}
     *     
     */
    public void setConsultaCatalogoBebidaResult(JAXBElement<CatalogoFrecuenciaBebida> value) {
        this.consultaCatalogoBebidaResult = value;
    }

}
