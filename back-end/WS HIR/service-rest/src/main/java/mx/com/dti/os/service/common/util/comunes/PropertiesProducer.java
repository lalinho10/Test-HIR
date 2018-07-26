package mx.com.dti.os.service.common.util.comunes;

import java.util.Locale;
import java.util.ResourceBundle;

import javax.enterprise.inject.Produces;

public class PropertiesProducer {

	/**
	 * Método Produces para la lectura del properties
	 * @return <b>rb</b> : {@link ResourceBundle}
	 */
	@Produces @PropertiesWsdlLocation
	public ResourceBundle wsdlLocationProperties(){
		ResourceBundle rb = ResourceBundle.getBundle("wsdlLocation",Locale.getDefault());
		return rb;
	}
}

