import { Injectable }	   from '@angular/core';
import { Router }		   from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable }	   from 'rxjs/Observable';

import { Usuario }		   from 'app/core/models/acceso/usuario';

import { AppModalService } from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class AuthenticationService {
	private idCodigo: string;
	private authenticated = new BehaviorSubject<boolean>( false );

	constructor(
		private appModalService: AppModalService,
		private router: Router
	){}

	getAuthenticated(): Observable<boolean> {
		return this.authenticated.asObservable();
	}

	public login( idCodigo: string ): void {
		this.idCodigo = idCodigo;;
	}

	public tokenLogin( token: string ) {
		if( token != 'a1b2c3d4' ) {
			this.appModalService.openModal( 'error', 'Código incorrecto, intenta nuevamente' );
		} else {
			localStorage.setItem( 'token', 'fooSession' );
			this.authenticated.next( true );
			this.router.navigateByUrl( '/inicio' );
		}
	}

	public isAuthenticated(): boolean {
		const token = localStorage.getItem( 'token' );

		let hasToken = ( token ) ? true : false;
		
		this.authenticated.next( hasToken );

		return hasToken;
	}

	public logout(): void {
		localStorage.clear();
		this.authenticated.next( false );
		this.router.navigateByUrl( '/acceso/login' );
		this.appModalService.openModal( 'success', 'Su sesión ha sido cerrada correctamente' );
	}

}