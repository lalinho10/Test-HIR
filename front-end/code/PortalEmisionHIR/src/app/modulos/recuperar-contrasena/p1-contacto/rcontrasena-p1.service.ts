import { Injectable }			from '@angular/core';

import { RcontrasenaP1Request } from './rcontrasena-p1.request';

@Injectable()
export class RcontrasenaP1Service {
	private rcontrasenaP1Request: RcontrasenaP1Request;

	getRequest( frmRconP1: any ): RcontrasenaP1Request {
		this.rcontrasenaP1Request = new RcontrasenaP1Request();
		this.rcontrasenaP1Request.correo = frmRconP1.correoe;
		return this.rcontrasenaP1Request;
	}
}