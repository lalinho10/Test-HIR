
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoCuestionarioConocimiento;


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
 *         &lt;element name="ConsultaCatalogoCuestionarioResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoCuestionarioConocimiento" minOccurs="0"/>
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
    "consultaCatalogoCuestionarioResult"
})
@XmlRootElement(name = "ConsultaCatalogoCuestionarioResponse")
public class ConsultaCatalogoCuestionarioResponse {

    @XmlElementRef(name = "ConsultaCatalogoCuestionarioResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoCuestionarioConocimiento> consultaCatalogoCuestionarioResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoCuestionarioResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoCuestionarioConocimiento }{@code >}
     *     
     */
    public JAXBElement<CatalogoCuestionarioConocimiento> getConsultaCatalogoCuestionarioResult() {
        return consultaCatalogoCuestionarioResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoCuestionarioResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoCuestionarioConocimiento }{@code >}
     *     
     */
    public void setConsultaCatalogoCuestionarioResult(JAXBElement<CatalogoCuestionarioConocimiento> value) {
        this.consultaCatalogoCuestionarioResult = value;
    }

}
