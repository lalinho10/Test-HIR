
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoFrecuenciaFuma complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoFrecuenciaFuma">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ClaseRespuesta">
 *       &lt;sequence>
 *         &lt;element name="Fuma" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoFuma" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoFrecuenciaFuma", propOrder = {
    "fuma"
})
public class CatalogoFrecuenciaFuma
    extends ClaseRespuesta
{

    @XmlElementRef(name = "Fuma", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoFuma> fuma;

    /**
     * Obtiene el valor de la propiedad fuma.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoFuma }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoFuma> getFuma() {
        return fuma;
    }

    /**
     * Define el valor de la propiedad fuma.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoFuma }{@code >}
     *     
     */
    public void setFuma(JAXBElement<ArrayOfCatalogoFuma> value) {
        this.fuma = value;
    }

}
