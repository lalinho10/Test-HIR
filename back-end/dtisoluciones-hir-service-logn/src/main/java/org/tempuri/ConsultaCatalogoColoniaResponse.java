
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoColoniaRespuestas;


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
 *         &lt;element name="ConsultaCatalogoColoniaResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoColoniaRespuestas" minOccurs="0"/>
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
    "consultaCatalogoColoniaResult"
})
@XmlRootElement(name = "ConsultaCatalogoColoniaResponse")
public class ConsultaCatalogoColoniaResponse {

    @XmlElementRef(name = "ConsultaCatalogoColoniaResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoColoniaRespuestas> consultaCatalogoColoniaResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoColoniaResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoColoniaRespuestas }{@code >}
     *     
     */
    public JAXBElement<CatalogoColoniaRespuestas> getConsultaCatalogoColoniaResult() {
        return consultaCatalogoColoniaResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoColoniaResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoColoniaRespuestas }{@code >}
     *     
     */
    public void setConsultaCatalogoColoniaResult(JAXBElement<CatalogoColoniaRespuestas> value) {
        this.consultaCatalogoColoniaResult = value;
    }

}
