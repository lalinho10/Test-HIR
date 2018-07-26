import { Injectable }			 from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }	 from '@angular/router';

import { ApindividualService }	 from './apindividual.service';

import { AppModalService }		 from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class ApindividualGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private apindividualService: ApindividualService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.apindividualService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Emisión - Accidentes Personales Individual' );
			this.router.navigateByUrl( '/emision/apindividual' );
			return false;
		}
		return true;
	}

}