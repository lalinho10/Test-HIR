import { Component, OnInit }				  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }							  from '@angular/router';

import { SeguhirEmpresarioP1Service }		  from './seguhir-empresario-p1.service';

import { GENEROS }							  from 'app/core/data/generos';
import { ESTADOSCIVILES }					  from 'app/core/data/estadosCiviles';
import { FECNACOPTIONS }					  from 'app/core/data/calendarios/fecNacOptions';

import { Estado }							  from 'app/core/models/estado';
import { Municipio }						  from 'app/core/models/municipio';
import { Ocupacion }						  from 'app/core/models/ocupacion';

import { WSClientService }					  from 'app/core/services/ws-client.service';

import { ApellidoValidator } 				  from 'app/core/validators/apellido.validator';
import { CelularValidator }					  from 'app/core/validators/celular.validator';
import { CodigoPostalValidator }			  from 'app/core/validators/codigo-postal.validator';
import { EstaturaValidator }				  from 'app/core/validators/estatura.validator';
import { NombreValidator }					  from 'app/core/validators/nombre.validator';
import { PesoValidator }					  from 'app/core/validators/peso.validator';
import { RfcValidator }						  from 'app/core/validators/rfc.validator';
import { TelefonoValidator }				  from 'app/core/validators/telefono.validator';
import { EntreEdadesValidator }				  from 'app/core/validators/entre-edades.validator';
import { DiferenciaCorreosValidator }		  from 'app/core/validators/diferencia-correos.validator';
import { DiferenciaTelefonosValidator }		  from 'app/core/validators/diferencia-telefonos.validator';

@Component({
	selector: 'pehir-seguhir-empresario-p1',
	templateUrl: 'seguhir-empresario-p1.component.html'
})

export class SeguhirEmpresarioP1Component implements OnInit {
	frmSeguhirEmpresarioP1: FormGroup;

	estados: Estado[];
	municipios: Municipio[];
	ocupaciones: Ocupacion[];

	generos = GENEROS;
	fecNacOptions = FECNACOPTIONS;
	estadosCiviles = ESTADOSCIVILES;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private seguhirEmpresarioP1Service: SeguhirEmpresarioP1Service,
		private wsClientService: WSClientService
	){}

	ngOnInit() {
		this.leerCatalogos();
		this.crearFormulario();
		this.registrarEventos();
	}

	private leerCatalogos(): void {
		this.wsClientService.getObject( '/consultaOcupaciones' )
							.subscribe( data => this.ocupaciones = data );

		this.wsClientService
			.postObject( '/catalogoEstado', {} )
			.subscribe( response => {
				if( response.code === 200 ) {
					this.estados = response.data;
				}
			});
	}

	private crearFormulario(): void {
		this.frmSeguhirEmpresarioP1 = this.fb.group({
			'padecimiento':['', Validators.compose([
				Validators.required
			])],
			'peso':['', Validators.compose([
				Validators.required,
				PesoValidator()
			])],
			'estatura':['', Validators.compose([
				Validators.required,
				EstaturaValidator()
			])],
			'nombre': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				NombreValidator()
			])],
			'apaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'amaterno': ['', Validators.compose([
				Validators.required,
				Validators.maxLength(50),
				ApellidoValidator()
			])],
			'fechanac': ['', Validators.compose([
				Validators.required,
				EntreEdadesValidator(18,64)
			])],
			'nacionalidad': ['', Validators.compose([
				Validators.required
			])],
			'ocupacion': ['', Validators.compose([
				Validators.required
			])],
			'rfc': ['', Validators.compose([
				Validators.required,
				RfcValidator()
			])],
			'estadoCivil':['', Validators.compose([
				Validators.required
			])],
			'genero': ['', Validators.compose([
				Validators.required
			])],
			'calleNumero': ['', Validators.compose([
				Validators.required
			])],
			'coloniaPoblacion': ['', Validators.compose([
				Validators.required
			])],
			'delegacionMunicipio': ['', Validators.compose([
				Validators.required
			])],
			'estado': ['', Validators.compose([
				Validators.required
			])],
			'cp': ['', Validators.compose([
				Validators.required,
				CodigoPostalValidator()
			])],

			'telefonos': this.fb.group({
				'telefono': ['', Validators.compose([
				Validators.required,
				TelefonoValidator()
				])],
				'celular': ['', Validators.compose([
					Validators.required,
					CelularValidator()
				])]
			},
			{
				validator: DiferenciaTelefonosValidator( 'telefono', 'celular' )
			}),

			'correos': this.fb.group({
				'correoe1': ['', Validators.compose([
					Validators.required,
					Validators.email,
					Validators.maxLength(50)
				])],
				'correoe2': ['', Validators.compose([
					Validators.required,
					Validators.email,
					Validators.maxLength(50)
				])]
			},
			{
				validator: DiferenciaCorreosValidator( 'correoe1', 'correoe2' )
			})
		});
	}

	private registrarEventos(): void {
		this.frmSeguhirEmpresarioP1.get( 'estado' ).valueChanges.subscribe( estado => {
			if( estado !== null && typeof estado !== 'undefined' ) {
				if( estado.claveEntidad !== null && typeof estado.claveEntidad !== 'undefined' ) {
					this.wsClientService.getObject( '/consultaMunicipiosEstado/' + estado.claveEntidad )
										.subscribe( response => this.municipios = response.data );
				} else {
					this.municipios = [];
				}
				this.frmSeguhirEmpresarioP1.get( 'delegacionMunicipio' ).setValue( '' );
			}
		});
	}

	fnAvanzarP2(): void {
		this.seguhirEmpresarioP1Service.setModelP1( this.frmSeguhirEmpresarioP1.value );
		this.router.navigateByUrl( '/emision/seguhirempresario/beneficiarios' );
	}
}