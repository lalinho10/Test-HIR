import { NgModule }					 from '@angular/core';
import { CommonModule }				 from '@angular/common';

import { ProductContainerComponent } from './product-container.component';

import { DataTableModule }			 from 'app/modulos/shared/data-table/data-table.module';

@NgModule({
	declarations: [ ProductContainerComponent ],
	exports:      [ ProductContainerComponent ],
	imports:      [
		CommonModule,
		DataTableModule
	]
})

export class ProductContainerModule {}