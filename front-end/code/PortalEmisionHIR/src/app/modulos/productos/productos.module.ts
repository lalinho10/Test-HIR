import { NgModule }						from '@angular/core';
import { CommonModule }					from '@angular/common';
import { ReactiveFormsModule }			from '@angular/forms';

import { ProductosComponent }			from './productos.component';
import { ProductosVidaComponent }		from './vida/productos-vida.component';
import { ProductosAccidentesComponent } from './accidentes/productos-accidentes.component';
import { SeguhirVidaComponent }			from './seguhir-vida/seguhir-vida.component';
import { ProcuraVidaComponent }			from './procura-vida/procura-vida.component';
import { GastosFunerariosComponent }	from './gastos-funerarios/gastos-funerarios.component';
import { SeguhirEmpresarioComponent }	from './seguhir-empresario/seguhir-empresario.component';
import { SegubiciComponent }			from './segubici/segubici.component';
import { ApindividualComponent }		from './apindividual/apindividual.component';

import { ProductosRoutingModule }		from './productos-routing.module';
import { ExtendFormControlModule }		from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ImageLinkModule }				from 'app/modulos/shared/image-link/image-link.module';
import { ProductContainerModule }		from 'app/modulos/shared/product-container/product-container.module';

@NgModule({
	declarations: [
		ProductosComponent,
		ProductosVidaComponent,
		ProductosAccidentesComponent,
		SeguhirVidaComponent,
		ProcuraVidaComponent,
		GastosFunerariosComponent,
		SeguhirEmpresarioComponent,
		SegubiciComponent,
		ApindividualComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ProductosRoutingModule,
		ExtendFormControlModule,
		ImageLinkModule,
		ProductContainerModule
	]
})

export class ProductosModule {}