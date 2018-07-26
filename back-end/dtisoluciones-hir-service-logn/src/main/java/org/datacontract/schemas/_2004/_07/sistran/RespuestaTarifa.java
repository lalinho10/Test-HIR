
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para RespuestaTarifa complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="RespuestaTarifa">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="SAMaxima" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="codigoRespuesta" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="deducible" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="edad" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="mensaje" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="prima" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "RespuestaTarifa", propOrder = {
    "saMaxima",
    "codigoRespuesta",
    "deducible",
    "edad",
    "mensaje",
    "prima"
})
public class RespuestaTarifa {

    @XmlElement(name = "SAMaxima")
    protected Double saMaxima;
    protected Long codigoRespuesta;
    protected Double deducible;
    protected Double edad;
    @XmlElementRef(name = "mensaje", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<String> mensaje;
    protected Double prima;

    /**
     * Obtiene el valor de la propiedad saMaxima.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSAMaxima() {
        return saMaxima;
    }

    /**
     * Define el valor de la propiedad saMaxima.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSAMaxima(Double value) {
        this.saMaxima = value;
    }

    /**
     * Obtiene el valor de la propiedad codigoRespuesta.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getCodigoRespuesta() {
        return codigoRespuesta;
    }

    /**
     * Define el valor de la propiedad codigoRespuesta.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setCodigoRespuesta(Long value) {
        this.codigoRespuesta = value;
    }

    /**
     * Obtiene el valor de la propiedad deducible.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getDeducible() {
        return deducible;
    }

    /**
     * Define el valor de la propiedad deducible.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setDeducible(Double value) {
        this.deducible = value;
    }

    /**
     * Obtiene el valor de la propiedad edad.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getEdad() {
        return edad;
    }

    /**
     * Define el valor de la propiedad edad.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setEdad(Double value) {
        this.edad = value;
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
     * Obtiene el valor de la propiedad prima.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPrima() {
        return prima;
    }

    /**
     * Define el valor de la propiedad prima.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPrima(Double value) {
        this.prima = value;
    }

}
