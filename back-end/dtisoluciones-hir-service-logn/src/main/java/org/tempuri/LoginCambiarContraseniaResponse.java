
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
 *         &lt;element name="loginCambiarContraseniaResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Login}RecuperaClaveRespuesta" minOccurs="0"/>
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
    "loginCambiarContraseniaResult"
})
@XmlRootElement(name = "loginCambiarContraseniaResponse")
public class LoginCambiarContraseniaResponse {

    @XmlElementRef(name = "loginCambiarContraseniaResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<RecuperaClaveRespuesta> loginCambiarContraseniaResult;

    /**
     * Obtiene el valor de la propiedad loginCambiarContraseniaResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link RecuperaClaveRespuesta }{@code >}
     *     
     */
    public JAXBElement<RecuperaClaveRespuesta> getLoginCambiarContraseniaResult() {
        return loginCambiarContraseniaResult;
    }

    /**
     * Define el valor de la propiedad loginCambiarContraseniaResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link RecuperaClaveRespuesta }{@code >}
     *     
     */
    public void setLoginCambiarContraseniaResult(JAXBElement<RecuperaClaveRespuesta> value) {
        this.loginCambiarContraseniaResult = value;
    }

}
