
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaDeporte;


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
 *         &lt;element name="ConsultaCatalogoDeporteResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoFrecuenciaDeporte" minOccurs="0"/>
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
    "consultaCatalogoDeporteResult"
})
@XmlRootElement(name = "ConsultaCatalogoDeporteResponse")
public class ConsultaCatalogoDeporteResponse {

    @XmlElementRef(name = "ConsultaCatalogoDeporteResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoFrecuenciaDeporte> consultaCatalogoDeporteResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoDeporteResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaDeporte }{@code >}
     *     
     */
    public JAXBElement<CatalogoFrecuenciaDeporte> getConsultaCatalogoDeporteResult() {
        return consultaCatalogoDeporteResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoDeporteResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoFrecuenciaDeporte }{@code >}
     *     
     */
    public void setConsultaCatalogoDeporteResult(JAXBElement<CatalogoFrecuenciaDeporte> value) {
        this.consultaCatalogoDeporteResult = value;
    }

}
