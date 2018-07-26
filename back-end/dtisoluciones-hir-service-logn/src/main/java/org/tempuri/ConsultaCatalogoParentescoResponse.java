
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoTipoParentesco;


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
 *         &lt;element name="ConsultaCatalogoParentescoResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoTipoParentesco" minOccurs="0"/>
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
    "consultaCatalogoParentescoResult"
})
@XmlRootElement(name = "ConsultaCatalogoParentescoResponse")
public class ConsultaCatalogoParentescoResponse {

    @XmlElementRef(name = "ConsultaCatalogoParentescoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoTipoParentesco> consultaCatalogoParentescoResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoParentescoResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoTipoParentesco }{@code >}
     *     
     */
    public JAXBElement<CatalogoTipoParentesco> getConsultaCatalogoParentescoResult() {
        return consultaCatalogoParentescoResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoParentescoResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoTipoParentesco }{@code >}
     *     
     */
    public void setConsultaCatalogoParentescoResult(JAXBElement<CatalogoTipoParentesco> value) {
        this.consultaCatalogoParentescoResult = value;
    }

}
