import { Injectable }			 from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }	 from '@angular/router';

import { SegubiciService }		 from './segubici.service';

import { AppModalService }		 from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class SegubiciGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private segubiciService: SegubiciService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.segubiciService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Emisión - Segubici' );
			this.router.navigateByUrl( '/emision/segubici' );
			return false;
		}
		return true;
	}

}