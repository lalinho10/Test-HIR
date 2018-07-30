
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para CatalogoMunicipioRespuestas complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="CatalogoMunicipioRespuestas">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ClaseRespuesta">
 *       &lt;sequence>
 *         &lt;element name="Municipio" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfCatalogoMunicipio" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "CatalogoMunicipioRespuestas", propOrder = {
    "municipio"
})
public class CatalogoMunicipioRespuestas
    extends ClaseRespuesta
{

    @XmlElementRef(name = "Municipio", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfCatalogoMunicipio> municipio;

    /**
     * Obtiene el valor de la propiedad municipio.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoMunicipio }{@code >}
     *     
     */
    public JAXBElement<ArrayOfCatalogoMunicipio> getMunicipio() {
        return municipio;
    }

    /**
     * Define el valor de la propiedad municipio.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfCatalogoMunicipio }{@code >}
     *     
     */
    public void setMunicipio(JAXBElement<ArrayOfCatalogoMunicipio> value) {
        this.municipio = value;
    }

}
