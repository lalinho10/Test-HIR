import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

	constructor() {}

	public isAuthenticated(): boolean {
		const token = localStorage.getItem( 'token' );
		
		if( token ) {
			return true;
		} else {
			return false;
		}    	
  	}

}