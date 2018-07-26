
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoFrecuenciaDeporte complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoFrecuenciaDeporte">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ClaseRespuesta">
 *       &lt;sequence>
 *         &lt;element name="Deporte" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoDeporte" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoFrecuenciaDeporte", propOrder = {
    "deporte"
})
public class CatalogoFrecuenciaDeporte
    extends ClaseRespuesta
{

    @XmlElementRef(name = "Deporte", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoDeporte> deporte;

    /**
     * Obtiene el valor de la propiedad deporte.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoDeporte }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoDeporte> getDeporte() {
        return deporte;
    }

    /**
     * Define el valor de la propiedad deporte.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoDeporte }{@code >}
     *     
     */
    public void setDeporte(JAXBElement<ArrayOfCatalogoDeporte> value) {
        this.deporte = value;
    }

}
