import { Injectable }		   from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { PagoService }		   from './pago.service';

import { AppModalService }	   from 'app/core/components/app-modal/app-modal.service';

@Injectable()
export class PagoGuardService implements CanActivate {

	constructor(
		private appModalService: AppModalService,
		private pagoService: PagoService,
		private router: Router
	){}

	canActivate(): boolean {
		if ( !this.pagoService.hayDatosPago() ) {
			this.appModalService.openModal( 'error', 'Sin datos para el Pago de OpenPay' );
			this.router.navigateByUrl( '/emision' );
			return false;
		}
		return true;
	}

}