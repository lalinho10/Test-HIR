import { Injectable }	   from '@angular/core';
import { Router }		   from '@angular/router';

import { Usuario }		   from 'app/core/models/acceso/usuario';

import { AppModalService } from 'app/modulos/shared/app-modal/app-modal.service';

@Injectable()
export class AuthenticationService {

	constructor(
		private appModalService: AppModalService,
		private router: Router
	){}

	public login( usuario: Usuario ): void {
		if( usuario.nombre !== 'ppantera@hir.com' && usuario.clave !== 'ChocoMilk$2018' ) {
			this.appModalService.openModal( 'error', 'Usuario o contraseña  incorrectos, intenta nuevamente' );
		} else {
			localStorage.setItem( 'token', 'fooSession' );
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
		this.router.navigateByUrl( '/acceso/login' );
	}

}