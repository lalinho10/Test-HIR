package mx.com.dti.os.service.rest.login;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.datacontract.schemas._2004._07.sistran.ArrayOfCatalogoCoberturas;
import org.datacontract.schemas._2004._07.sistran.ArrayOfCatalogoProductos;
import org.datacontract.schemas._2004._07.sistran.ArrayOfConsultaCatalogoFormaPago;
import org.datacontract.schemas._2004._07.sistran.ArrayOfPlanCotizar;
import org.datacontract.schemas._2004._07.sistran.RespuestaTarifa;

import mx.com.dti.os.service.common.util.comunes.ClaveConsultaVO;
import mx.com.dti.os.service.common.util.comunes.ConsultaPorCodigoPostalVO;
import mx.com.dti.os.service.common.util.comunes.RFCCalculaVO;
import mx.com.dti.os.service.common.util.comunes.ResponseHelper;
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
import mx.com.dti.os.service.vo.login.ObtenerTarifaVO;
import mx.com.dti.os.service.vo.login.RecuperaClaveVO;
import mx.com.dti.os.service.vo.login.RespuestaModulo;

@Path("")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON)
public class LoginRestService {

	@Inject LoginService service;
	
	@Path("loginRegistro")
	@POST
	public Response loginRegistro(LoginRegistroVO request) {
		LoginRespuesta resp = null;
		resp = service.loginRegistro(request);
		int code = resp.getCodigoRespuesta();
		ResponseHelper.code0to200(resp);
		return ResponseHelper.responseCode(code, (LoginRespuesta) resp);
	}
	
	@Path("loginNormal")
	@POST
	public Response loginNormal(LoginNormalVO request) {
		LoginNormalRespuesta resp = null;
		resp = service.loginNormal(request);
		int code = resp.getCodigoRespuesta();
		ResponseHelper.code0to200(resp);
		return ResponseHelper.responseCode(code, (LoginNormalRespuesta) resp);
	}
	
	@Path("loginAutenticacion")
	@POST
	public Response loginAutenticacion(LoginSmsVO request) {
		AutenticacionRespuesta resp = null;
		resp = service.loginAutenticacion(request);
		int code = resp.getCodigoRespuesta();
		ResponseHelper.code0to200(resp);
		return ResponseHelper.responseCode(code, (AutenticacionRespuesta) resp);
	}
	
	@Path("loginRecuperaClave")
	@POST
	public Response loginRecuperaClave(RecuperaClaveVO request) {
		LoginRespuesta resp = null;
		resp = service.loginRecuperaClave(request);
		int code = resp.getCodigoRespuesta();
		ResponseHelper.code0to200(resp);
		return ResponseHelper.responseCode(code, (LoginRespuesta) resp);
	}
	
	@Path("loginCambiaClave")
	@POST
	public Response loginCambiaClave(CambiaContraseniaVO request) {
		LoginRespuesta resp = null;
		resp = service.CambiarClave(request);
		int code = resp.getCodigoRespuesta();
		ResponseHelper.code0to200(resp);
		return ResponseHelper.responseCode(code, (LoginRespuesta) resp);
	}
	
	@Path("catalogoProducto")
	@POST
	public Response catalogoProducto() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoProductos();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catCobertura")
	@POST
	public Response catalogoCobertura(CatConsultaVO request) {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCoberturas(request.getId());
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catPlan")
	@POST
	public Response catalogoPlanes(CatConsultaVO request) {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoPlanes(request.getId());
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catFormaPago")
	@POST
	public Response catalogoFormaPago(CatConsultaVO request) {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaFormaPago(request.getId());
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("obtTarifa")
	@POST
	public Response obtenerTarifa(ObtenerTarifaVO request) {
		ConsultaTarifaVO resp = null;
		resp = service.consultaTarifa(request.getIdProd(), request.getIdPlan(), request.getFechaNacimiento()
				, request.getIdFormaPago(), request.getModulos());
		int code = resp.getCodigoRespuesta().intValue();
		ResponseHelper.code0to200(resp);
		return ResponseHelper.responseCode(code, resp);
	}
	
	@Path("catalogoModulo")
	@POST
	public Response obtenerCatalogoModulo(CatConsultaVO request) {
		RespuestaModulo resp = null;
		resp = service.consultaCatalogoModulos(request.getId());
		return Response.ok(resp).status(resp.getCodigoRespuesta()).build();
	}
	
	@Path("catalogoCuestionarioConocimiento")
	@POST
	public Response obtenerCatalogoCuestionarioConocimiento() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionarioConocimiento();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoCuestionarioMedico")
	@POST
	public Response obtenerCatalogoCuestionarioMedico() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionarioMedico();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoFrecuenciaBebida")
	@POST
	public Response obtenerCatalogoFrecuenciaBebida() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionarioBedida();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoFrecuenciaFuma")
	@POST
	public Response obtenerCatalogoFrecuenciaFuma() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionrioFuma();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoFrecuenciaDeporte")
	@POST
	public Response obtenerCatalogoFrecuenciaDeporte() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionarioFDeporte();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoTipoParentesco")
	@POST
	public Response obtenerCatalogoTipoParentesco() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionrioParentesco();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoTipoCliente")
	@POST
	public Response obtenerCatalogoTipoCliente() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionrioCliente();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoTipoDeporte")
	@POST
	public Response obtenerCatalogoTipoDeporte() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionrioTDeporte();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoTipoIdentificacion")
	@POST
	public Response obtenerCatalogoTipoIdentificacion() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoCuestionrioTIdentificacion();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoEstado")
	@POST
	public Response obtenerCatalogoEstado() {
		RespuestaVO<List<RespuestaEntidadVO>> resp = null;
		resp = service.consultaCatalogoEstado();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoMunicipio")
	@POST
	public Response obtenerCatalogoMunicipio(ClaveConsultaVO claveEstado) {
		RespuestaVO<List<RespuestaEntidadVO>> resp = null;
		resp = service.consultaCatalogoMunicipio(claveEstado.getClave());
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoPostal")
	@POST
	public Response obtenerCatalogoPostal(ClaveConsultaVO codigoPostal) {
		RespuestaVO<ConsultaPorCodigoPostalVO> resp = null;
		resp = service.consultaCodigoPostal(codigoPostal.getClave());
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("catalogoOcupacion")
	@POST
	public Response obtenerCatalogoOcupacion() {
		RespuestaVO<List<CatConsultaVO>> resp = null;
		resp = service.consultaCatalogoOcupacion();
		return Response.ok(resp).status(resp.getCode()).build();
	}
	
	@Path("loginCerrarSesion")
	@POST
	public Response loginLogout(LoginNormalVO request) {
		LoginNormalRespuesta resp = null;
		resp = service.finalizarSesion(request.getUsuario());
		int code = resp.getCodigoRespuesta();
		ResponseHelper.code0to200(resp);
		return ResponseHelper.responseCode(code, (LoginNormalRespuesta) resp);
	}
	
	@Path("calcularRFC")
	@POST
	public Response calcularRFC(RFCCalculaVO request) {
		RespuestaRFCVO resp = null;
		resp = service.calculaRFC(request);
		int code = resp.getCodigoRespuesta();
		ResponseHelper.code0to200(resp);
		return ResponseHelper.responseCode(code, (RespuestaRFCVO) resp);
	}
}
