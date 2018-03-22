
package mx.com.dti.os.service.soap.configuracion.rolfac;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

import mx.com.dti.os.service.common.util.comunes.ResponseTxVO;
import mx.com.dti.os.service.vo.configuracion.rolfac.ConfigRolFacRequestVO;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.4-b01
 * Generated source version: 2.2
 * 
 */
@WebService(name = "RolFacService", targetNamespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx")
@XmlSeeAlso({
    mx.com.dti.os.service.common.util.comunes.ObjectFactory.class,
    mx.com.dti.os.service.vo.configuracion.rolfac.ObjectFactory.class,
    mx.com.dti.os.service.soap.configuracion.rolfac.ObjectFactory.class
})
public interface RolFacService {


    /**
     * 
     * @param guardarRelacionFacRolRequest
     * @return
     *     returns mx.com.planetmedia.os.eservices.common.util.comunes.ResponseTxVO
     * @throws ServiceException_Exception
     */
    @WebMethod(operationName = "GuardarRelacionFacRol")
    @WebResult(name = "GuardarRelacionFacRolResponse", targetNamespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx")
    @RequestWrapper(localName = "GuardarRelacionFacRol", targetNamespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.rolfac.GuardarRelacionFacRol")
    @ResponseWrapper(localName = "GuardarRelacionFacRolResponse", targetNamespace = "http://rolfac.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.rolfac.GuardarRelacionFacRolResponse")
    public ResponseTxVO guardarRelacionFacRol(
        @WebParam(name = "GuardarRelacionFacRolRequest", targetNamespace = "")
        ConfigRolFacRequestVO guardarRelacionFacRolRequest)
        throws ServiceException_Exception
    ;

}
