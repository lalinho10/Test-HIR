
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.LoginRespuesta;


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
 *         &lt;element name="loginRegistroResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Login}LoginRespuesta" minOccurs="0"/>
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
    "loginRegistroResult"
})
@XmlRootElement(name = "loginRegistroResponse")
public class LoginRegistroResponse {

    @XmlElementRef(name = "loginRegistroResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<LoginRespuesta> loginRegistroResult;

    /**
     * Obtiene el valor de la propiedad loginRegistroResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link LoginRespuesta }{@code >}
     *     
     */
    public JAXBElement<LoginRespuesta> getLoginRegistroResult() {
        return loginRegistroResult;
    }

    /**
     * Define el valor de la propiedad loginRegistroResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link LoginRespuesta }{@code >}
     *     
     */
    public void setLoginRegistroResult(JAXBElement<LoginRespuesta> value) {
        this.loginRegistroResult = value;
    }

}
