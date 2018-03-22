package mx.com.dti.os.service.rest.configuracion;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import mx.com.dti.os.service.soap.configuracion.states.CatStateResponseVO;

@Path("")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON)
public class StatesRestService {

	@Path("obtCatStates")
	@POST
	public Response obtenerCatalogo() {
		CatStateResponseVO output = null;
		StatesService servicio = new StatesService();
		output = servicio.recuperaCatalogoStates();
		return Response.ok(output).status(200).build();
	}
	
}
