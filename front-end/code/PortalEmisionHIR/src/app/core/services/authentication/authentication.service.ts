import { Injectable }	   from '@angular/core';
import { Router }		   from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable }	   from 'rxjs/Observable';

import { Usuario }		   from 'app/core/models/acceso/usuario';

import { AppModalService } from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class AuthenticationService {
	private authenticated = new BehaviorSubject<boolean>( false );

	constructor(
		private appModalService: AppModalService,
		private router: Router
	){}

	getAuthenticated(): Observable<boolean> {
		return this.authenticated.asObservable();
	}

	public login( usuario: Usuario ): void {
		if( usuario.nombre !== 'ppantera@hir.com' || usuario.clave !== 'ChocoMilk$2018' ) {
			this.appModalService.openModal( 'error', 'Usuario o contraseña  incorrectos, intenta nuevamente' );
		} else {
			localStorage.setItem( 'token', 'fooSession' );
			this.authenticated.next( true );
			this.router.navigateByUrl( '/acceso/codigo' );
		}
	}

	public isAuthenticated(): boolean {
		const token = localStorage.getItem( 'token' );
		
		if( token ) {
			return true;
		} else {
			return false;
		}
	}

	public logout(): void {
		localStorage.clear();
		this.authenticated.next( false );
		this.router.navigateByUrl( '/acceso/login' );
		this.appModalService.openModal( 'success', 'Su sesión ha sido cerrada correctamente' );
	}

}