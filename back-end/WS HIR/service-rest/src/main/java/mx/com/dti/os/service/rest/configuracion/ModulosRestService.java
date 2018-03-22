package mx.com.dti.os.service.rest.configuracion;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import mx.com.dti.os.service.soap.configuracion.modulos.FacRolRequestVO;
import mx.com.dti.os.service.soap.configuracion.modulos.ModuloRequestVO;
import mx.com.dti.os.service.soap.configuracion.modulos.ModulosResponseVO;

@Path("")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON)
public class ModulosRestService {

	@Path("obtCatModulos")
	@POST
	public Response obtenerCatalogoModulos() {
		ModulosResponseVO output = null;
		ModulosServices servicio = new ModulosServices();
		output = servicio.obtenerCatalogoModulos();
		return Response.ok(output).status(200).build();
	}
	
	@Path("guardarModulo")
	@POST
	public Response insertarModulo(ModuloRequestVO requestModulo) {
		ModulosResponseVO output = null;
		ModulosServices servicio = new ModulosServices();
		output = servicio.insertarModulo(requestModulo);
		output = servicio.obtenerCatalogoModulos();
		return Response.ok(output).status(200).build();
	}
	
	@Path("ObtMenuRol")
	@POST
	public Response obtenerCatalogoModulos(FacRolRequestVO vo) {
		ModulosResponseVO output = null;
		ModulosServices servicio = new ModulosServices();
		output = servicio.obtenerMenu(vo);
		return Response.ok(output).status(200).build();
	}
	
}
