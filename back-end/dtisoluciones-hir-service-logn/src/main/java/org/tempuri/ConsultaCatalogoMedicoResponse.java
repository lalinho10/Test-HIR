
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoCuestionarioMedico;


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
 *         &lt;element name="ConsultaCatalogoMedicoResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoCuestionarioMedico" minOccurs="0"/>
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
    "consultaCatalogoMedicoResult"
})
@XmlRootElement(name = "ConsultaCatalogoMedicoResponse")
public class ConsultaCatalogoMedicoResponse {

    @XmlElementRef(name = "ConsultaCatalogoMedicoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoCuestionarioMedico> consultaCatalogoMedicoResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoMedicoResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoCuestionarioMedico }{@code >}
     *     
     */
    public JAXBElement<CatalogoCuestionarioMedico> getConsultaCatalogoMedicoResult() {
        return consultaCatalogoMedicoResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoMedicoResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoCuestionarioMedico }{@code >}
     *     
     */
    public void setConsultaCatalogoMedicoResult(JAXBElement<CatalogoCuestionarioMedico> value) {
        this.consultaCatalogoMedicoResult = value;
    }

}
