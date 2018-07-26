
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoTipoDeporte;


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
 *         &lt;element name="ConsultaCatalogoTDeporteResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoTipoDeporte" minOccurs="0"/>
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
    "consultaCatalogoTDeporteResult"
})
@XmlRootElement(name = "ConsultaCatalogoTDeporteResponse")
public class ConsultaCatalogoTDeporteResponse {

    @XmlElementRef(name = "ConsultaCatalogoTDeporteResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoTipoDeporte> consultaCatalogoTDeporteResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoTDeporteResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoTipoDeporte }{@code >}
     *     
     */
    public JAXBElement<CatalogoTipoDeporte> getConsultaCatalogoTDeporteResult() {
        return consultaCatalogoTDeporteResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoTDeporteResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoTipoDeporte }{@code >}
     *     
     */
    public void setConsultaCatalogoTDeporteResult(JAXBElement<CatalogoTipoDeporte> value) {
        this.consultaCatalogoTDeporteResult = value;
    }

}
