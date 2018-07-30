
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoTipoParentesco complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoTipoParentesco">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ClaseRespuesta">
 *       &lt;sequence>
 *         &lt;element name="Parentesco" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoParentesco" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoTipoParentesco", propOrder = {
    "parentesco"
})
public class CatalogoTipoParentesco
    extends ClaseRespuesta
{

    @XmlElementRef(name = "Parentesco", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoParentesco> parentesco;

    /**
     * Obtiene el valor de la propiedad parentesco.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoParentesco }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoParentesco> getParentesco() {
        return parentesco;
    }

    /**
     * Define el valor de la propiedad parentesco.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoParentesco }{@code >}
     *     
     */
    public void setParentesco(JAXBElement<ArrayOfCatalogoParentesco> value) {
        this.parentesco = value;
    }

}
