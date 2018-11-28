import { NgModule }					  from '@angular/core';
import { CommonModule }				  from '@angular/common';
import { ReactiveFormsModule }		  from '@angular/forms';

import { EmisionComponent }			  from './emision.component';
import { EmisionVidaComponent }		  from './vida/emision-vida.component';
import { EmisionAccidentesComponent } from './accidentes/emision-accidentes.component';

import { AccidenteService }			  from './accidente.service';
import { ApindividualService }		  from './apindividual/apindividual.service';
import { ApindividualP1Service }	  from './apindividual/p1-usuario/apindividual-p1.service';
import { ApindividualP2Service }	  from './apindividual/p2-seguro/apindividual-p2.service';
import { GastosFunerariosService }	  from './gastos-funerarios/gastos-funerarios.service';
import { GastosFunerariosP1Service }  from './gastos-funerarios/p1-usuario/gastos-funerarios-p1.service';
import { GastosFunerariosP2Service }  from './gastos-funerarios/p2-beneficiarios/gastos-funerarios-p2.service';
import { ProcuraVidaService }		  from './procura-vida/procura-vida.service';
import { ProcuraVidaP1Service }		  from './procura-vida/p1-usuario/procura-vida-p1.service';
import { ProcuraVidaP2Service }		  from './procura-vida/p2-beneficiarios/procura-vida-p2.service';
import { SegubiciService }			  from './segubici/segubici.service';
import { SegubiciP1Service }		  from './segubici/p1-usuario/segubici-p1.service';
import { SegubiciP2Service }		  from './segubici/p2-seguro/segubici-p2.service';
import { SeguhirEmpresarioService }	  from './seguhir-empresario/seguhir-empresario.service';
import { SeguhirEmpresarioP1Service } from './seguhir-empresario/p1-usuario/seguhir-empresario-p1.service';
import { SeguhirEmpresarioP2Service } from './seguhir-empresario/p2-beneficiarios/seguhir-empresario-p2.service';
import { VidaService }				  from './vida.service';

import { MyDatePickerModule }		  from 'mydatepicker';

import { EmisionRoutingModule }		  from './emision-routing.module';
import { ExtendFormControlModule }	  from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ImageLinkModule }			  from 'app/modulos/shared/image-link/image-link.module';
import { PolicyHolderTableModule }	  from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }	  from 'app/modulos/shared/progress-control/progress-control.module';
import { OpenpayModule }			  from 'app/modulos/shared/openpay/openpay.module';

@NgModule({
	declarations: [
		EmisionComponent,
		EmisionVidaComponent,
		EmisionAccidentesComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MyDatePickerModule,
		EmisionRoutingModule,
		ExtendFormControlModule,
		ImageLinkModule,
		PolicyHolderTableModule,
		ProgressControlModule,
		OpenpayModule
	],
	providers: [
		AccidenteService,
		ApindividualService,
		ApindividualP1Service,
		ApindividualP2Service,
		GastosFunerariosService,
		GastosFunerariosP1Service,
		GastosFunerariosP2Service,
		ProcuraVidaService,
		ProcuraVidaP1Service,
		ProcuraVidaP2Service,
		SegubiciService,
		SegubiciP1Service,
		SegubiciP2Service,
		SeguhirEmpresarioService,
		SeguhirEmpresarioP1Service,
		SeguhirEmpresarioP2Service,
		VidaService
	]
})

export class EmisionModule {}