
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoCuestionarioConocimiento complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoCuestionarioConocimiento">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ClaseRespuesta">
 *       &lt;sequence>
 *         &lt;element name="Conocimiento" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoConocimiento" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoCuestionarioConocimiento", propOrder = {
    "conocimiento"
})
public class CatalogoCuestionarioConocimiento
    extends ClaseRespuesta
{

    @XmlElementRef(name = "Conocimiento", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoConocimiento> conocimiento;

    /**
     * Obtiene el valor de la propiedad conocimiento.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoConocimiento }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoConocimiento> getConocimiento() {
        return conocimiento;
    }

    /**
     * Define el valor de la propiedad conocimiento.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoConocimiento }{@code >}
     *     
     */
    public void setConocimiento(JAXBElement<ArrayOfCatalogoConocimiento> value) {
        this.conocimiento = value;
    }

}
