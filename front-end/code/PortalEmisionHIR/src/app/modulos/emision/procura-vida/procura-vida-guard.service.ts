import { Injectable }			 from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }	 from '@angular/router';

import { ProcuraVidaService }	 from './procura-vida.service';

import { AppModalService }		 from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class ProcuraVidaGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private procuraVidaService: ProcuraVidaService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.procuraVidaService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Emisión - Procura Vida.' );
			this.router.navigateByUrl( '/emision/procuravida' );
			return false;
		}
		return true;
	}

}