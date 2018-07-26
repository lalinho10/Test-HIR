import { Component, OnInit }     from '@angular/core';

import { SessionModalService }   from './session-modal.service';

import { AuthenticationService } from 'app/core/services/authentication/authentication.service';
import { SessionTimerService }   from 'app/core/components/session-timer/session-timer.service';

@Component({
	selector: 'pehir-session-modal',
	templateUrl: 'session-modal.component.html',
	styleUrls: [ 'session-modal.component.css' ]
})

export class SessionModalComponent implements OnInit {
	isVisible: boolean = false;

	constructor(
		private authenticationService: AuthenticationService,
		private sessionModalService: SessionModalService,
		private sessionTimerService: SessionTimerService
	){}

	ngOnInit() {
		this.sessionModalService.setSessionModal( this );
	}

	openModal(): void {
		this.isVisible = true;
	}

	closeModal(): void {
		this.isVisible = false;
	}

	closeSession(): void {
		this.closeModal();
		this.sessionTimerService.stopTimer();
		this.authenticationService.logout();
	}
}