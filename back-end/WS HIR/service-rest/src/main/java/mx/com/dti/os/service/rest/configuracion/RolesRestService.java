package mx.com.dti.os.service.rest.configuracion;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import mx.com.dti.os.service.common.util.comunes.ResponseTxVO;
import mx.com.dti.os.service.soap.configuracion.facultades.CatFacultadRequestVO;
import mx.com.dti.os.service.vo.configuracion.roles.CatRolVO;
import mx.com.dti.os.service.vo.configuracion.roles.RolesResponseVO;

@Path("")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON)
public class RolesRestService {

	@Path("obtCatRoles")
	@POST
	public Response obtenerCatalogoRoles() {
		RolesResponseVO output = null;
		RolesServices servicio = new RolesServices();
		output = servicio.obtenerCatalogoRoles();
		return Response.ok(output).status(200).build();
	}
	
	@Path("insIpdRol")
	@POST
	public Response guardarFacultad(CatRolVO rol) {
		ResponseTxVO output = null;
		RolesServices servicio = new RolesServices();
		output = servicio.guardaRol(rol);
		return Response.ok(output).status(200).build();
	}
	
}
