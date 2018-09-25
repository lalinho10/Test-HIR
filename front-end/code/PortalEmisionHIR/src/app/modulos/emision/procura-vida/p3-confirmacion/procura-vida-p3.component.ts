import { Component, OnInit }	 from '@angular/core';
import { Router }				 from '@angular/router';

import { PagoService }			 from '../../pago.service';

import { ProcuraVidaP1Service }	 from '../p1-usuario/procura-vida-p1.service';
import { ProcuraVidaP2Service }	 from '../p2-beneficiarios/procura-vida-p2.service';

import { ProcuraVidaP1 }		 from '../p1-usuario/procura-vida-p1';
import { ProcuraVidaP2 }		 from '../p2-beneficiarios/procura-vida-p2';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-procura-vida-p3',
	templateUrl: 'procura-vida-p3.component.html'
})

export class ProcuraVidaP3Component implements OnInit {
	editaAgente: boolean = false;

	procuraVidaP1: ProcuraVidaP1;
	procuraVidaP2: ProcuraVidaP2;

	constructor(
		private authenticationService: AuthenticationService,
		private pagoService: PagoService,
		private procuraVidaP1Service: ProcuraVidaP1Service,
		private procuraVidaP2Service: ProcuraVidaP2Service,
		private router: Router
	) {}

	ngOnInit() {
		this.procuraVidaP1 = this.procuraVidaP1Service.getModelP1();
		this.procuraVidaP2 = this.procuraVidaP2Service.getModelP2();
		this.editaAgente = ( this.authenticationService.authenticatedUser.claveRol === 'Agente' ||
							 this.authenticationService.authenticatedUser.claveRol === 'Operativo' );
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/procuravida/beneficiarios' );
	}

	fnContinuar(): void {
		this.pagoService.definirPago( 1484, this.procuraVidaP2.resultado.pago );
		this.router.navigateByUrl( '/openpay' );
	}
}