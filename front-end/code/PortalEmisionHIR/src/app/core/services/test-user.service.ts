import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { TestUser } from '../models/test-user';

import { LoadingModalService } from 'app/modulos/shared/loading-modal/loading-modal.service';

@Injectable()
export class TestUserService {
	constructor( 
		private http: Http,
		private loadingModalService: LoadingModalService
	) {}

	getUsers(): Observable<TestUser[]> {
		this.loadingModalService.openModal();

		return this.http.get( 'https://jsonplaceholder.typicode.com/users' )
			.map( ( res: Response ) => {
				this.loadingModalService.closeModal();
				return res.json();
			})
			.catch( ( error: any ) => {
				this.loadingModalService.closeModal();
				return Observable.throw( error.json().error || 'Server error' )
			});
	}

	private extractData( res: Response ) {
		//debugger;
		//this.loadingModalService.closeModal();

		let body = res.json();
		return body || {};
	}

	private handleError( error: any ) {
		//debugger;
		//this.loadingModalService.closeModal();

		let errMsg = (error.message) ? error.message :
        			  error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.error(errMsg);

        return Observable.throw(errMsg);
	}
}