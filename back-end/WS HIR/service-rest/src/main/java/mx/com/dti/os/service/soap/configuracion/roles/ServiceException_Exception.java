
package mx.com.dti.os.service.soap.configuracion.roles;

import javax.xml.ws.WebFault;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.4-b01
 * Generated source version: 2.2
 * 
 */
@WebFault(name = "ServiceException", targetNamespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx")
public class ServiceException_Exception
    extends Exception
{

    /**
     * Java type that goes as soapenv:Fault detail element.
     * 
     */
    private ServiceException faultInfo;

    /**
     * 
     * @param message
     * @param faultInfo
     */
    public ServiceException_Exception(String message, ServiceException faultInfo) {
        super(message);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @param message
     * @param faultInfo
     * @param cause
     */
    public ServiceException_Exception(String message, ServiceException faultInfo, Throwable cause) {
        super(message, cause);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @return
     *     returns fault bean: mx.com.planetmedia.os.eservices.soap.configuracion.roles.ServiceException
     */
    public ServiceException getFaultInfo() {
        return faultInfo;
    }

}
