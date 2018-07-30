
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.RecuperaClaveRespuesta;


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
 *         &lt;element name="loginRecuperaClaveCorreoResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Login}RecuperaClaveRespuesta" minOccurs="0"/>
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
    "loginRecuperaClaveCorreoResult"
})
@XmlRootElement(name = "loginRecuperaClaveCorreoResponse")
public class LoginRecuperaClaveCorreoResponse {

    @XmlElementRef(name = "loginRecuperaClaveCorreoResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<RecuperaClaveRespuesta> loginRecuperaClaveCorreoResult;

    /**
     * Obtiene el valor de la propiedad loginRecuperaClaveCorreoResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RecuperaClaveRespuesta }{@code >}
     *     
     */
    public JAXBElement<RecuperaClaveRespuesta> getLoginRecuperaClaveCorreoResult() {
        return loginRecuperaClaveCorreoResult;
    }

    /**
     * Define el valor de la propiedad loginRecuperaClaveCorreoResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RecuperaClaveRespuesta }{@code >}
     *     
     */
    public void setLoginRecuperaClaveCorreoResult(JAXBElement<RecuperaClaveRespuesta> value) {
        this.loginRecuperaClaveCorreoResult = value;
    }

}
