
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoCPRespuestas complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoCPRespuestas">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ClaseRespuesta">
 *       &lt;sequence>
 *         &lt;element name="Postal" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoPostal" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoCPRespuestas", propOrder = {
    "postal"
})
public class CatalogoCPRespuestas
    extends ClaseRespuesta
{

    @XmlElementRef(name = "Postal", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoPostal> postal;

    /**
     * Obtiene el valor de la propiedad postal.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoPostal }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoPostal> getPostal() {
        return postal;
    }

    /**
     * Define el valor de la propiedad postal.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoPostal }{@code >}
     *     
     */
    public void setPostal(JAXBElement<ArrayOfCatalogoPostal> value) {
        this.postal = value;
    }

}
