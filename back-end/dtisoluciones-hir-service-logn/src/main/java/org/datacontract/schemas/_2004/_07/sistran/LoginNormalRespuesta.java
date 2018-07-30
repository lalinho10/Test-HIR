
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para LoginNormalRespuesta complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="LoginNormalRespuesta">
 *   &lt;complexContent>
 *     &lt;extension base="{http://schemas.datacontract.org/2004/07/Sistran.Login}Respuesta">
 *       &lt;sequence>
 *         &lt;element name="ConfirmacionToken" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "LoginNormalRespuesta", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Login", propOrder = {
    "confirmacionToken"
})
public class LoginNormalRespuesta
    extends Respuesta
{

    @XmlElementRef(name = "ConfirmacionToken", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Login", type = JAXBElement.class, required = false)
    protected JAXBElement<String> confirmacionToken;

    /**
     * Obtiene el valor de la propiedad confirmacionToken.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getConfirmacionToken() {
        return confirmacionToken;
    }

    /**
     * Define el valor de la propiedad confirmacionToken.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setConfirmacionToken(JAXBElement<String> value) {
        this.confirmacionToken = value;
    }

}
