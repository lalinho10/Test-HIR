import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WSClientService {
	constructor( private http: Http ) {}

	getObject( host: string, serviceName: string ): Observable<any> {
		return this.http.get( host + serviceName )
			.map( ( res: Response ) => res.json() )
			.catch( ( error: any ) => Observable.throw( error.json().error || 'Server error' ) );
	}

	postObject( host: string, serviceName: string, serviceBody: any ): Observable<any> {
		let headers = new Headers( { 'Content-Type': 'application/json' } );
		let options = new RequestOptions( { headers: headers } );

		return this.http.post( host + serviceName, serviceBody, options )
			.map( ( res: Response ) => res.json() )
			.catch( ( error: any ) => Observable.throw( error.json().error || 'Server error' ) );
	}
}