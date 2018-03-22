
package mx.com.dti.os.service.soap.configuracion.states;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the mx.com.planetmedia.os.eservices.soap.configuracion.states package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _ConsultarCatalogoStates_QNAME = new QName("http://states.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoStates");
    private final static QName _ServiceException_QNAME = new QName("http://states.configuracion.soap.eservices.os.planetmedia.com.mx", "ServiceException");
    private final static QName _ConsultarCatalogoStatesResponse_QNAME = new QName("http://states.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoStatesResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: mx.com.planetmedia.os.eservices.soap.configuracion.states
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ConsultarCatalogoStatesResponse }
     * 
     */
    public ConsultarCatalogoStatesResponse createConsultarCatalogoStatesResponse() {
        return new ConsultarCatalogoStatesResponse();
    }

    /**
     * Create an instance of {@link ConsultarCatalogoStates }
     * 
     */
    public ConsultarCatalogoStates createConsultarCatalogoStates() {
        return new ConsultarCatalogoStates();
    }

    /**
     * Create an instance of {@link ServiceException }
     * 
     */
    public ServiceException createServiceException() {
        return new ServiceException();
    }

    /**
     * Create an instance of {@link CatStateVO }
     * 
     */
    public CatStateVO createCatStateVO() {
        return new CatStateVO();
    }

    /**
     * Create an instance of {@link CatStateResponseVO }
     * 
     */
    public CatStateResponseVO createCatStateResponseVO() {
        return new CatStateResponseVO();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoStates }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://states.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoStates")
    public JAXBElement<ConsultarCatalogoStates> createConsultarCatalogoStates(ConsultarCatalogoStates value) {
        return new JAXBElement<ConsultarCatalogoStates>(_ConsultarCatalogoStates_QNAME, ConsultarCatalogoStates.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ServiceException }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://states.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ServiceException")
    public JAXBElement<ServiceException> createServiceException(ServiceException value) {
        return new JAXBElement<ServiceException>(_ServiceException_QNAME, ServiceException.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoStatesResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://states.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoStatesResponse")
    public JAXBElement<ConsultarCatalogoStatesResponse> createConsultarCatalogoStatesResponse(ConsultarCatalogoStatesResponse value) {
        return new JAXBElement<ConsultarCatalogoStatesResponse>(_ConsultarCatalogoStatesResponse_QNAME, ConsultarCatalogoStatesResponse.class, null, value);
    }

}
