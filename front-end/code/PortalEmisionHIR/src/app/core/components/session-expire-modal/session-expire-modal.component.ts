import { Component, OnInit }         from '@angular/core';

import { SessionExpireModalService } from './session-expire-modal.service';

import { SessionTimerService }		 from 'app/core/components/session-timer/session-timer.service';

import { AuthenticationService }     from 'app/core/services/authentication/authentication.service';

@Component({
	selector: 'pehir-session-expire-modal',
	templateUrl: 'session-expire-modal.component.html',
	styleUrls: [ 'session-expire-modal.component.css' ]
})

export class SessionExpireModalComponent implements OnInit {
	private isVisible: boolean = false;

	constructor(
		private authenticationService: AuthenticationService,
		private sessionExpireModalService: SessionExpireModalService,
		private sessionTimerService: SessionTimerService
	){}

	ngOnInit() {
		this.sessionExpireModalService.setSessionExpireModal( this );
	}

	openModal(): void {
		this.isVisible = true;
	}

	closeModal(): void {
		this.isVisible = false;
	}

	renewSession(): void {
		//servicio para renovar la sesión
		this.sessionTimerService.resetTimer();
		this.closeModal();
	}

	closeSession(): void {
		this.sessionTimerService.stopTimer();
		this.authenticationService.logout();
		this.closeModal();
	}
}