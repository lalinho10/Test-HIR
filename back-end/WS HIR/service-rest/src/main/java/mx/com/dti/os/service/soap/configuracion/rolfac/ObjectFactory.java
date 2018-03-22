
package mx.com.dti.os.service.soap.configuracion.rolfac;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;

import mx.com.dti.os.service.common.util.comunes.ResponseTxVO;
import mx.com.dti.os.service.vo.configuracion.rolfac.ConfigRolFacRequestVO;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the mx.com.planetmedia.os.eservices.soap.configuracion.rolfac package. 
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

    private final static QName _ServiceException_QNAME = new QName("http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", "ServiceException");
    private final static QName _GuardarRelacionFacRolResponse_QNAME = new QName("http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", "GuardarRelacionFacRolResponse");
    private final static QName _ResponseTxVO_QNAME = new QName("http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", "ResponseTxVO");
    private final static QName _GuardarRelacionFacRol_QNAME = new QName("http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", "GuardarRelacionFacRol");
    private final static QName _RolesFacultadesResponse_QNAME = new QName("http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", "RolesFacultadesResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: mx.com.planetmedia.os.eservices.soap.configuracion.rolfac
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link GuardarRelacionFacRol }
     * 
     */
    public GuardarRelacionFacRol createGuardarRelacionFacRol() {
        return new GuardarRelacionFacRol();
    }

    /**
     * Create an instance of {@link GuardarRelacionFacRolResponse }
     * 
     */
    public GuardarRelacionFacRolResponse createGuardarRelacionFacRolResponse() {
        return new GuardarRelacionFacRolResponse();
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
    @XmlElementDecl(namespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ServiceException")
    public JAXBElement<ServiceException> createServiceException(ServiceException value) {
        return new JAXBElement<ServiceException>(_ServiceException_QNAME, ServiceException.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GuardarRelacionFacRolResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", name = "GuardarRelacionFacRolResponse")
    public JAXBElement<GuardarRelacionFacRolResponse> createGuardarRelacionFacRolResponse(GuardarRelacionFacRolResponse value) {
        return new JAXBElement<GuardarRelacionFacRolResponse>(_GuardarRelacionFacRolResponse_QNAME, GuardarRelacionFacRolResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ResponseTxVO }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ResponseTxVO")
    public JAXBElement<ResponseTxVO> createResponseTxVO(ResponseTxVO value) {
        return new JAXBElement<ResponseTxVO>(_ResponseTxVO_QNAME, ResponseTxVO.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GuardarRelacionFacRol }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", name = "GuardarRelacionFacRol")
    public JAXBElement<GuardarRelacionFacRol> createGuardarRelacionFacRol(GuardarRelacionFacRol value) {
        return new JAXBElement<GuardarRelacionFacRol>(_GuardarRelacionFacRol_QNAME, GuardarRelacionFacRol.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConfigRolFacRequestVO }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", name = "RolesFacultadesResponse")
    public JAXBElement<ConfigRolFacRequestVO> createRolesFacultadesResponse(ConfigRolFacRequestVO value) {
        return new JAXBElement<ConfigRolFacRequestVO>(_RolesFacultadesResponse_QNAME, ConfigRolFacRequestVO.class, null, value);
    }

}
