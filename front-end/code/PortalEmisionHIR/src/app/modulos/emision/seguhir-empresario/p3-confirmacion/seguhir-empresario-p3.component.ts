import { Component, OnInit }		  from '@angular/core';
import { Router }					  from '@angular/router';

import { PagoService }				  from '../../pago.service';

import { SeguhirEmpresarioP1Service } from '../p1-usuario/seguhir-empresario-p1.service';
import { SeguhirEmpresarioP2Service } from '../p2-beneficiarios/seguhir-empresario-p2.service';

import { SeguhirEmpresarioP1 }		  from '../p1-usuario/seguhir-empresario-p1';
import { SeguhirEmpresarioP2 }		  from '../p2-beneficiarios/seguhir-empresario-p2';

import { AuthenticationService }	  from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-seguhir-empresario-p3',
	templateUrl: 'seguhir-empresario-p3.component.html'
})

export class SeguhirEmpresarioP3Component implements OnInit {
	editaAgente: boolean = false;

	seguhirEmpresarioP1: SeguhirEmpresarioP1;
	seguhirEmpresarioP2: SeguhirEmpresarioP2;

	constructor(
		private authenticationService: AuthenticationService,
		private pagoService: PagoService,
		private seguhirEmpresarioP1Service: SeguhirEmpresarioP1Service,
		private seguhirEmpresarioP2Service: SeguhirEmpresarioP2Service,
		private router: Router
	) {}

	ngOnInit() {
		this.seguhirEmpresarioP1 = this.seguhirEmpresarioP1Service.getModelP1();
		this.seguhirEmpresarioP2 = this.seguhirEmpresarioP2Service.getModelP2();
		this.editaAgente = ( this.authenticationService.authenticatedUser.claveRol === 'Agente' ||
							 this.authenticationService.authenticatedUser.claveRol === 'Operativo' );
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/seguhirempresario/beneficiarios' );
	}

	fnContinuar(): void {
		this.pagoService.definirPago( 1565, this.seguhirEmpresarioP2.resultado.pago );
		this.router.navigateByUrl( '/openpay' );
	}
}