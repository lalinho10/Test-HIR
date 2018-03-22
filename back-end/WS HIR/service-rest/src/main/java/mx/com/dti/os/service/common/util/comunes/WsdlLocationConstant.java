package mx.com.dti.os.service.common.util.comunes;

import java.util.ResourceBundle;

import javax.annotation.ManagedBean;
import javax.enterprise.inject.Default;
import javax.inject.Inject;

@ManagedBean
@Default
public class WsdlLocationConstant {
	
	private ResourceBundle rb;

	private String wsldLocationHostName;
	public String getWsdlLocationHostName() {
		wsldLocationHostName = rb.getString("wsdlLocation-host-name");
		return wsldLocationHostName;
	}
}