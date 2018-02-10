import { Component } from '@angular/core';

@Component({
	selector: 'pehir-header',
	templateUrl: 'app-header.component.html'
})

export class AppHeaderComponent {
	private today: Date = new Date();
	private lastAccess: Date = new Date();
	private loggedUser: string = 'Pancho Pantera Rodríguez';
}