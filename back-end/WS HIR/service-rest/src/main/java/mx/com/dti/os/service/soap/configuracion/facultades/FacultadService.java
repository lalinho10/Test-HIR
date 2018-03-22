
package mx.com.dti.os.service.soap.configuracion.facultades;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

import mx.com.dti.os.service.common.util.comunes.ResponseTxVO;
import mx.com.dti.os.service.vo.configuracion.facultades.FacultadesResponseVO;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.4-b01
 * Generated source version: 2.2
 * 
 */
@WebService(name = "FacultadService", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx")
@XmlSeeAlso({
    mx.com.dti.os.service.common.util.comunes.ObjectFactory.class,
    mx.com.dti.os.service.vo.configuracion.facultades.ObjectFactory.class,
    mx.com.dti.os.service.soap.configuracion.facultades.ObjectFactory.class
})
public interface FacultadService {


    /**
     * 
     * @return
     *     returns mx.com.planetmedia.os.eservices.common.vo.configuracion.facultades.FacultadesResponseVO
     * @throws ServiceException_Exception
     */
    @WebMethod(operationName = "ConsultarCatalogoFacultades")
    @WebResult(name = "CatalogoFacultadesResponse", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx")
    @RequestWrapper(localName = "ConsultarCatalogoFacultades", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.facultades.ConsultarCatalogoFacultades")
    @ResponseWrapper(localName = "ConsultarCatalogoFacultadesResponse", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.facultades.ConsultarCatalogoFacultadesResponse")
    public FacultadesResponseVO consultarCatalogoFacultades()
        throws ServiceException_Exception
    ;

    /**
     * 
     * @param consultarFacultadesRolRequest
     * @return
     *     returns mx.com.planetmedia.os.eservices.common.vo.configuracion.facultades.FacultadesResponseVO
     * @throws ServiceException_Exception
     */
    @WebMethod(operationName = "ConsultarFacultadesRol")
    @WebResult(name = "ConsultarFacultadesRolResponse", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx")
    @RequestWrapper(localName = "ConsultarFacultadesRol", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.facultades.ConsultarFacultadesRol")
    @ResponseWrapper(localName = "ConsultarFacultadesRolResponse", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.facultades.ConsultarFacultadesRolResponse")
    public FacultadesResponseVO consultarFacultadesRol(
        @WebParam(name = "ConsultarFacultadesRolRequest", targetNamespace = "")
        FacRolRequestVO consultarFacultadesRolRequest)
        throws ServiceException_Exception
    ;

    /**
     * 
     * @param guardarFacultadRequest
     * @return
     *     returns mx.com.planetmedia.os.eservices.common.util.comunes.ResponseTxVO
     * @throws ServiceException_Exception
     */
    @WebMethod(operationName = "GuardarFacultad")
    @WebResult(name = "GuardarFacultadResponse", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx")
    @RequestWrapper(localName = "GuardarFacultad", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.facultades.GuardarFacultad")
    @ResponseWrapper(localName = "GuardarFacultadResponse", targetNamespace = "http://facultades.configuracion.soap.eservices.os.planetmedia.com.mx", className = "mx.com.planetmedia.os.eservices.soap.configuracion.facultades.GuardarFacultadResponse")
    public ResponseTxVO guardarFacultad(
        @WebParam(name = "GuardarFacultadRequest", targetNamespace = "")
        CatFacultadRequestVO guardarFacultadRequest)
        throws ServiceException_Exception
    ;

}
