
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoTipoDeporte complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoTipoDeporte">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ClaseRespuesta">
 *       &lt;sequence>
 *         &lt;element name="TDeporte" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoTDeporte" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoTipoDeporte", propOrder = {
    "tDeporte"
})
public class CatalogoTipoDeporte
    extends ClaseRespuesta
{

    @XmlElementRef(name = "TDeporte", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoTDeporte> tDeporte;

    /**
     * Obtiene el valor de la propiedad tDeporte.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoTDeporte }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoTDeporte> getTDeporte() {
        return tDeporte;
    }

    /**
     * Define el valor de la propiedad tDeporte.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoTDeporte }{@code >}
     *     
     */
    public void setTDeporte(JAXBElement<ArrayOfCatalogoTDeporte> value) {
        this.tDeporte = value;
    }

}
