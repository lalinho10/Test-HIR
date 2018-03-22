
package mx.com.dti.os.service.soap.configuracion.servicios;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;

import mx.com.dti.os.service.vo.configuracion.servicios.ServiciosResponseVO;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the mx.com.planetmedia.os.eservices.soap.configuracion.servicios package. 
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

    private final static QName _ConsultarCatalogoServicios_QNAME = new QName("http://servicios.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoServicios");
    private final static QName _ConsultarCatalogoServiciosResponse_QNAME = new QName("http://servicios.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoServiciosResponse");
    private final static QName _ServiceException_QNAME = new QName("http://servicios.configuracion.soap.eservices.os.planetmedia.com.mx", "ServiceException");
    private final static QName _ServiciosResponse_QNAME = new QName("http://servicios.configuracion.soap.eservices.os.planetmedia.com.mx", "ServiciosResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: mx.com.planetmedia.os.eservices.soap.configuracion.servicios
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ConsultarCatalogoServicios }
     * 
     */
    public ConsultarCatalogoServicios createConsultarCatalogoServicios() {
        return new ConsultarCatalogoServicios();
    }

    /**
     * Create an instance of {@link ConsultarCatalogoServiciosResponse }
     * 
     */
    public ConsultarCatalogoServiciosResponse createConsultarCatalogoServiciosResponse() {
        return new ConsultarCatalogoServiciosResponse();
    }

    /**
     * Create an instance of {@link ServiceException }
     * 
     */
    public ServiceException createServiceException() {
        return new ServiceException();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoServicios }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://servicios.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoServicios")
    public JAXBElement<ConsultarCatalogoServicios> createConsultarCatalogoServicios(ConsultarCatalogoServicios value) {
        return new JAXBElement<ConsultarCatalogoServicios>(_ConsultarCatalogoServicios_QNAME, ConsultarCatalogoServicios.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoServiciosResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://servicios.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoServiciosResponse")
    public JAXBElement<ConsultarCatalogoServiciosResponse> createConsultarCatalogoServiciosResponse(ConsultarCatalogoServiciosResponse value) {
        return new JAXBElement<ConsultarCatalogoServiciosResponse>(_ConsultarCatalogoServiciosResponse_QNAME, ConsultarCatalogoServiciosResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ServiceException }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://servicios.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ServiceException")
    public JAXBElement<ServiceException> createServiceException(ServiceException value) {
        return new JAXBElement<ServiceException>(_ServiceException_QNAME, ServiceException.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ServiciosResponseVO }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://servicios.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ServiciosResponse")
    public JAXBElement<ServiciosResponseVO> createServiciosResponse(ServiciosResponseVO value) {
        return new JAXBElement<ServiciosResponseVO>(_ServiciosResponse_QNAME, ServiciosResponseVO.class, null, value);
    }

}
