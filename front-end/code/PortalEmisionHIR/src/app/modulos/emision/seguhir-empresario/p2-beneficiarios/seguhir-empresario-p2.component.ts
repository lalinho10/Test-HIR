import { Component, OnInit, ViewChild }		  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { PolicyHolderTableComponent }		  from 'app/modulos/shared/policyholder-table/policyholder-table.component';

import { SeguhirEmpresarioP2Service }		  from './seguhir-empresario-p2.service';
import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { MODULOS }							  from 'app/core/data/modulos';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';

@Component({
	selector: 'pehir-seguhir-empresario-p2',
	templateUrl: 'seguhir-empresario-p2.component.html'
})

export class SeguhirEmpresarioP2Component implements OnInit {
	@ViewChild( PolicyHolderTableComponent ) tablaBeneficiarios;

	isValidTable = false;

	frmSeguhirEmpresarioP2: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];

	modulos = MODULOS;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private seguhirEmpresarioP2Service: SeguhirEmpresarioP2Service,
		private wsClientService: WSClientService
	){}

	readCatalogs(): void {
		this.wsClientService.getObject( '/consultaCoberturasProducto/4' )
							.subscribe( response => this.coberturas = response.data );
		this.wsClientService.getObject( '/consultaFormasPagoProducto/4' )
							.subscribe( response => this.formasPago = response.data );
	}

	ngOnInit() {
		this.readCatalogs();

		this.frmSeguhirEmpresarioP2 = this.fb.group({
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'sumasegurada': ['', Validators.compose([
				Validators.required
			])],
			'cobertura': ['', Validators.compose([
				Validators.required
			])],
			'formaPago': ['', Validators.compose([
				Validators.required
			])],
			'agente': ['', Validators.compose([
				Validators.required
			])],
			'clave': ['', Validators.compose([
				Validators.required,
				ClaveAgenteValidator()
			])]
		});
	}

	onValidateTable( isValidTable ): void {
		this.isValidTable = isValidTable;
	}

	fnAvanzarP3(): void {
		this.seguhirEmpresarioP2Service.setModelP2( this.tablaBeneficiarios.beneficiarios, this.frmSeguhirEmpresarioP2.value );
		this.router.navigateByUrl( '/emision/seguhirempresario/confirmacion' );
	}
}