import { Component, OnInit } from '@angular/core';

import { TestUserService } from 'app/core/services/test-user.service';

@Component({
	selector: 'pehir-acceso',
	templateUrl: 'acceso.component.html'
})

export class AccesoComponent implements OnInit {
	users;

	constructor( private testUserService: TestUserService ) {}

	ngOnInit() {
		this.testUserService.getUsers().subscribe( p => this.users = p );
	}
}