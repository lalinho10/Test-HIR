/**
 * 
 */
package mx.com.dti.os.service.common.util.comunes;

import java.lang.reflect.InvocationTargetException;

import javax.ws.rs.core.Response;

/**
 * @author DTI
 *
 */
public class ResponseHelper {

	private static final int codeOk = 0;
	private static final int codeError = 1;
	private static final int codeWarning = 2;
	private static final int codeConn = 3;
	
	public static Response responseCode(int code ,Object response) {
		if(codeOk == code) {
			return Response.ok(response).status(200).build();
		}
		else if(codeError == code) {
			return Response.ok(response).status(601).build();
		}
		else if(codeWarning == code){
			return Response.ok(response).status(602).build();
		}
		else {
			return Response.ok(response).status(603).build();
		}
	}
	
	public static void code0to200(Object obj) {
		try {
			if((int)obj.getClass().getMethod("getCodigoRespuesta", null).invoke(obj, null) == 0)
				obj.getClass().getMethod("setCodigoRespuesta", Integer.class).invoke(obj, 200);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SecurityException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
