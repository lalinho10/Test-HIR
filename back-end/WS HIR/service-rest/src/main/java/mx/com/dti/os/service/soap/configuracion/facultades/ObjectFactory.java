
package mx.com.dti.os.service.soap.configuracion.facultades;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;

import mx.com.dti.os.service.common.util.comunes.ResponseTxVO;
import mx.com.dti.os.service.vo.configuracion.facultades.FacultadesResponseVO;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the mx.com.planetmedia.os.eservices.soap.configuracion.facultades package. 
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

    private final static QName _ConsultarCatalogoFacultades_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoFacultades");
    private final static QName _ServiceException_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "ServiceException");
    private final static QName _GuardarFacultadResponse_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "GuardarFacultadResponse");
    private final static QName _ResponseTxVO_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "ResponseTxVO");
    private final static QName _GuardarFacultad_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "GuardarFacultad");
    private final static QName _ConsultarFacultadesRol_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarFacultadesRol");
    private final static QName _ConsultarFacultadesRolResponse_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarFacultadesRolResponse");
    private final static QName _ConsultarCatalogoFacultadesResponse_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "ConsultarCatalogoFacultadesResponse");
    private final static QName _FacultadesResponse_QNAME = new QName("http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", "FacultadesResponse");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: mx.com.planetmedia.os.eservices.soap.configuracion.facultades
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ConsultarCatalogoFacultadesResponse }
     * 
     */
    public ConsultarCatalogoFacultadesResponse createConsultarCatalogoFacultadesResponse() {
        return new ConsultarCatalogoFacultadesResponse();
    }

    /**
     * Create an instance of {@link ConsultarFacultadesRolResponse }
     * 
     */
    public ConsultarFacultadesRolResponse createConsultarFacultadesRolResponse() {
        return new ConsultarFacultadesRolResponse();
    }

    /**
     * Create an instance of {@link ConsultarFacultadesRol }
     * 
     */
    public ConsultarFacultadesRol createConsultarFacultadesRol() {
        return new ConsultarFacultadesRol();
    }

    /**
     * Create an instance of {@link GuardarFacultad }
     * 
     */
    public GuardarFacultad createGuardarFacultad() {
        return new GuardarFacultad();
    }

    /**
     * Create an instance of {@link GuardarFacultadResponse }
     * 
     */
    public GuardarFacultadResponse createGuardarFacultadResponse() {
        return new GuardarFacultadResponse();
    }

    /**
     * Create an instance of {@link ConsultarCatalogoFacultades }
     * 
     */
    public ConsultarCatalogoFacultades createConsultarCatalogoFacultades() {
        return new ConsultarCatalogoFacultades();
    }

    /**
     * Create an instance of {@link ServiceException }
     * 
     */
    public ServiceException createServiceException() {
        return new ServiceException();
    }

    /**
     * Create an instance of {@link CatFacultadRequestVO }
     * 
     */
    public CatFacultadRequestVO createCatFacultadRequestVO() {
        return new CatFacultadRequestVO();
    }

    /**
     * Create an instance of {@link FacRolRequestVO }
     * 
     */
    public FacRolRequestVO createFacRolRequestVO() {
        return new FacRolRequestVO();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoFacultades }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoFacultades")
    public JAXBElement<ConsultarCatalogoFacultades> createConsultarCatalogoFacultades(ConsultarCatalogoFacultades value) {
        return new JAXBElement<ConsultarCatalogoFacultades>(_ConsultarCatalogoFacultades_QNAME, ConsultarCatalogoFacultades.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ServiceException }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ServiceException")
    public JAXBElement<ServiceException> createServiceException(ServiceException value) {
        return new JAXBElement<ServiceException>(_ServiceException_QNAME, ServiceException.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GuardarFacultadResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "GuardarFacultadResponse")
    public JAXBElement<GuardarFacultadResponse> createGuardarFacultadResponse(GuardarFacultadResponse value) {
        return new JAXBElement<GuardarFacultadResponse>(_GuardarFacultadResponse_QNAME, GuardarFacultadResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ResponseTxVO }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ResponseTxVO")
    public JAXBElement<ResponseTxVO> createResponseTxVO(ResponseTxVO value) {
        return new JAXBElement<ResponseTxVO>(_ResponseTxVO_QNAME, ResponseTxVO.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link GuardarFacultad }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "GuardarFacultad")
    public JAXBElement<GuardarFacultad> createGuardarFacultad(GuardarFacultad value) {
        return new JAXBElement<GuardarFacultad>(_GuardarFacultad_QNAME, GuardarFacultad.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarFacultadesRol }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarFacultadesRol")
    public JAXBElement<ConsultarFacultadesRol> createConsultarFacultadesRol(ConsultarFacultadesRol value) {
        return new JAXBElement<ConsultarFacultadesRol>(_ConsultarFacultadesRol_QNAME, ConsultarFacultadesRol.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarFacultadesRolResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarFacultadesRolResponse")
    public JAXBElement<ConsultarFacultadesRolResponse> createConsultarFacultadesRolResponse(ConsultarFacultadesRolResponse value) {
        return new JAXBElement<ConsultarFacultadesRolResponse>(_ConsultarFacultadesRolResponse_QNAME, ConsultarFacultadesRolResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ConsultarCatalogoFacultadesResponse }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "ConsultarCatalogoFacultadesResponse")
    public JAXBElement<ConsultarCatalogoFacultadesResponse> createConsultarCatalogoFacultadesResponse(ConsultarCatalogoFacultadesResponse value) {
        return new JAXBElement<ConsultarCatalogoFacultadesResponse>(_ConsultarCatalogoFacultadesResponse_QNAME, ConsultarCatalogoFacultadesResponse.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link FacultadesResponseVO }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", name = "FacultadesResponse")
    public JAXBElement<FacultadesResponseVO> createFacultadesResponse(FacultadesResponseVO value) {
        return new JAXBElement<FacultadesResponseVO>(_FacultadesResponse_QNAME, FacultadesResponseVO.class, null, value);
    }

}
