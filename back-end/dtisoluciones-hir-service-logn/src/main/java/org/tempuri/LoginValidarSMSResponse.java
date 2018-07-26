
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.AutenticacionRespuesta;


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
 *         &lt;element name="loginValidarSMSResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Login}AutenticacionRespuesta" minOccurs="0"/>
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
    "loginValidarSMSResult"
})
@XmlRootElement(name = "loginValidarSMSResponse")
public class LoginValidarSMSResponse {

    @XmlElementRef(name = "loginValidarSMSResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<AutenticacionRespuesta> loginValidarSMSResult;

    /**
     * Obtiene el valor de la propiedad loginValidarSMSResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link AutenticacionRespuesta }{@code >}
     *     
     */
    public JAXBElement<AutenticacionRespuesta> getLoginValidarSMSResult() {
        return loginValidarSMSResult;
    }

    /**
     * Define el valor de la propiedad loginValidarSMSResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link AutenticacionRespuesta }{@code >}
     *     
     */
    public void setLoginValidarSMSResult(JAXBElement<AutenticacionRespuesta> value) {
        this.loginValidarSMSResult = value;
    }

}
