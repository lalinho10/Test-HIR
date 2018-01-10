import { NgModule }			  from '@angular/core';
import { CommonModule }		  from '@angular/common';

import { ImageLinkComponent } from './image-link.component';

@NgModule({
	declarations: [ ImageLinkComponent ],
	exports:	  [ ImageLinkComponent ],
	imports:	  [ CommonModule ]
})

export class ImageLinkModule {}