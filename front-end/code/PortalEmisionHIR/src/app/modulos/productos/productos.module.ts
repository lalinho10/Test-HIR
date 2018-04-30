import { NgModule }						from '@angular/core';
import { CommonModule }					from '@angular/common';
import { ReactiveFormsModule }			from '@angular/forms';

import { ProductosComponent }			from './productos.component';
import { ProductosVidaComponent }		from './vida/productos-vida.component';
import { ProductosAccidentesComponent } from './accidentes/productos-accidentes.component';

import { ProductosRoutingModule }		from './productos-routing.module';
import { ExtendFormControlModule }		from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ImageLinkModule }				from 'app/modulos/shared/image-link/image-link.module';

@NgModule({
	declarations: [
		ProductosComponent,
		ProductosVidaComponent,
		ProductosAccidentesComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ProductosRoutingModule,
		ExtendFormControlModule,
		ImageLinkModule,
	]
})

export class ProductosModule {}