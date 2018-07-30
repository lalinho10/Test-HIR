
package mx.com.dti.os.service.soap.configuracion.states;

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
@WebServiceClient(name = "StateServiceWS", targetNamespace = "http://states.configuracion.soap.service.os.dti.com.mx", wsdlLocation = "http://192.168.79.88:8080/eservices-soap/StateServiceWS?wsdl")
public class StateServiceWS
    extends Service
{

    private final static URL STATESERVICEWS_WSDL_LOCATION;
    private final static WebServiceException STATESERVICEWS_EXCEPTION;
    private final static QName STATESERVICEWS_QNAME = new QName("http://states.configuracion.soap.service.os.dti.com.mx", "StateServiceWS");

    static {
        URL url = null;
        WebServiceException e = null;
        try {
            url = new URL("http://localhost:8080/service-soap-hir/StateServiceWS?wsdl");
        } catch (MalformedURLException ex) {
            e = new WebServiceException(ex);
        }
        STATESERVICEWS_WSDL_LOCATION = url;
        STATESERVICEWS_EXCEPTION = e;
    }

    public StateServiceWS() {
        super(__getWsdlLocation(), STATESERVICEWS_QNAME);
    }

    public StateServiceWS(WebServiceFeature... features) {
        super(__getWsdlLocation(), STATESERVICEWS_QNAME, features);
    }

    public StateServiceWS(URL wsdlLocation) {
        super(wsdlLocation, STATESERVICEWS_QNAME);
    }

    public StateServiceWS(URL wsdlLocation, WebServiceFeature... features) {
        super(wsdlLocation, STATESERVICEWS_QNAME, features);
    }

    public StateServiceWS(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public StateServiceWS(URL wsdlLocation, QName serviceName, WebServiceFeature... features) {
        super(wsdlLocation, serviceName, features);
    }

    /**
     * 
     * @return
     *     returns StateService
     */
    @WebEndpoint(name = "StateServiceImplPort")
    public StateService getStateServiceImplPort() {
        return super.getPort(new QName("http://states.configuracion.soap.service.os.dti.com.mx", "StateServiceImplPort"), StateService.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns StateService
     */
    @WebEndpoint(name = "StateServiceImplPort")
    public StateService getStateServiceImplPort(WebServiceFeature... features) {
        return super.getPort(new QName("http://states.configuracion.soap.service.os.dti.com.mx", "StateServiceImplPort"), StateService.class, features);
    }

    private static URL __getWsdlLocation() {
        if (STATESERVICEWS_EXCEPTION!= null) {
            throw STATESERVICEWS_EXCEPTION;
        }
        return STATESERVICEWS_WSDL_LOCATION;
    }

}
