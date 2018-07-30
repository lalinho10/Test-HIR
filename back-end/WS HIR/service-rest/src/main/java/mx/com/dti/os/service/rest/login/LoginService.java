/**
 * 
 */
package mx.com.dti.os.service.rest.login;

import java.io.IOException;
import java.net.URL;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.logging.ConsoleHandler;
import java.util.logging.FileHandler;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.LogRecord;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;
import javax.xml.namespace.QName;
import javax.xml.ws.WebServiceException;

import org.datacontract.schemas._2004._07.sistran.CatalogoCPRespuestas;
import org.tempuri.Service;

import mx.com.dti.os.service.common.util.comunes.ConsultaPorCodigoPostalVO;
import mx.com.dti.os.service.common.util.comunes.RFCCalculaVO;
import mx.com.dti.os.service.common.util.comunes.RespuestaEntidadVO;
import mx.com.dti.os.service.common.util.comunes.RespuestaRFCVO;
import mx.com.dti.os.service.common.util.comunes.RespuestaVO;
import mx.com.dti.os.service.vo.login.AutenticacionRespuesta;
import mx.com.dti.os.service.vo.login.CambiaContraseniaVO;
import mx.com.dti.os.service.vo.login.CatConsultaVO;
import mx.com.dti.os.service.vo.login.ConsultaTarifaVO;
import mx.com.dti.os.service.vo.login.LoginNormalRespuesta;
import mx.com.dti.os.service.vo.login.LoginNormalVO;
import mx.com.dti.os.service.vo.login.LoginRegistroVO;
import mx.com.dti.os.service.vo.login.LoginRespuesta;
import mx.com.dti.os.service.vo.login.LoginSmsVO;
import mx.com.dti.os.service.vo.login.RecuperaClaveVO;
import mx.com.dti.os.service.vo.login.RespuestaModulo;

/**
 * @author DTI
 *
 */
public class LoginService {

	private Service port;
	private final static Logger log = Logger.getLogger("mx.com.dti.os.service.rest.login.LoginService");
	
	@PostConstruct
	private void init()throws WebServiceException{
		try{
			URL url = new URL("http://177.241.244.250/Sistran.WCF/Service.svc?wsdl");
			//URL url = new URL("http://localhost/Sistran.WCF/Service.svc?wsdl");
			QName qName = new QName("http://tempuri.org/", "Service");
			port = new Service(url,qName);
		}catch(Exception e){
			throw new WebServiceException();
		}
	}
	
	private Service getInstanceLoginService() throws WebServiceException{
		if(port == null){
			this.init();
		}
		return port;
	}
	
	public LoginRespuesta loginRegistro(LoginRegistroVO request) {
		org.datacontract.schemas._2004._07.sistran.LoginRespuesta servResp = null;
		LoginRespuesta resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().loginRegistro(request.getNombre(), 
					request.getPaterno(), 
					request.getMaterno().isEmpty() ? null : request.getMaterno(), 
					request.getCorreo(), request.getContrasenia(), 
					request.getConfirmarContrasenia(), request.getTelefonoCelular(), 
					request.getTelefonoFijo().isEmpty() ? null : request.getTelefonoFijo());
			resp = LoginConverter.convertToLoginRespueta(servResp);
			
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public LoginNormalRespuesta loginNormal(LoginNormalVO request) {
		org.datacontract.schemas._2004._07.sistran.LoginNormalRespuesta servResp = null;
		LoginNormalRespuesta resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().loginNormal(
					request.getUsuario(), request.getContrasenia());
			resp = LoginConverter.convertToLoginNormalRespuesta(servResp);
			
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public AutenticacionRespuesta loginAutenticacion(LoginSmsVO request) {
		org.datacontract.schemas._2004._07.sistran.AutenticacionRespuesta servResp = null;
		AutenticacionRespuesta resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().loginValidarSMS(
					request.getIdCodigo().toString(), request.getCodigo());
			resp = LoginConverter.convertToAutenticacionRespuesta(servResp);
			
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public LoginRespuesta loginRecuperaClave(RecuperaClaveVO request) {
		org.datacontract.schemas._2004._07.sistran.RecuperaClaveRespuesta servResp = null;
		LoginRespuesta resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().
					loginRecuperaClaveCorreo(request.getCorreo());
			resp = LoginConverter.convertToRecuperaClaveRespuesta(servResp);
			
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public LoginRespuesta CambiarClave(CambiaContraseniaVO request) {
		org.datacontract.schemas._2004._07.sistran.RecuperaClaveRespuesta servResp = null;
		LoginRespuesta resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().
					loginCambiarContrasenia(request.getUsuario(), 
					request.getContrasenia(), request.getNuevaContrasenia());
			resp = LoginConverter.convertToRecuperaClaveRespuesta(servResp);
			
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoProductos() {
		org.datacontract.schemas._2004._07.sistran.CatalogoProductosRespuestas servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoProductos();
			resp = LoginConverter.convertRespuestaProd(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCoberturas(
			Integer idProducto) {
		
		org.datacontract.schemas._2004._07.sistran.ArrayOfCatalogoCoberturas servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().
					consultaCatalogoCoberturas(idProducto);
			
			resp = LoginConverter.convertRespuestaCob(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoPlanes(
			Integer idProducto) {
		org.datacontract.schemas._2004._07.sistran.ArrayOfPlanCotizar servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().
					consultaCatalogoPlanes(idProducto);
			resp = LoginConverter.convertRespuestaPlan(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public ConsultaTarifaVO consultaTarifa(
			Integer idProducto, Integer idPaquete, Long edad, Integer idPago, Integer mods) {
		org.datacontract.schemas._2004._07.sistran.RespuestaTarifa servResp = null;
		ConsultaTarifaVO resp = new ConsultaTarifaVO();
		try {
			GregorianCalendar c = new GregorianCalendar();
			c.setTimeInMillis(edad);
			XMLGregorianCalendar birth = DatatypeFactory.newInstance().newXMLGregorianCalendar(c);
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaTarifas(
					idProducto, idPaquete, idPago, birth, mods);
			resp.setCodigoRespuesta(servResp.getCodigoRespuesta().intValue());
			resp.setMensaje(servResp.getMensaje().getValue());
			resp.setFechaOperacion(Calendar.getInstance().getTime());
			resp.setTarifa(servResp.getPrima());
			resp.setDeducible(servResp.getDeducible());
			resp.setSuma(servResp.getSAMaxima());
			resp.setEdad(servResp.getEdad());
		} catch(WebServiceException | DatatypeConfigurationException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaFormaPago(int idProd) {
		org.datacontract.schemas._2004._07.sistran.ArrayOfConsultaCatalogoFormaPago servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().cotizaFormaDePago(idProd);
			resp = LoginConverter.convertRespuestaFormaPago(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaModulo consultaCatalogoModulos(int idProd) {
		org.datacontract.schemas._2004._07.sistran.Modulos servResp = null;
		RespuestaModulo resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaModulos(idProd);
			resp = LoginConverter.convertCatalogoModulo(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionarioConocimiento() {
		org.datacontract.schemas._2004._07.sistran.CatalogoCuestionarioConocimiento servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoCuestionario();
			resp = LoginConverter.convertRespuestaCatCuestCon(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionarioMedico() {
		org.datacontract.schemas._2004._07.sistran.CatalogoCuestionarioMedico servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoMedico();
			resp = LoginConverter.convertRespuestaCatMedico(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionarioBedida() {
		org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaBebida servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoBebida();
			resp = LoginConverter.convertRespuestaCatBebida(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionarioFDeporte() {
		org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaDeporte servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoDeporte();
			resp = LoginConverter.convertRespuestaCatDeporte(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionrioFuma() {
		org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaFuma servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoFuma();
			resp = LoginConverter.convertRespuestaCatFuma(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionrioParentesco() {
		org.datacontract.schemas._2004._07.sistran.CatalogoTipoParentesco servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoParentesco();
			resp = LoginConverter.convertRespuestaCatParentesco(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionrioCliente() {
		org.datacontract.schemas._2004._07.sistran.CatalogoTipoCliente servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoCliente();
			resp = LoginConverter.convertRespuestaCatCliente(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionrioTDeporte() {
		org.datacontract.schemas._2004._07.sistran.CatalogoTipoDeporte servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoTDeporte();
			resp = LoginConverter.convertRespuestaCatTDeporte(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoCuestionrioTIdentificacion() {
		org.datacontract.schemas._2004._07.sistran.CatalogoTipoIdentificacion servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoTIdentificacion();
			resp = LoginConverter.convertRespuestaCatTIdentificacion(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<RespuestaEntidadVO>> consultaCatalogoEstado() {
		org.datacontract.schemas._2004._07.sistran.CatalogoEstadosRespuestas servResp = null;
		RespuestaVO<List<RespuestaEntidadVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoEstados();
			resp = LoginConverter.convertCatalogoEstado(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<RespuestaEntidadVO>> consultaCatalogoMunicipio(String claveEntidad) {
		org.datacontract.schemas._2004._07.sistran.CatalogoMunicipioRespuestas servResp = null;
		RespuestaVO<List<RespuestaEntidadVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoMunicipio(claveEntidad);
			resp = LoginConverter.convertCatalogoMunicipio(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<ConsultaPorCodigoPostalVO> consultaCodigoPostal(String codigoPostal) {
		CatalogoCPRespuestas servResp = null;
		RespuestaVO<ConsultaPorCodigoPostalVO> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoPostal(codigoPostal);
			resp = LoginConverter.convertConsultaPostal(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaVO<List<CatConsultaVO>> consultaCatalogoOcupacion() {
		org.datacontract.schemas._2004._07.sistran.CatalogoOcupacionRepuestas servResp = null;
		RespuestaVO<List<CatConsultaVO>> resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().consultaCatalogoOcupaciones();
			resp = LoginConverter.convertCatalogoOcupacion(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public LoginNormalRespuesta finalizarSesion(String correo) {
		org.datacontract.schemas._2004._07.sistran.ClaseRespuesta servResp = null;
		LoginNormalRespuesta resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().finalizaSesion(correo);
			resp = LoginConverter.convertLogout(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
	
	public RespuestaRFCVO calculaRFC(RFCCalculaVO request) {
		org.datacontract.schemas._2004._07.sistran.CatalogoCalcularRFC servResp = null;
		RespuestaRFCVO resp = null;
		try {
			servResp = this.getInstanceLoginService().getBasicHttpBindingIService().calculaRFC(
					request.getNombre(), request.getPaterno(), request.getPaterno(), 
					request.getFechaNacimiento());
			resp = LoginConverter.convertCalcularRFC(servResp);
		} catch(WebServiceException e) {
			e.printStackTrace();
		}
		return resp;
	}
}
