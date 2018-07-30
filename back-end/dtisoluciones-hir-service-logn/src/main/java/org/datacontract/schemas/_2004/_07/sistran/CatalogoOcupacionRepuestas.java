
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoOcupacionRepuestas complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoOcupacionRepuestas">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ClaseRespuesta">
 *       &lt;sequence>
 *         &lt;element name="Ocupaciones" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoOcupacion" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoOcupacionRepuestas", propOrder = {
    "ocupaciones"
})
public class CatalogoOcupacionRepuestas
    extends ClaseRespuesta
{

    @XmlElementRef(name = "Ocupaciones", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoOcupacion> ocupaciones;

    /**
     * Obtiene el valor de la propiedad ocupaciones.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoOcupacion }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoOcupacion> getOcupaciones() {
        return ocupaciones;
    }

    /**
     * Define el valor de la propiedad ocupaciones.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoOcupacion }{@code >}
     *     
     */
    public void setOcupaciones(JAXBElement<ArrayOfCatalogoOcupacion> value) {
        this.ocupaciones = value;
    }

}
