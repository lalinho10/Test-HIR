
package mx.com.dti.os.service.soap.configuracion.modulos;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the mx.com.planetmedia.os.eservices.soap.configuracion.modulos package. 
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

    private final static QName _GuardaModuloResponse_QNAME = new QName("http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", "GuardaModuloResponse");
    private final static QName _ObtenerMenu_QNAME = new QName("http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", "ObtenerMenu");
    private final static QName _GuardaModulo_QNAME = new QName("http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", "GuardaModulo");
    private final static QName _ServiceException_QNAME = new QName("http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", "ServiceException");
    private final static QName _ConsultarCatalogoModulos_QNAME = new QName("http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoModulos");
    private final static QName _ConsultarCatalogoModulosResponse_QNAME = new QName("http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoModulosResponse");
    private final static QName _ObtenerMenuResponse_QNAME = new QName("http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", "ObtenerMenuResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: mx.com.planetmedia.os.eservices.soap.configuracion.modulos
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ConsultarCatalogoModulos }
     * 
     */
    public ConsultarCatalogoModulos createConsultarCatalogoModulos() {
        return new ConsultarCatalogoModulos();
    }

    /**
     * Create an instance of {@link ConsultarCatalogoModulosResponse }
     * 
     */
    public ConsultarCatalogoModulosResponse createConsultarCatalogoModulosResponse() {
        return new ConsultarCatalogoModulosResponse();
    }

    /**
     * Create an instance of {@link ObtenerMenuResponse }
     * 
     */
    public ObtenerMenuResponse createObtenerMenuResponse() {
        return new ObtenerMenuResponse();
    }

    /**
     * Create an instance of {@link GuardaModuloResponse }
     * 
     */
    public GuardaModuloResponse createGuardaModuloResponse() {
        return new GuardaModuloResponse();
    }

    /**
     * Create an instance of {@link ObtenerMenu }
     * 
     */
    public ObtenerMenu createObtenerMenu() {
        return new ObtenerMenu();
    }

    /**
     * Create an instance of {@link ServiceException }
     * 
     */
    public ServiceException createServiceException() {
        return new ServiceException();
    }

    /**
     * Create an instance of {@link GuardaModulo }
     * 
     */
    public GuardaModulo createGuardaModulo() {
        return new GuardaModulo();
    }

    /**
     * Create an instance of {@link ModuloReglaVO }
     * 
     */
    public ModuloReglaVO createModuloReglaVO() {
        return new ModuloReglaVO();
    }

    /**
     * Create an instance of {@link FacRolRequestVO }
     * 
     */
    public FacRolRequestVO createFacRolRequestVO() {
        return new FacRolRequestVO();
    }

    /**
     * Create an instance of {@link ModulosResponseVO }
     * 
     */
    public ModulosResponseVO createModulosResponseVO() {
        return new ModulosResponseVO();
    }

    /**
     * Create an instance of {@link ModuloRequestVO }
     * 
     */
    public ModuloRequestVO createModuloRequestVO() {
        return new ModuloRequestVO();
    }

    /**
     * Create an instance of {@link CatModuloVO }
     * 
     */
    public CatModuloVO createCatModuloVO() {
        return new CatModuloVO();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GuardaModuloResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", name = "GuardaModuloResponse")
    public JAXBElement<GuardaModuloResponse> createGuardaModuloResponse(GuardaModuloResponse value) {
        return new JAXBElement<GuardaModuloResponse>(_GuardaModuloResponse_QNAME, GuardaModuloResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ObtenerMenu }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ObtenerMenu")
    public JAXBElement<ObtenerMenu> createObtenerMenu(ObtenerMenu value) {
        return new JAXBElement<ObtenerMenu>(_ObtenerMenu_QNAME, ObtenerMenu.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GuardaModulo }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", name = "GuardaModulo")
    public JAXBElement<GuardaModulo> createGuardaModulo(GuardaModulo value) {
        return new JAXBElement<GuardaModulo>(_GuardaModulo_QNAME, GuardaModulo.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ServiceException }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ServiceException")
    public JAXBElement<ServiceException> createServiceException(ServiceException value) {
        return new JAXBElement<ServiceException>(_ServiceException_QNAME, ServiceException.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoModulos }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoModulos")
    public JAXBElement<ConsultarCatalogoModulos> createConsultarCatalogoModulos(ConsultarCatalogoModulos value) {
        return new JAXBElement<ConsultarCatalogoModulos>(_ConsultarCatalogoModulos_QNAME, ConsultarCatalogoModulos.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoModulosResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoModulosResponse")
    public JAXBElement<ConsultarCatalogoModulosResponse> createConsultarCatalogoModulosResponse(ConsultarCatalogoModulosResponse value) {
        return new JAXBElement<ConsultarCatalogoModulosResponse>(_ConsultarCatalogoModulosResponse_QNAME, ConsultarCatalogoModulosResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ObtenerMenuResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://modulos.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ObtenerMenuResponse")
    public JAXBElement<ObtenerMenuResponse> createObtenerMenuResponse(ObtenerMenuResponse value) {
        return new JAXBElement<ObtenerMenuResponse>(_ObtenerMenuResponse_QNAME, ObtenerMenuResponse.class, null, value);
    }

}
