import { Injectable }			 from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }	 from '@angular/router';

import { RcontrasenaService }	 from './rcontrasena.service';

import { AppModalService }		 from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class RcontrasenaGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private rcontrasenaService: RcontrasenaService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.rcontrasenaService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Recuperación de contraseña' );
			this.router.navigateByUrl( '/rcontrasena' );
			return false;
		}
		return true;
	}

}