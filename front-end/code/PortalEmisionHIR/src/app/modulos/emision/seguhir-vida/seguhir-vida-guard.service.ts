import { Injectable }				from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }		from '@angular/router';

import { SeguhirVidaService }		from './seguhir-vida.service';

import { AppModalService }			from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class SeguhirVidaGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private seguhirVidaService: SeguhirVidaService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.seguhirVidaService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Emisión - SeguHIR Cáncer' );
			this.router.navigateByUrl( '/emision/seguhirvida' );
			return false;
		}
		return true;
	}

}