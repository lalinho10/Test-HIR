import { NgModule }						 from '@angular/core';
import { CommonModule }					 from '@angular/common';
import { ReactiveFormsModule }			 from '@angular/forms';

import { MyDatePickerModule }			 from 'mydatepicker';

import { CotizacionComponent }			 from './cotizacion.component';
import { CotizacionVidaComponent }		 from './vida/cotizacion-vida.component';
import { CotizacionAccidentesComponent } from './accidentes/cotizacion-accidentes.component';
import { SeguhirVidaComponent }			 from './seguhir-vida/seguhir-vida.component';
import { ProcuraVidaComponent }			 from './procura-vida/procura-vida.component';
import { GastosFunerariosComponent }	 from './gastos-funerarios/gastos-funerarios.component';
import { SeguhirEmpresarioComponent }	 from './seguhir-empresario/seguhir-empresario.component';
import { SegubiciComponent }			 from './segubici/segubici.component';
import { ApindividualComponent }		 from './apindividual/apindividual.component';
import { ResultadoCotizacionComponent }	 from './resultado-cotizacion/resultado-cotizacion.component';

import { CotizacionService }			 from './cotizacion.service';
import { TarifaService }				 from './tarifa.service';

import { CotizacionRoutingModule }		 from './cotizacion-routing.module';
import { ExtendFormControlModule }		 from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ImageLinkModule }				 from 'app/modulos/shared/image-link/image-link.module';

@NgModule({
	declarations: [
		CotizacionComponent,
		CotizacionVidaComponent,
		CotizacionAccidentesComponent,
		SeguhirVidaComponent,
		ProcuraVidaComponent,
		GastosFunerariosComponent,
		SeguhirEmpresarioComponent,
		SegubiciComponent,
		ApindividualComponent,
		ResultadoCotizacionComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		CotizacionRoutingModule,
		ExtendFormControlModule,
		ImageLinkModule,
	],
	providers: [
		CotizacionService,
		TarifaService
	]
})

export class CotizacionModule {}