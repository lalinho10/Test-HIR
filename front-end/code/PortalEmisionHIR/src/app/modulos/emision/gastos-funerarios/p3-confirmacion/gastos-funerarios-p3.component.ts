import { Component, OnInit }		 from '@angular/core';
import { Router }					 from '@angular/router';

import { PagoService }				 from '../../pago.service';

import { GastosFunerariosP1Service } from '../p1-usuario/gastos-funerarios-p1.service';
import { GastosFunerariosP2Service } from '../p2-beneficiarios/gastos-funerarios-p2.service';

import { GastosFunerariosP1 }		 from '../p1-usuario/gastos-funerarios-p1';
import { GastosFunerariosP2 }		 from '../p2-beneficiarios/gastos-funerarios-p2';

import { AuthenticationService }	 from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-gastos-funerarios-p3',
	templateUrl: 'gastos-funerarios-p3.component.html'
})

export class GastosFunerariosP3Component implements OnInit {
	editaAgente: boolean = false;

	gastosFunerariosP1: GastosFunerariosP1;
	gastosFunerariosP2: GastosFunerariosP2;

	constructor(
		private authenticationService: AuthenticationService,
		private gastosFunerariosP1Service: GastosFunerariosP1Service,
		private gastosFunerariosP2Service: GastosFunerariosP2Service,
		private pagoService: PagoService,
		private router: Router
	) {}

	ngOnInit() {
		this.gastosFunerariosP1 = this.gastosFunerariosP1Service.getModelP1();
		this.gastosFunerariosP2 = this.gastosFunerariosP2Service.getModelP2();
		this.editaAgente = ( this.authenticationService.authenticatedUser.claveRol === 'Agente' ||
							 this.authenticationService.authenticatedUser.claveRol === 'Operativo' );
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/gastosfunerarios/beneficiarios' );
	}

	fnContinuar(): void {
		this.pagoService.definirPago( 721, this.gastosFunerariosP2.resultado.pago );
		this.router.navigateByUrl( '/openpay' );
	}
}