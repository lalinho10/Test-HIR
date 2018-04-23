import { Injectable }		   from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { CotizacionService }   from './cotizacion.service';

import { AppModalService }	   from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class CotizacionGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private cotizacionService: CotizacionService,
		private router: Router
	){}

	canActivate(): boolean {
		if ( !this.cotizacionService.hayDatosCotizacion() ) {
			this.appModalService.openModal( 'error', 'Sin datos para el Resultado de la cotización.' );
			this.router.navigateByUrl( '/cotizacion' );
			return false;
		}
		return true;
	}

}