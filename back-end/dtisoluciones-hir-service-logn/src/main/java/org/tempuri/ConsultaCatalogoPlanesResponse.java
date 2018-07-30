
package org.tempuri;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;
import org.datacontract.schemas._2004._07.sistran.ArrayOfPlanCotizar;


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
 *         &lt;element name="ConsultaCatalogoPlanesResult" type="{http://schemas.datacontract.org/2004/07/Sistran.Cotizacion}ArrayOfPlanCotizar" minOccurs="0"/>
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
    "consultaCatalogoPlanesResult"
})
@XmlRootElement(name = "ConsultaCatalogoPlanesResponse")
public class ConsultaCatalogoPlanesResponse {

    @XmlElementRef(name = "ConsultaCatalogoPlanesResult", namespace = "http://tempuri.org/", type = JAXBElement.class, required = false)
    protected JAXBElement<ArrayOfPlanCotizar> consultaCatalogoPlanesResult;

    /**
     * Obtiene el valor de la propiedad consultaCatalogoPlanesResult.
     * 
     * @return
     *     possible object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfPlanCotizar }{@code >}
     *     
     */
    public JAXBElement<ArrayOfPlanCotizar> getConsultaCatalogoPlanesResult() {
        return consultaCatalogoPlanesResult;
    }

    /**
     * Define el valor de la propiedad consultaCatalogoPlanesResult.
     * 
     * @param value
     *     allowed object is
     *     {@link JAXBElement }{@code <}{@link ArrayOfPlanCotizar }{@code >}
     *     
     */
    public void setConsultaCatalogoPlanesResult(JAXBElement<ArrayOfPlanCotizar> value) {
        this.consultaCatalogoPlanesResult = value;
    }

}
