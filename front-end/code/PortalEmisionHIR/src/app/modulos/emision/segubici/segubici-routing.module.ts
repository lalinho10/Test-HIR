import { NgModule }				from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SegubiciComponent }	from './segubici.component';
import { SegubiciP1Component }	from './segubici-p1.component';

const segubiciRoutes: Routes = [
	{
		path: '',
		component: SegubiciComponent,
		children: [
			{ path: '', redirectTo: '/emision/segubici/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SegubiciP1Component }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( segubiciRoutes ) ],
	exports: [ RouterModule ]
})

export class SegubiciRoutingModule {}