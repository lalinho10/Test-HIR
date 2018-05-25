import { Injectable }	   from '@angular/core';
import { Router }		   from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable }	   from 'rxjs/Observable';

import { Usuario }		   from 'app/core/models/acceso/usuario';

import { AppModalService } from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class AuthenticationService {
	private _idCodigo: number;
	private authenticated = new BehaviorSubject<boolean>( false );

	constructor(
		private appModalService: AppModalService,
		private router: Router
	){}

	get idCodigo(): number {
		return this._idCodigo;
	}

	getAuthenticated(): Observable<boolean> {
		return this.authenticated.asObservable();
	}

	public loginAcceso( idCodigo: number ): void {
		this._idCodigo = idCodigo;
	}

	public codigoAcceso( codigo: string ) {
		if( this._idCodigo !== null && typeof this._idCodigo !== 'undefined' && 
					codigo !== null && typeof codigo !== 'undefined' ) {
			localStorage.setItem( 'token', 'fooSession' );
			this.authenticated.next( true );
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
		this._idCodigo = undefined;
		this.authenticated.next( false );
		this.router.navigateByUrl( '/acceso/login' );
		this.appModalService.openModal( 'success', 'Su sesión ha sido cerrada correctamente' );
	}

}