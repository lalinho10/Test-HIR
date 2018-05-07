import { Injectable }				from '@angular/core';
import { ActivatedRouteSnapshot,
		 CanActivate,
		 Router,
		 RouterStateSnapshot }		from '@angular/router';

import { SeguhirEmpresarioService }	from './seguhir-empresario.service';

import { AppModalService }			from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class SeguhirEmpresarioGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private seguhirEmpresarioService: SeguhirEmpresarioService,
		private router: Router
	){}

	canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
		if ( !this.seguhirEmpresarioService.isValidPath( route.routeConfig.path ) ) {
			this.appModalService.openModal( 'error', 'Sin datos para el flujo de Emisión - SeguHIR Empresario.' );
			this.router.navigateByUrl( '/emision/seguhirempresario' );
			return false;
		}
		return true;
	}

}