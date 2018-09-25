import { Component, OnInit }	 from '@angular/core';
import { Router }				 from '@angular/router';

import { PagoService }			 from '../../pago.service';

import { SegubiciP1Service }	 from '../p1-usuario/segubici-p1.service';
import { SegubiciP2Service }	 from '../p2-seguro/segubici-p2.service';

import { SegubiciP1 }			 from '../p1-usuario/segubici-p1';
import { SegubiciP2 }			 from '../p2-seguro/segubici-p2';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-segubici-p3',
	templateUrl: 'segubici-p3.component.html'
})

export class SegubiciP3Component implements OnInit {
	editaAgente: boolean = false;

	segubiciP1: SegubiciP1;
	segubiciP2: SegubiciP2;

	constructor(
		private authenticationService: AuthenticationService,
		private pagoService: PagoService,
		private segubiciP1Service: SegubiciP1Service,
		private segubiciP2Service: SegubiciP2Service,
		private router: Router
	){}

	ngOnInit() {
		this.segubiciP1 = this.segubiciP1Service.getModelP1();
		this.segubiciP2 = this.segubiciP2Service.getModelP2();
		this.editaAgente = ( this.authenticationService.authenticatedUser.claveRol === 'Agente' ||
							 this.authenticationService.authenticatedUser.claveRol === 'Operativo' );
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/segubici/seguro' );
	}

	fnContinuar(): void {
		this.pagoService.definirPago( 1560, this.segubiciP2.resultado.pago );
		this.router.navigateByUrl( '/emision/openpay' );
	}
}