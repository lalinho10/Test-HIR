package mx.com.dti.os.service.rest.configuracion;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import mx.com.dti.os.service.common.util.comunes.RespuestaVO;
import mx.com.dti.os.service.vo.configuracion.rolfac.ConfigRolFacRequestVO;

@Path("")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON)
public class RolFacultadRestService {

	@Path("guardaConfiguracionRolFac")
	@POST
	public Response guardaConfiguracion(ConfigRolFacRequestVO request) {
		RespuestaVO output = null;
		RolFacultadService servicio = new RolFacultadService();
		output = servicio.insertaRolFacultad(request);
		return Response.ok(output).status(200).build();
	}
	
}
