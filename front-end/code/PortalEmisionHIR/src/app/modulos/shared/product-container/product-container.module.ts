import { NgModule }					 from '@angular/core';
import { CommonModule }				 from '@angular/common';

import { ProductContainerComponent } from './product-container.component';

@NgModule({
	declarations: [ ProductContainerComponent ],
	exports:      [ ProductContainerComponent ],
	imports:      [ CommonModule ]
})

export class ProductContainerModule {}