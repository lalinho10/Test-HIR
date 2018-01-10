import { NgModule }					from '@angular/core';
import { CommonModule }				from '@angular/common';

import { ProgressControlComponent } from './progress-control.component'

@NgModule({
	declarations: [ ProgressControlComponent ],
	exports:	  [ ProgressControlComponent ],
	imports:	  [ CommonModule ]
})

export class ProgressControlModule {}