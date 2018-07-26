
package mx.com.dti.os.service.soap.configuracion.roles;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

import mx.com.dti.os.service.common.util.comunes.RespuestaVO;
import mx.com.dti.os.service.vo.configuracion.roles.CatRolVO;
import mx.com.dti.os.service.vo.configuracion.roles.RolesResponseVO;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.4-b01
 * Generated source version: 2.2
 * 
 */
@WebService(name = "RolService", targetNamespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx")
@XmlSeeAlso({
    mx.com.dti.os.service.common.util.comunes.ObjectFactory.class,
    mx.com.dti.os.service.vo.configuracion.roles.ObjectFactory.class,
    mx.com.dti.os.service.soap.configuracion.roles.ObjectFactory.class
})
public interface RolService {


    /**
     * 
     * @param guardarRolRequest
     * @return
     *     returns mx.com.planetmedia.os.eservices.common.util.comunes.ResponseTxVO
     * @throws ServiceException_Exception
     */
    @WebMethod(operationName = "GuardarRol")
    @WebResult(name = "GuardarRolResponse", targetNamespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx")
    @RequestWrapper(localName = "GuardarRol", targetNamespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.roles.GuardarRol")
    @ResponseWrapper(localName = "GuardarRolResponse", targetNamespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.roles.GuardarRolResponse")
    public RespuestaVO guardarRol(
        @WebParam(name = "GuardarRolRequest", targetNamespace = "")
        CatRolVO guardarRolRequest)
        throws ServiceException_Exception
    ;

    /**
     * 
     * @return
     *     returns mx.com.planetmedia.os.eservices.common.vo.configuracion.roles.RolesResponseVO
     * @throws ServiceException_Exception
     */
    @WebMethod(operationName = "ConsultarCatalogoRoles")
    @WebResult(name = "CatalogoRolesResponse", targetNamespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx")
    @RequestWrapper(localName = "ConsultarCatalogoRoles", targetNamespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.roles.ConsultarCatalogoRoles")
    @ResponseWrapper(localName = "ConsultarCatalogoRolesResponse", targetNamespace = "http://roles.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.roles.ConsultarCatalogoRolesResponse")
    public RolesResponseVO consultarCatalogoRoles()
        throws ServiceException_Exception
    ;

}
