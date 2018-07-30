package mx.com.dti.os.service.rest.configuracion;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import mx.com.dti.os.service.common.util.comunes.RespuestaVO;
import mx.com.dti.os.service.soap.configuracion.facultades.CatFacultadRequestVO;
import mx.com.dti.os.service.soap.configuracion.facultades.FacRolRequestVO;
import mx.com.dti.os.service.vo.configuracion.facultades.FacultadesResponseVO;


@Path("")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON)
public class FacultadesRestService{

	@Inject FacultadesService servicio;
	
	@Path("obtCatFacs")
	@POST
	public Response obtenerCatalogoFacultades() {
		FacultadesResponseVO output = null;
		//FacultadesService servicio = new FacultadesService();
		output = servicio.recuperaCatalogoFacultades();
		return Response.ok(output).status(200).build();
	}
	
	@Path("insIpdFacultad")
	@POST
	public Response guardarFacultad(CatFacultadRequestVO facultad) {
		RespuestaVO output = null;
		FacultadesService servicio = new FacultadesService();
		output = servicio.guardaFacultad(facultad);
		return Response.ok(output).status(200).build();
	}
	
	@Path("obtConfiguracionRol")
	@POST
	public Response obtenerConfiguracionRol(FacRolRequestVO vo) {
		FacultadesResponseVO output = null;
		FacultadesService servicio = new FacultadesService();
		output = servicio.obtenerConfiguracionRol(vo);
		return Response.ok(output).status(200).build();
	}


}
