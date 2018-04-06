import { NgModule } 			   from '@angular/core';
import { RouterModule, Routes }	   from '@angular/router';

import { RcontrasenaComponent }	   from './components/rcontrasena.component';
import { RcontrasenaP1Component }  from './components/rcontrasena-p1.component';
import { RcontrasenaP2Component }  from './components/rcontrasena-p2.component';
import { RcontrasenaP3Component }  from './components/rcontrasena-p3.component';

import { RcontrasenaGuardService } from './services/rcontrasena-guard.service';

const rcontrasenaRoutes: Routes = [
	{
		path: '',
		component: RcontrasenaComponent,
		children: [
			{ path: '', redirectTo: '/rcontrasena/contacto', pathMatch: 'full' },
			{ path: 'contacto',     component: RcontrasenaP1Component },
			{
				path: 'codigo',
				component: RcontrasenaP2Component,
				canActivate: [ RcontrasenaGuardService ]
			},
			{
				path: 'confirmacion',
				component: RcontrasenaP3Component,
				canActivate: [ RcontrasenaGuardService ]
			}
		]
	}
]

@NgModule({
	imports:   [ RouterModule.forChild( rcontrasenaRoutes ) ],
	exports:   [ RouterModule ],
	providers: [ RcontrasenaGuardService ]
})

export class RcontrasenaRoutingModule {}