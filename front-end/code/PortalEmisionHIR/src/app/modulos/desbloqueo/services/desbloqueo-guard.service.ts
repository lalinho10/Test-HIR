import { Injectable }			 from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }	 from '@angular/router';

import { DesbloqueoService }	 from './desbloqueo.service';

import { AppModalService }		 from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class DesbloqueoGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private desbloqueoService: DesbloqueoService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.desbloqueoService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Desbloqueo.' );
			this.router.navigateByUrl( '/desbloqueo' );
			return false;
		}
		return true;
	}

}