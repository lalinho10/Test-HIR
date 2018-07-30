
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Clase Java para AutenticacionRespuesta complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="AutenticacionRespuesta">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="claveRol" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="codigoRespuesta" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fechaUltimoLogin" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="mensaje" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="nombreUsuario" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "AutenticacionRespuesta", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Login", propOrder = {
    "claveRol",
    "codigoRespuesta",
    "fechaUltimoLogin",
    "mensaje",
    "nombreUsuario"
})
public class AutenticacionRespuesta {

    @XmlElementRef(name = "claveRol", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Login", type = JAXBElement.class, required = false)
    protected JAXBElement<String> claveRol;
    @XmlElementRef(name = "codigoRespuesta", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Login", type = JAXBElement.class, required = false)
    protected JAXBElement<String> codigoRespuesta;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar fechaUltimoLogin;
    @XmlElementRef(name = "mensaje", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Login", type = JAXBElement.class, required = false)
    protected JAXBElement<String> mensaje;
    @XmlElementRef(name = "nombreUsuario", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Login", type = JAXBElement.class, required = false)
    protected JAXBElement<String> nombreUsuario;

    /**
     * Obtiene el valor de la propiedad claveRol.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getClaveRol() {
        return claveRol;
    }

    /**
     * Define el valor de la propiedad claveRol.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setClaveRol(JAXBElement<String> value) {
        this.claveRol = value;
    }

    /**
     * Obtiene el valor de la propiedad codigoRespuesta.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getCodigoRespuesta() {
        return codigoRespuesta;
    }

    /**
     * Define el valor de la propiedad codigoRespuesta.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setCodigoRespuesta(JAXBElement<String> value) {
        this.codigoRespuesta = value;
    }

    /**
     * Obtiene el valor de la propiedad fechaUltimoLogin.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getFechaUltimoLogin() {
        return fechaUltimoLogin;
    }

    /**
     * Define el valor de la propiedad fechaUltimoLogin.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setFechaUltimoLogin(XMLGregorianCalendar value) {
        this.fechaUltimoLogin = value;
    }

    /**
     * Obtiene el valor de la propiedad mensaje.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getMensaje() {
        return mensaje;
    }

    /**
     * Define el valor de la propiedad mensaje.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setMensaje(JAXBElement<String> value) {
        this.mensaje = value;
    }

    /**
     * Obtiene el valor de la propiedad nombreUsuario.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getNombreUsuario() {
        return nombreUsuario;
    }

    /**
     * Define el valor de la propiedad nombreUsuario.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setNombreUsuario(JAXBElement<String> value) {
        this.nombreUsuario = value;
    }

}
