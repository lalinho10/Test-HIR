import { Injectable }			 from '@angular/core';

import { SessionTimerComponent } from './session-timer.component';

@Injectable()
export class SessionTimerService {
	private sessionTimer: SessionTimerComponent;

	setSessionTimer( sessionTimer: SessionTimerComponent ): void {
		this.sessionTimer = sessionTimer
	}

	startTimer(): void {
		this.sessionTimer.startTimer();
	}

	resetTimer(): void {
		this.sessionTimer.resetTimer();
	}

	stopTimer(): void {
		this.sessionTimer.stopTimer();
	}
}