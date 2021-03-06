
package mx.com.dti.os.service.soap.configuracion.facultades;

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
@WebServiceClient(name = "FacultadServiceWS", targetNamespace = "http://facultades.configuracion.soap.service.os.dti.com.mx", wsdlLocation = "http://192.168.79.88:8080/eservices-soap/FacultadServiceWS?wsdl")
public class FacultadServiceWS
    extends Service
{

    private final static URL FACULTADSERVICEWS_WSDL_LOCATION;
    private final static WebServiceException FACULTADSERVICEWS_EXCEPTION;
    private final static QName FACULTADSERVICEWS_QNAME = new QName("http://facultades.configuracion.soap.service.os.dti.com.mx", "FacultadServiceWS");

    static {
        URL url = null;
        WebServiceException e = null;
        try {
            url = new URL("http://localhost:8080/service-soap-hir/FacultadServiceWS?wsdl");
        } catch (MalformedURLException ex) {
            e = new WebServiceException(ex);
        }
        FACULTADSERVICEWS_WSDL_LOCATION = url;
        FACULTADSERVICEWS_EXCEPTION = e;
    }

    public FacultadServiceWS() {
        super(__getWsdlLocation(), FACULTADSERVICEWS_QNAME);
    }

    public FacultadServiceWS(WebServiceFeature... features) {
        super(__getWsdlLocation(), FACULTADSERVICEWS_QNAME, features);
    }

    public FacultadServiceWS(URL wsdlLocation) {
        super(wsdlLocation, FACULTADSERVICEWS_QNAME);
    }

    public FacultadServiceWS(URL wsdlLocation, WebServiceFeature... features) {
        super(wsdlLocation, FACULTADSERVICEWS_QNAME, features);
    }

    public FacultadServiceWS(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public FacultadServiceWS(URL wsdlLocation, QName serviceName, WebServiceFeature... features) {
        super(wsdlLocation, serviceName, features);
    }

    /**
     * 
     * @return
     *     returns FacultadService
     */
    @WebEndpoint(name = "FacultadServiceImplPort")
    public FacultadService getFacultadServiceImplPort() {
        return super.getPort(new QName("http://facultades.configuracion.soap.service.os.dti.com.mx", "FacultadServiceImplPort"), FacultadService.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns FacultadService
     */
    @WebEndpoint(name = "FacultadServiceImplPort")
    public FacultadService getFacultadServiceImplPort(WebServiceFeature... features) {
        return super.getPort(new QName("http://facultades.configuracion.soap.service.os.dti.com.mx", "FacultadServiceImplPort"), FacultadService.class, features);
    }

    private static URL __getWsdlLocation() {
        if (FACULTADSERVICEWS_EXCEPTION!= null) {
            throw FACULTADSERVICEWS_EXCEPTION;
        }
        return FACULTADSERVICEWS_WSDL_LOCATION;
    }

}
