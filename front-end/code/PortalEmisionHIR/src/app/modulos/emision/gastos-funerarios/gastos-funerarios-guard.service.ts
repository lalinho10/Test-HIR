import { Injectable }			   from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }	   from '@angular/router';

import { GastosFunerariosService } from './gastos-funerarios.service';

import { AppModalService }		   from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class GastosFunerariosGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private gastosFunerariosService: GastosFunerariosService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.gastosFunerariosService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Emisión - Gastos Funerarios.' );
			this.router.navigateByUrl( '/emision/gastosfunerarios' );
			return false;
		}
		return true;
	}

}