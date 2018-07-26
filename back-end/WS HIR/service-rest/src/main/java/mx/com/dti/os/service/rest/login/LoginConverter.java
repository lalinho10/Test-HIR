/**
 * 
 */
package mx.com.dti.os.service.rest.login;

import java.math.BigInteger;
import java.sql.Time;
import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import mx.com.dti.os.service.common.util.comunes.ConsultaPorCodigoPostalVO;
import mx.com.dti.os.service.common.util.comunes.RespuestaEntidadVO;
import mx.com.dti.os.service.common.util.comunes.RespuestaRFCVO;
import mx.com.dti.os.service.common.util.comunes.RespuestaVO;
import mx.com.dti.os.service.vo.login.AutenticacionRespuesta;
import mx.com.dti.os.service.vo.login.CatConsultaVO;
import mx.com.dti.os.service.vo.login.LoginNormalRespuesta;
import mx.com.dti.os.service.vo.login.LoginRespuesta;
import mx.com.dti.os.service.vo.login.RespuestaModulo;


/**
 * @author DTI
 *
 */
public class LoginConverter {

	public static LoginRespuesta convertToLoginRespueta(
			org.datacontract.schemas._2004._07.sistran.LoginRespuesta in) {
		
		LoginRespuesta out = new LoginRespuesta();
		
		out.setCodigoRespuesta(in.getCodigoRespuesta());
		out.setFechaOperacion(in.getFechaOperacion().toGregorianCalendar().getTime());
		//out.setIdCodigo(BigInteger.valueOf(in.getIdCodigo()));
		out.setMensaje(in.getMensaje().getValue());
		
		return out;
	}
	
	public static LoginNormalRespuesta convertToLoginNormalRespuesta(
			org.datacontract.schemas._2004._07.sistran.LoginNormalRespuesta in) {
		
		LoginNormalRespuesta out = new LoginNormalRespuesta();
		
		out.setCodigoRespuesta(in.getCodigoRespuesta());
		out.setFechaOperacion(in.getFechaOperacion().toGregorianCalendar().getTime());
		out.setIdCodigo(BigInteger.valueOf(in.getIdCodigo()));
		out.setMensaje(in.getMensaje().getValue());
		
		return out;
	}
	
	public static AutenticacionRespuesta convertToAutenticacionRespuesta(
			org.datacontract.schemas._2004._07.sistran.AutenticacionRespuesta in) {
		
		AutenticacionRespuesta out = new AutenticacionRespuesta();
		
		out.setClaveRol(in.getClaveRol().getValue());
		out.setCodigoRespuesta(Integer.valueOf(in.getCodigoRespuesta().getValue()));
		out.setFechaOperacion(new Date());
		out.setMensaje(in.getMensaje().getValue());
		out.setNombreUsuario(in.getNombreUsuario().getValue());
		out.setUltimoLogin(in.getFechaUltimoLogin().toGregorianCalendar().getTime());
		
		return out;
	}
	
	public static LoginRespuesta convertToRecuperaClaveRespuesta(
			org.datacontract.schemas._2004._07.sistran.RecuperaClaveRespuesta in) {
		
		LoginRespuesta out = new LoginRespuesta();
		out.setCodigoRespuesta(in.getCodigoRespuesta());
		out.setFechaOperacion(in.getFechaOperacion().toGregorianCalendar().getTime());
		out.setMensaje(in.getMensaje().getValue());
		
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaProd(
			org.datacontract.schemas._2004._07.sistran.CatalogoProductosRespuestas in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(null!=in&&!in.getProductos().getValue().getCatalogoProductos().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje("Catálogo recuperado con éxito");
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoProductos aux : 
				in.getProductos().getValue().getCatalogoProductos()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdProductos());
				vo.setDesc(aux.getDescProductos().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else {
			out.setCode(602);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje("Respuesta sin datos");
			out.setData(null);
		}
		
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaFormaPago(
			org.datacontract.schemas._2004._07.sistran.ArrayOfConsultaCatalogoFormaPago in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getConsultaCatalogoFormaPago().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje("Catálogo recuperado con éxito");
			
			for(org.datacontract.schemas._2004._07.sistran.ConsultaCatalogoFormaPago aux : in.getConsultaCatalogoFormaPago()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdFormaPago());
				vo.setDesc(aux.getDescFormaPago().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje("Respuesta sin datos");
			out.setData(null);
		}
		
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCob(
			org.datacontract.schemas._2004._07.sistran.ArrayOfCatalogoCoberturas in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(null!=in&&!in.getCatalogoCoberturas().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje("Catálogo recuperado con éxito");
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoCoberturas aux : in.getCatalogoCoberturas()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdCobertura());
				vo.setDesc(aux.getDescCobertura().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(602);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje("Respuesta sin datos");
			out.setData(null);
		}
		
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaPlan(
			org.datacontract.schemas._2004._07.sistran.ArrayOfPlanCotizar in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(null!=in&&!in.getPlanCotizar().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje("Catálogo recuperado con éxito");
			
			for(org.datacontract.schemas._2004._07.sistran.PlanCotizar aux : in.getPlanCotizar()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdPlan());
				vo.setDesc(aux.getDescPlan().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(602);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje("Respuesta sin datos");
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaModulo convertCatalogoModulo(
			org.datacontract.schemas._2004._07.sistran.Modulos in) {
		
		RespuestaModulo out = new RespuestaModulo();

		out.setFechaOperacion(Calendar.getInstance().getTime());
		out.setMensaje(in.getMensaje().getValue());
		out.setMin(in.getMinModulo().intValue());
		out.setMax(in.getMaxModulo().intValue());
		
		if(in.getCodigoRespuesta() == 0)
			out.setCodigoRespuesta(200);
		else if(in.getCodigoRespuesta() == 1)
			out.setCodigoRespuesta(601);
		else if(in.getCodigoRespuesta() == 2)
			out.setCodigoRespuesta(602);
		else 
			out.setCodigoRespuesta(603);
		
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatCuestCon(
			org.datacontract.schemas._2004._07.sistran.CatalogoCuestionarioConocimiento in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getConocimiento().getValue().getCatalogoConocimiento().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoConocimiento aux : 
				in.getConocimiento().getValue().getCatalogoConocimiento()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdPregunta());
				vo.setDesc(aux.getDescripcion().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatMedico(
			org.datacontract.schemas._2004._07.sistran.CatalogoCuestionarioMedico in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getMedico().getValue().getCatalogoMedico().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoMedico aux : 
				in.getMedico().getValue().getCatalogoMedico()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdPregunta());
				vo.setDesc(aux.getDescripcion().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatBebida(
			org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaBebida in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getBebida().getValue().getCatalogoBebida().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoBebida aux : 
				in.getBebida().getValue().getCatalogoBebida()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdFrecuenciaBebida());
				vo.setDesc(aux.getDescripcionBebida().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatDeporte(
			org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaDeporte in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getDeporte().getValue().getCatalogoDeporte().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoDeporte aux : 
				in.getDeporte().getValue().getCatalogoDeporte()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdFrecuenciaDeporte());
				vo.setDesc(aux.getDescripcionDeporte().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatFuma(
			org.datacontract.schemas._2004._07.sistran.CatalogoFrecuenciaFuma in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getFuma().getValue().getCatalogoFuma().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoFuma aux : 
				in.getFuma().getValue().getCatalogoFuma()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdFrecuenciaFuma());
				vo.setDesc(aux.getDescripcionFuma().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatParentesco(
			org.datacontract.schemas._2004._07.sistran.CatalogoTipoParentesco in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getParentesco().getValue().getCatalogoParentesco().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoParentesco aux : 
				in.getParentesco().getValue().getCatalogoParentesco()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdTipoParentesco());
				vo.setDesc(aux.getDescripcion().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatCliente(
			org.datacontract.schemas._2004._07.sistran.CatalogoTipoCliente in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getCliente().getValue().getCatalogoCliente().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoCliente aux : 
				in.getCliente().getValue().getCatalogoCliente()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdtipocliente());
				vo.setDesc(aux.getDescripcion().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatTDeporte(
			org.datacontract.schemas._2004._07.sistran.CatalogoTipoDeporte in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getTDeporte().getValue().getCatalogoTDeporte().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoTDeporte aux : 
				in.getTDeporte().getValue().getCatalogoTDeporte()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdTipoDeporte());
				vo.setDesc(aux.getDescripcionDeporte().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertRespuestaCatTIdentificacion(
			org.datacontract.schemas._2004._07.sistran.CatalogoTipoIdentificacion in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getIdentificacion().getValue().getCatalogoTIdentificacion().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoTIdentificacion aux : 
				in.getIdentificacion().getValue().getCatalogoTIdentificacion()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(aux.getIdTipoIdentifiacion());
				vo.setDesc(aux.getDescripcion().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<RespuestaEntidadVO>> convertCatalogoEstado(
			org.datacontract.schemas._2004._07.sistran.CatalogoEstadosRespuestas in) {
		
		RespuestaVO<List<RespuestaEntidadVO>> out = new RespuestaVO<>();
		List<RespuestaEntidadVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getEstados().getValue().getCatalogoEstados().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoEstados aux : 
				in.getEstados().getValue().getCatalogoEstados()) {
				RespuestaEntidadVO vo = new RespuestaEntidadVO();
				vo.setClaveEntidad(aux.getClaveEstado().getValue());;
				vo.setDescripcionEntidad(aux.getEstado().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<RespuestaEntidadVO>> convertCatalogoMunicipio(
			org.datacontract.schemas._2004._07.sistran.CatalogoMunicipioRespuestas in) {
		
		RespuestaVO<List<RespuestaEntidadVO>> out = new RespuestaVO<>();
		List<RespuestaEntidadVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getMunicipio().getValue().getCatalogoMunicipio().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoMunicipio aux : 
				in.getMunicipio().getValue().getCatalogoMunicipio()) {
				RespuestaEntidadVO vo = new RespuestaEntidadVO();
				vo.setClaveEntidad(aux.getClaveMunicipio().getValue());;
				vo.setDescripcionEntidad(aux.getMunicipio().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<ConsultaPorCodigoPostalVO> convertConsultaPostal(
			org.datacontract.schemas._2004._07.sistran.CatalogoCPRespuestas in) {
		
		RespuestaVO<ConsultaPorCodigoPostalVO> out = new RespuestaVO<>();
		ConsultaPorCodigoPostalVO vo = new ConsultaPorCodigoPostalVO();
		
		if(in != null){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			vo.setClaveColonia(in.getPostal().getValue().getCatalogoPostal().get(0).getClaveColonia().getValue());
			vo.setClaveEstado(in.getPostal().getValue().getCatalogoPostal().get(0).getClaveEstado().getValue());
			vo.setClaveMunicipio(in.getPostal().getValue().getCatalogoPostal().get(0).getClaveMunicipio().getValue());
			vo.setDescripcionColonia(in.getPostal().getValue().getCatalogoPostal().get(0).getColonia().getValue());
			vo.setDescripcionEstado(in.getPostal().getValue().getCatalogoPostal().get(0).getEstado().getValue());
			vo.setDescripcionMunicipio(in.getPostal().getValue().getCatalogoPostal().get(0).getMunicipio().getValue());
			out.setData(vo);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static RespuestaVO<List<CatConsultaVO>> convertCatalogoOcupacion(
			org.datacontract.schemas._2004._07.sistran.CatalogoOcupacionRepuestas in) {
		
		RespuestaVO<List<CatConsultaVO>> out = new RespuestaVO<>();
		List<CatConsultaVO> listOut = new ArrayList<>();
		
		if(in != null && !in.getOcupaciones().getValue().getCatalogoOcupacion().isEmpty()){
			out.setCode(200);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			
			for(org.datacontract.schemas._2004._07.sistran.CatalogoOcupacion aux : 
				in.getOcupaciones().getValue().getCatalogoOcupacion()) {
				CatConsultaVO vo = new CatConsultaVO();
				vo.setId(Integer.valueOf(aux.getIdOcupacion().getValue()));
				vo.setDesc(aux.getOcupacion().getValue());
				listOut.add(vo);
			}
			out.setData(listOut);
		}
		else{
			out.setCode(603);
			out.setDateTime(Calendar.getInstance().getTime());
			out.setMensaje(in.getMensaje().getValue());
			out.setData(null);
		}
		return out;
	}
	
	public static LoginNormalRespuesta convertLogout(
			org.datacontract.schemas._2004._07.sistran.ClaseRespuesta in) {
		
		LoginNormalRespuesta out = new LoginNormalRespuesta();
		
		out.setCodigoRespuesta(in.getCodigoRespuesta());
		out.setFechaOperacion(Calendar.getInstance().getTime());
		out.setMensaje(in.getMensaje().getValue());
		
		return out;
	}
	
	public static RespuestaRFCVO convertCalcularRFC(
			org.datacontract.schemas._2004._07.sistran.CatalogoCalcularRFC in) {
		
		RespuestaRFCVO out = new RespuestaRFCVO();
		
		out.setCodigoRespuesta(in.getCodigoRespuesta());
		out.setMensaje(in.getMensaje().getValue());
		out.setRfc(in.getRFC().getValue());
		
		return out;
	}
}
