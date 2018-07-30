
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.CatalogoTipoCliente;


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
 *         &lt;element name="ConsultaCatalogoClienteResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}CatalogoTipoCliente" minOccurs="0"/>
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
    "consultaCatalogoClienteResult"
})
@XmlRootElement(name = "ConsultaCatalogoClienteResponse")
public class ConsultaCatalogoClienteResponse {

    @XmlElementRef(name = "ConsultaCatalogoClienteResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<CatalogoTipoCliente> consultaCatalogoClienteResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoClienteResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link CatalogoTipoCliente }{@code >}
     *     
     */
    public JAXBElement<CatalogoTipoCliente> getConsultaCatalogoClienteResult() {
        return consultaCatalogoClienteResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoClienteResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link CatalogoTipoCliente }{@code >}
     *     
     */
    public void setConsultaCatalogoClienteResult(JAXBElement<CatalogoTipoCliente> value) {
        this.consultaCatalogoClienteResult = value;
    }

}
