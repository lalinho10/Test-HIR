

import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import mx.com.dti.os.service.rest.configuracion.FacultadesRestService;
import mx.com.dti.os.service.rest.configuracion.ModulosRestService;
import mx.com.dti.os.service.rest.configuracion.RolFacultadRestService;
import mx.com.dti.os.service.rest.configuracion.RolesRestService;
import mx.com.dti.os.service.rest.configuracion.ServiciosRestService;
import mx.com.dti.os.service.rest.configuracion.StatesRestService;
import mx.com.dti.os.service.rest.login.LoginRestService;


@ApplicationPath("dtiServices")
public class RestApplication extends Application
{
	private static final Logger LOG = Logger.getLogger(RestApplication.class.getName());

	@Override
	public Set<Class<?>> getClasses() {
		Set<Class<?>> services = new HashSet<Class<?>>();
		services.add(FacultadesRestService.class);
		services.add(RolesRestService.class);
		services.add(ModulosRestService.class);
		services.add(ServiciosRestService.class);
		services.add(RolFacultadRestService.class);
		services.add(StatesRestService.class);
		services.add(LoginRestService.class);
		
	LOG.info("servicios agregados");
		
		return services;
	}
}
