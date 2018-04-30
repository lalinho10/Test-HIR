import { NgModule }					  from '@angular/core';
import { CommonModule }				  from '@angular/common';
import { ReactiveFormsModule }		  from '@angular/forms';

import { EmisionComponent }			  from './emision.component';
import { EmisionVidaComponent }		  from './vida/emision-vida.component';
import { EmisionAccidentesComponent } from './accidentes/emision-accidentes.component';

import { MyDatePickerModule }		  from 'mydatepicker';

import { EmisionRoutingModule }		  from './emision-routing.module';
import { ExtendFormControlModule }	  from 'app/modulos/shared/extend-form-control/extend-form-control.module';
import { ImageLinkModule }			  from 'app/modulos/shared/image-link/image-link.module';
import { PolicyHolderTableModule }	  from 'app/modulos/shared/policyholder-table/policyholder-table.module';
import { ProgressControlModule }	  from 'app/modulos/shared/progress-control/progress-control.module';


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
		ProgressControlModule
	]
})

export class EmisionModule {}