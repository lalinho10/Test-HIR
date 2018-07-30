
package org.datacontract.schemas._2004._07.sistran;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Clase Java para Modulos complex type.
 * 
 * <p>El siguiente fragmento de esquema especifica el contenido que se espera que haya en esta clase.
 * 
 * <pre>
 * &lt;complexType name="Modulos">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="MaxModulo" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="MinModulo" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="codigoRespuesta" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="mensaje" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Modulos", propOrder = {
    "maxModulo",
    "minModulo",
    "codigoRespuesta",
    "mensaje"
})
public class Modulos {

    @XmlElement(name = "MaxModulo")
    protected Long maxModulo;
    @XmlElement(name = "MinModulo")
    protected Long minModulo;
    protected Integer codigoRespuesta;
    @XmlElementRef(name = "mensaje", namespace = "http://schemas.datacontract.org/2004/07/Sistran.Cotizacion", type = JAXBElement.class, required = false)
    protected JAXBElement<String> mensaje;

    /**
     * Obtiene el valor de la propiedad maxModulo.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getMaxModulo() {
        return maxModulo;
    }

    /**
     * Define el valor de la propiedad maxModulo.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setMaxModulo(Long value) {
        this.maxModulo = value;
    }

    /**
     * Obtiene el valor de la propiedad minModulo.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getMinModulo() {
        return minModulo;
    }

    /**
     * Define el valor de la propiedad minModulo.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setMinModulo(Long value) {
        this.minModulo = value;
    }

    /**
     * Obtiene el valor de la propiedad codigoRespuesta.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getCodigoRespuesta() {
        return codigoRespuesta;
    }

    /**
     * Define el valor de la propiedad codigoRespuesta.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setCodigoRespuesta(Integer value) {
        this.codigoRespuesta = value;
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

}
