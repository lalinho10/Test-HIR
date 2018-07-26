
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoProductosRespuestas;


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
 *         &lt;element name="ConsultaCatalogoProductosResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoProductosRespuestas" minOccurs="0"/>
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
    "consultaCatalogoProductosResult"
})
@XmlRootElement(name = "ConsultaCatalogoProductosResponse")
public class ConsultaCatalogoProductosResponse {

    @XmlElementRef(name = "ConsultaCatalogoProductosResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoProductosRespuestas> consultaCatalogoProductosResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoProductosResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoProductosRespuestas }{@code >}
     *     
     */
    public JAXBElement<CatalogoProductosRespuestas> getConsultaCatalogoProductosResult() {
        return consultaCatalogoProductosResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoProductosResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoProductosRespuestas }{@code >}
     *     
     */
    public void setConsultaCatalogoProductosResult(JAXBElement<CatalogoProductosRespuestas> value) {
        this.consultaCatalogoProductosResult = value;
    }

}
