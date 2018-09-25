import { Component, OnInit }	 from '@angular/core';
import { Router }				 from '@angular/router';

import { PagoService }			 from '../../pago.service';

import { ApindividualP1Service } from '../p1-usuario/apindividual-p1.service';
import { ApindividualP2Service } from '../p2-seguro/apindividual-p2.service';

import { ApindividualP1 }		 from '../p1-usuario/apindividual-p1';
import { ApindividualP2 }		 from '../p2-seguro/apindividual-p2';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-apindividual-p3',
	templateUrl: 'apindividual-p3.component.html'
})

export class ApindividualP3Component implements OnInit {
	editaAgente: boolean = false;

	apindividualP1: ApindividualP1;
	apindividualP2: ApindividualP2;

	constructor(
		private apindividualP1Service: ApindividualP1Service,
		private apindividualP2Service: ApindividualP2Service,
		private authenticationService: AuthenticationService,
		private pagoService: PagoService,
		private router: Router
	){}

	ngOnInit() {
		this.apindividualP1 = this.apindividualP1Service.getModelP1();
		this.apindividualP2 = this.apindividualP2Service.getModelP2();
		this.editaAgente = ( this.authenticationService.authenticatedUser.claveRol === 'Agente' ||
							 this.authenticationService.authenticatedUser.claveRol === 'Operativo' );
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/apindividual/seguro' );
	}

	fnContinuar(): void {
		this.pagoService.definirPago( 1588, this.apindividualP2.resultado.pago );
		this.router.navigateByUrl( '/openpay' );
	}
}