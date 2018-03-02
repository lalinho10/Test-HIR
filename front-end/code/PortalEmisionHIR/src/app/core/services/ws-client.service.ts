import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WSClientService {
	private host: string = 'http://localhost:3005';

	constructor( private http: HttpClient ) {}

	getObject( serviceName: string ): Observable<any> {
		return this.http.get( this.host + serviceName );
	}

	postObject( serviceName: string, serviceBody: any ): Observable<any> {
		let options = { 'Content-Type': 'application/json' }

		return this.http.post( this.host + serviceName, serviceBody, options );
	}
}