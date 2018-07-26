import { Injectable }		 from '@angular/core';
import { Router }			 from '@angular/router';
import { BehaviorSubject }	 from 'rxjs/BehaviorSubject';
import { Observable }		 from 'rxjs/Observable';

import { AuthenticatedUser } from './authenticated-user';

import { AppModalService }	 from 'app/core/components/app-modal/app-modal.service';
import { WSClientService }	 from 'app/core/services/ws-client.service';

@Injectable()
export class AuthenticationService {
	private _idCodigo: number;
	private _idUsuario: string;
	private _authenticatedUser: AuthenticatedUser;
	private authenticated = new BehaviorSubject<boolean>( false );

	constructor(
		private appModalService: AppModalService,
		private router: Router,
		private wsClientService: WSClientService
	){}

	get idCodigo(): number {
		return this._idCodigo;
	}

	get idUsuario(): string {
		return this._idUsuario;
	}

	get authenticatedUser(): AuthenticatedUser {
		if( this._authenticatedUser === null || typeof this._authenticatedUser === 'undefined' ) {
			let sessionUserObj = JSON.parse( window.atob( sessionStorage.getItem( 'loggedUser' ) ) );
			this._authenticatedUser = sessionUserObj;
		}
		return this._authenticatedUser;
	}

	getAuthenticated(): Observable<boolean> {
		return this.authenticated.asObservable();
	}

	public loginAcceso( idUsuario: string, idCodigo: number ): void {
		this._idUsuario = idUsuario;
		this._idCodigo = idCodigo;
	}

	public codigoAcceso( codigo: string ) {
		if( this._idCodigo !== null && typeof this._idCodigo !== 'undefined' && 
					codigo !== null && typeof codigo !== 'undefined' ) {
			sessionStorage.setItem( 'token', 'fooSession' );
			sessionStorage.setItem( 'loggedUser', window.btoa( JSON.stringify( this._authenticatedUser ) ) );
			this.authenticated.next( true );
		}
	}

	public authenticatedUserAcceso( response: any ) {
		this._authenticatedUser = new AuthenticatedUser();

		this._authenticatedUser.idUsuario = this._idUsuario;
		this._authenticatedUser.claveRol = response.claveRol;
		this._authenticatedUser.fechaOperacion = new Date( response.fechaOperacion );
		this._authenticatedUser.nombreUsuario = response.nombreUsuario;
		this._authenticatedUser.ultimoLogin = new Date( response.ultimoLogin );
	}

	public isAuthenticated(): boolean {
		const token = sessionStorage.getItem( 'token' );

		let hasToken = ( token ) ? true : false;
		
		this.authenticated.next( hasToken );

		return hasToken;
	}

	public logout(): void {
		let loggedUser = JSON.parse( window.atob( sessionStorage.getItem( 'loggedUser' ) ) );

		this.wsClientService
			.postObject( '/loginCerrarSesion', { usuario: loggedUser.idUsuario } )
			.subscribe( response => {
				if( response.codigoRespuesta === 200 ) {
					sessionStorage.clear();
					this._idCodigo = undefined;
					this.authenticated.next( false );
					this.router.navigateByUrl( '/acceso/login' );
					this.appModalService.openModal( 'success', 'Su sesión ha sido cerrada correctamente' );
				}
			});
	}

}