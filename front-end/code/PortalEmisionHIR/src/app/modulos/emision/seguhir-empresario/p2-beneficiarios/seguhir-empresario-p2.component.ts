import { Component, OnInit, ViewChild }		  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';
import { Observable }						  from 'rxjs/Observable';
import											   'rxjs/add/observable/forkJoin';

import { SeguhirEmpresarioP2Service }		  from './seguhir-empresario-p2.service';

import { Cobertura }						  from 'app/core/models/cobertura';
import { FormaPago }						  from 'app/core/models/forma-pago';
import { Modulo }							  from 'app/core/models/modulo';
import { Plan }								  from 'app/core/models/plan';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ClaveAgenteValidator }				  from 'app/core/validators/clave-agente.validator';

import { PolicyHolderTableComponent }		  from 'app/modulos/shared/policyholder-table/policyholder-table.component';

@Component({
	selector: 'pehir-seguhir-empresario-p2',
	templateUrl: 'seguhir-empresario-p2.component.html'
})

export class SeguhirEmpresarioP2Component implements OnInit {
	@ViewChild( PolicyHolderTableComponent ) tablaBeneficiarios;

	private idProducto: number = 1565;

	isValidTable = false;

	frmSeguhirEmpresarioP2: FormGroup;

	coberturas: Cobertura[];
	formasPago: FormaPago[];
	modulos: Modulo[];
	planes: Plan[];

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private seguhirEmpresarioP2Service: SeguhirEmpresarioP2Service,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.crearFormulario();
		this.leerCatalogos();
	}

	private leerCatalogos(): void {
		Observable.forkJoin(
			this.wsClientService.postObject( '/catCobertura', { 'id': this.idProducto } ),
			this.wsClientService.postObject( '/catFormaPago', { 'id': this.idProducto } ),
			this.wsClientService.postObject( '/catalogoModulo', { 'id': this.idProducto } ),
			this.wsClientService.postObject( '/catPlan', { 'id': this.idProducto } )
		).subscribe( response => {
			if( response[ 0 ].code === 200 ) {
				this.coberturas = response[ 0 ].data;
			}

			if( response[ 1 ].code === 200 ) {
				this.formasPago = response[ 1 ].data;
			}

			if( response[ 2 ].codigoRespuesta === 200 ) {
				this.modulos = new Array<Modulo>();

				for( let i:number = response[ 2 ].min; i <= response[ 2 ].max; i++ ) {
					let modulo: Modulo = new Modulo();
					modulo.idModulo = i;
					modulo.descModulo = String( i );
					this.modulos.push( modulo );
				}
			}

			if( response[ 3 ].code === 200 ) {
				this.planes = response[ 3 ].data;
			}

			if( this.seguhirEmpresarioP2Service.hasModelP2() ) {
				this.mostrarDatosCapturados();
			}
		});
	}

	private crearFormulario(): void {
		this.frmSeguhirEmpresarioP2 = this.fb.group({
			'modulo': ['', Validators.compose([
				Validators.required
			])],
			'formaPago': ['', Validators.compose([
				Validators.required
			])],
			'plan': ['', Validators.compose([
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

	private mostrarDatosCapturados(): void {
		this.frmSeguhirEmpresarioP2.get( 'agente' ).setValue( this.seguhirEmpresarioP2Service.getModelP2().agente );
		this.frmSeguhirEmpresarioP2.get( 'clave' ).setValue( this.seguhirEmpresarioP2Service.getModelP2().clave );

		let fModulo = this.modulos.filter( ( modulo: any ) => modulo.idModulo === this.seguhirEmpresarioP2Service.getModelP2().modulo.idModulo );
		this.frmSeguhirEmpresarioP2.get( 'modulo' ).setValue( fModulo[ 0 ] );

		let fFormaPago = this.formasPago.filter( ( formaPago: any ) => formaPago.id === this.seguhirEmpresarioP2Service.getModelP2().formaPago.id );
		this.frmSeguhirEmpresarioP2.get( 'formaPago' ).setValue( fFormaPago[ 0 ] );

		let fPlan = this.planes.filter( ( plan: any ) => plan.id === this.seguhirEmpresarioP2Service.getModelP2().plan.id );
		this.frmSeguhirEmpresarioP2.get( 'plan' ).setValue( fPlan[ 0 ] );

		//this.tablaBeneficiarios.beneficiarios = this.seguhirEmpresarioP2Service.getModelP2().beneficiarios;
	}

	onValidateTable( isValidTable ): void {
		this.isValidTable = isValidTable;
	}

	fnRegresar(): void {
		this.router.navigateByUrl( '/emision/seguhirempresario' );
	}

	fnAvanzarP3(): void {
		this.seguhirEmpresarioP2Service.setModelP2( this.tablaBeneficiarios.beneficiarios, this.coberturas, this.frmSeguhirEmpresarioP2.value );
		this.router.navigateByUrl( '/emision/seguhirempresario/confirmacion' );
	}
}