
package mx.com.dti.os.service.soap.configuracion.servicios;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.Service;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceException;
import javax.xml.ws.WebServiceFeature;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.4-b01
 * Generated source version: 2.2
 * 
 */
@WebServiceClient(name = "ServiciosServiceWS", targetNamespace = "http://servicios.configuracion.soap.service.os.dti.com.mx", wsdlLocation = "http://192.168.79.88:8080/eservices-soap/ServiciosServiceWS?wsdl")
public class ServiciosServiceWS
    extends Service
{

    private final static URL SERVICIOSSERVICEWS_WSDL_LOCATION;
    private final static WebServiceException SERVICIOSSERVICEWS_EXCEPTION;
    private final static QName SERVICIOSSERVICEWS_QNAME = new QName("http://servicios.configuracion.soap.service.os.dti.com.mx", "ServiciosServiceWS");

    static {
        URL url = null;
        WebServiceException e = null;
        try {
            url = new URL("http://localhost:8080/service-soap-hir/ServiciosServiceWS?wsdl");
        } catch (MalformedURLException ex) {
            e = new WebServiceException(ex);
        }
        SERVICIOSSERVICEWS_WSDL_LOCATION = url;
        SERVICIOSSERVICEWS_EXCEPTION = e;
    }

    public ServiciosServiceWS() {
        super(__getWsdlLocation(), SERVICIOSSERVICEWS_QNAME);
    }

    public ServiciosServiceWS(WebServiceFeature... features) {
        super(__getWsdlLocation(), SERVICIOSSERVICEWS_QNAME, features);
    }

    public ServiciosServiceWS(URL wsdlLocation) {
        super(wsdlLocation, SERVICIOSSERVICEWS_QNAME);
    }

    public ServiciosServiceWS(URL wsdlLocation, WebServiceFeature... features) {
        super(wsdlLocation, SERVICIOSSERVICEWS_QNAME, features);
    }

    public ServiciosServiceWS(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public ServiciosServiceWS(URL wsdlLocation, QName serviceName, WebServiceFeature... features) {
        super(wsdlLocation, serviceName, features);
    }

    /**
     * 
     * @return
     *     returns ServiciosService
     */
    @WebEndpoint(name = "ServiciosServiceImplPort")
    public ServiciosService getServiciosServiceImplPort() {
        return super.getPort(new QName("http://servicios.configuracion.soap.service.os.dti.com.mx", "ServiciosServiceImplPort"), ServiciosService.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns ServiciosService
     */
    @WebEndpoint(name = "ServiciosServiceImplPort")
    public ServiciosService getServiciosServiceImplPort(WebServiceFeature... features) {
        return super.getPort(new QName("http://servicios.configuracion.soap.service.os.dti.com.mx", "ServiciosServiceImplPort"), ServiciosService.class, features);
    }

    private static URL __getWsdlLocation() {
        if (SERVICIOSSERVICEWS_EXCEPTION!= null) {
            throw SERVICIOSSERVICEWS_EXCEPTION;
        }
        return SERVICIOSSERVICEWS_WSDL_LOCATION;
    }

}
