import { Injectable }			   from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }			   from 'rxjs/Observable';

import { environment }			 from '../../../environments/environment';

@Injectable()
export class WSClientService {
	private appHost: string = environment.appHost;
	private isDevelopment: boolean = environment.development;

	constructor( private http: HttpClient ) {}

	getObject( serviceName: string ): Observable<any> {
		return this.http.get( this.appHost + serviceName );
	}

	postObject( serviceName: string, serviceBody: any ): Observable<any> {
		if( this.isDevelopment ) {
			return this.createMockRequest( serviceName, serviceBody );
		} else {
			let headers = new HttpHeaders().set( 'Content-Type', 'application/json' );

			return this.http.post( this.appHost + serviceName, serviceBody, { headers: headers } );
		}
	}

	private createMockRequest( serviceName: string, serviceBody: any ): Observable<any> {
		let serviceId = '';

		if( serviceBody.id !== null && typeof serviceBody.id !== 'undefined' ) {
			serviceId = '/' + serviceBody.id;
		} else if( serviceBody.clave !== null && typeof serviceBody.clave !== 'undefined' ) {
			serviceId = '/' + serviceBody.clave;
		}

		let mockService = serviceName + serviceId;

		return this.http.get( this.appHost + mockService );
	}
}