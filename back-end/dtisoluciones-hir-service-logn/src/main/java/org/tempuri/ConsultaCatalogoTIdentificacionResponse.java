
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoTipoIdentificacion;


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
 *         &lt;element name="ConsultaCatalogoTIdentificacionResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoTipoIdentificacion" minOccurs="0"/>
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
    "consultaCatalogoTIdentificacionResult"
})
@XmlRootElement(name = "ConsultaCatalogoTIdentificacionResponse")
public class ConsultaCatalogoTIdentificacionResponse {

    @XmlElementRef(name = "ConsultaCatalogoTIdentificacionResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoTipoIdentificacion> consultaCatalogoTIdentificacionResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoTIdentificacionResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoTipoIdentificacion }{@code >}
     *     
     */
    public JAXBElement<CatalogoTipoIdentificacion> getConsultaCatalogoTIdentificacionResult() {
        return consultaCatalogoTIdentificacionResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoTIdentificacionResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoTipoIdentificacion }{@code >}
     *     
     */
    public void setConsultaCatalogoTIdentificacionResult(JAXBElement<CatalogoTipoIdentificacion> value) {
        this.consultaCatalogoTIdentificacionResult = value;
    }

}
