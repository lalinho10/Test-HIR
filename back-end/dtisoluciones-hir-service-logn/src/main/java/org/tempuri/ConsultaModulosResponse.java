
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.Modulos;


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
 *         &lt;element name="ConsultaModulosResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}Modulos" minOccurs="0"/>
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
    "consultaModulosResult"
})
@XmlRootElement(name = "ConsultaModulosResponse")
public class ConsultaModulosResponse {

    @XmlElementRef(name = "ConsultaModulosResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<Modulos> consultaModulosResult;

    /**
     * Obtiene el valor de la propiedad consultaModulosResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link Modulos }{@code >}
     *     
     */
    public JAXBElement<Modulos> getConsultaModulosResult() {
        return consultaModulosResult;
    }

    /**
     * Define el valor de la propiedad consultaModulosResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link Modulos }{@code >}
     *     
     */
    public void setConsultaModulosResult(JAXBElement<Modulos> value) {
        this.consultaModulosResult = value;
    }

}
