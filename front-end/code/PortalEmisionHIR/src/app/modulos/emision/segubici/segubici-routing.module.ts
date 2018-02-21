import { NgModule }				from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SegubiciComponent }	from './segubici.component';
import { SegubiciP1Component }	from './segubici-p1.component';
import { SegubiciP2Component }	from './segubici-p2.component';

const segubiciRoutes: Routes = [
	{
		path: '',
		component: SegubiciComponent,
		children: [
			{ path: '', redirectTo: '/emision/segubici/usuario', pathMatch: 'full' },
			{ path: 'usuario', component: SegubiciP1Component },
			{ path: 'seguro', component: SegubiciP2Component }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild( segubiciRoutes ) ],
	exports: [ RouterModule ]
})

export class SegubiciRoutingModule {}