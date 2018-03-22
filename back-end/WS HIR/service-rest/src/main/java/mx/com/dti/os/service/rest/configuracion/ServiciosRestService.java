package mx.com.dti.os.service.rest.configuracion;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import mx.com.dti.os.service.vo.configuracion.servicios.ServiciosResponseVO;


@Path("")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON)
public class ServiciosRestService {

	@Path("obtCatServicios")
	@POST
	public Response obtenerCatalogoServicios() {
		ServiciosResponseVO output = null;
		ServiciosService servicio = new ServiciosService();
		output = servicio.recuperaCatalogoServicios();
		return Response.ok(output).status(200).build();
	}
	
}
