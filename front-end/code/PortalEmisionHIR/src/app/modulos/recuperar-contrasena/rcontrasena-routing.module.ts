import { NgModule } 			  from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { RcontrasenaComponent }   from './rcontrasena.component';
import { RcontrasenaP1Component } from './rcontrasena-p1.component';
import { RcontrasenaP2Component } from './rcontrasena-p2.component';
import { RcontrasenaP3Component } from './rcontrasena-p3.component';

const rcontrasenaRoutes: Routes = [
	{
		path: '',
		component: RcontrasenaComponent,
		children: [
			{ path: '', redirectTo: '/rcontrasena/contacto', pathMatch: 'full' },
			{ path: 'contacto',     component: RcontrasenaP1Component },
			{ path: 'codigo',       component: RcontrasenaP2Component },
			{ path: 'confirmacion', component: RcontrasenaP3Component }
		]
	}
]

@NgModule({
	imports: [ RouterModule.forChild( rcontrasenaRoutes ) ],
	exports: [ RouterModule ]
})

export class RcontrasenaRoutingModule {}