import { NgModule }				   from '@angular/core';
import { CommonModule }			   from '@angular/common';
import { ReactiveFormsModule }	   from '@angular/forms';

import { AgentTableComponent }	   from './agent-table.component';

import { ExtendFormControlModule } from 'app/modulos/shared/extend-form-control/extend-form-control.module';

@NgModule({
	declarations: [ AgentTableComponent ],
	exports:	  [ AgentTableComponent ],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ExtendFormControlModule
	]
})

export class AgentTableModule {}