package mx.com.dti.os.service.rest.login;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import mx.com.dti.os.service.vo.login.LoginRegistroVO;

@Path("")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON)
public class LoginRestService {

	@Path("")
	@POST
	public Response loginRegistro(LoginRegistroVO request) {
		return null;
		
	}
}
