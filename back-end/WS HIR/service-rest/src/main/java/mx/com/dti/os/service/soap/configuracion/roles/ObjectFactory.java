
package mx.com.dti.os.service.soap.configuracion.roles;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;

import mx.com.dti.os.service.common.util.comunes.RespuestaVO;
import mx.com.dti.os.service.vo.configuracion.roles.RolesResponseVO;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the mx.com.planetmedia.os.eservices.soap.configuracion.roles package. 
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

    private final static QName _ServiceException_QNAME = new QName("http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", "ServiceException");
    private final static QName _RolesResponse_QNAME = new QName("http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", "RolesResponse");
    private final static QName _ConsultarCatalogoRolesResponse_QNAME = new QName("http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoRolesResponse");
    private final static QName _ResponseTxVO_QNAME = new QName("http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", "ResponseTxVO");
    private final static QName _GuardarRolResponse_QNAME = new QName("http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", "GuardarRolResponse");
    private final static QName _ConsultarCatalogoRoles_QNAME = new QName("http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoRoles");
    private final static QName _GuardarRol_QNAME = new QName("http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", "GuardarRol");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: mx.com.planetmedia.os.eservices.soap.configuracion.roles
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GuardarRol }
     * 
     */
    public GuardarRol createGuardarRol() {
        return new GuardarRol();
    }

    /**
     * Create an instance of {@link ConsultarCatalogoRoles }
     * 
     */
    public ConsultarCatalogoRoles createConsultarCatalogoRoles() {
        return new ConsultarCatalogoRoles();
    }

    /**
     * Create an instance of {@link GuardarRolResponse }
     * 
     */
    public GuardarRolResponse createGuardarRolResponse() {
        return new GuardarRolResponse();
    }

    /**
     * Create an instance of {@link ConsultarCatalogoRolesResponse }
     * 
     */
    public ConsultarCatalogoRolesResponse createConsultarCatalogoRolesResponse() {
        return new ConsultarCatalogoRolesResponse();
    }

    /**
     * Create an instance of {@link ServiceException }
     * 
     */
    public ServiceException createServiceException() {
        return new ServiceException();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ServiceException }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ServiceException")
    public JAXBElement<ServiceException> createServiceException(ServiceException value) {
        return new JAXBElement<ServiceException>(_ServiceException_QNAME, ServiceException.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RolesResponseVO }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", name = "RolesResponse")
    public JAXBElement<RolesResponseVO> createRolesResponse(RolesResponseVO value) {
        return new JAXBElement<RolesResponseVO>(_RolesResponse_QNAME, RolesResponseVO.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoRolesResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoRolesResponse")
    public JAXBElement<ConsultarCatalogoRolesResponse> createConsultarCatalogoRolesResponse(ConsultarCatalogoRolesResponse value) {
        return new JAXBElement<ConsultarCatalogoRolesResponse>(_ConsultarCatalogoRolesResponse_QNAME, ConsultarCatalogoRolesResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link RespuestaVO }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ResponseTxVO")
    public JAXBElement<RespuestaVO> createResponseTxVO(RespuestaVO value) {
        return new JAXBElement<RespuestaVO>(_ResponseTxVO_QNAME, RespuestaVO.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GuardarRolResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", name = "GuardarRolResponse")
    public JAXBElement<GuardarRolResponse> createGuardarRolResponse(GuardarRolResponse value) {
        return new JAXBElement<GuardarRolResponse>(_GuardarRolResponse_QNAME, GuardarRolResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoRoles }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoRoles")
    public JAXBElement<ConsultarCatalogoRoles> createConsultarCatalogoRoles(ConsultarCatalogoRoles value) {
        return new JAXBElement<ConsultarCatalogoRoles>(_ConsultarCatalogoRoles_QNAME, ConsultarCatalogoRoles.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GuardarRol }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", name = "GuardarRol")
    public JAXBElement<GuardarRol> createGuardarRol(GuardarRol value) {
        return new JAXBElement<GuardarRol>(_GuardarRol_QNAME, GuardarRol.class, null, value);
    }

}
