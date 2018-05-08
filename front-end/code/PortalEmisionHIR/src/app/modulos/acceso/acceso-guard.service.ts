import { Injectable }			 from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }	 from '@angular/router';

import { AccesoService }		 from './acceso.service';

import { AppModalService }		 from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class AccesoGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private accesoService: AccesoService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.accesoService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Acceso' );
			this.router.navigateByUrl( '/acceso' );
			return false;
		}
		return true;
	}

}