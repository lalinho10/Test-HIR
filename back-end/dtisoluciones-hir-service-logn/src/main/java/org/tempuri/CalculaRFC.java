
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


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
 *         &lt;element name="PE_VC_NOMBRES" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="PE_VC_APPATERNO" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="PE_VC_APMATERNO" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="PE_VC_FECHA_NACIMIENTO" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
    "pevcnombres",
    "pevcappaterno",
    "pevcapmaterno",
    "pevcfechanacimiento"
})
@XmlRootElement(name = "Calcula_RFC")
public class CalculaRFC {

    @XmlElementRef(name = "PE_VC_NOMBRES", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<String> pevcnombres;
    @XmlElementRef(name = "PE_VC_APPATERNO", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<String> pevcappaterno;
    @XmlElementRef(name = "PE_VC_APMATERNO", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<String> pevcapmaterno;
    @XmlElementRef(name = "PE_VC_FECHA_NACIMIENTO", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<String> pevcfechanacimiento;

    /**
     * Obtiene el valor de la propiedad pevcnombres.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getPEVCNOMBRES() {
        return pevcnombres;
    }

    /**
     * Define el valor de la propiedad pevcnombres.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setPEVCNOMBRES(JAXBElement<String> value) {
        this.pevcnombres = value;
    }

    /**
     * Obtiene el valor de la propiedad pevcappaterno.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getPEVCAPPATERNO() {
        return pevcappaterno;
    }

    /**
     * Define el valor de la propiedad pevcappaterno.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setPEVCAPPATERNO(JAXBElement<String> value) {
        this.pevcappaterno = value;
    }

    /**
     * Obtiene el valor de la propiedad pevcapmaterno.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getPEVCAPMATERNO() {
        return pevcapmaterno;
    }

    /**
     * Define el valor de la propiedad pevcapmaterno.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setPEVCAPMATERNO(JAXBElement<String> value) {
        this.pevcapmaterno = value;
    }

    /**
     * Obtiene el valor de la propiedad pevcfechanacimiento.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public JAXBElement<String> getPEVCFECHANACIMIENTO() {
        return pevcfechanacimiento;
    }

    /**
     * Define el valor de la propiedad pevcfechanacimiento.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link String }{@code >}
     *     
     */
    public void setPEVCFECHANACIMIENTO(JAXBElement<String> value) {
        this.pevcfechanacimiento = value;
    }

}
