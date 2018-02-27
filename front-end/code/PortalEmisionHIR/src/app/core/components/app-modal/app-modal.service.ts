import { Injectable } from '@angular/core';

import { AppModalComponent } from './app-modal.component';

@Injectable()
export class AppModalService {
	private appModal: AppModalComponent;

	setAppModal( appModal: AppModalComponent ) {
		this.appModal = appModal;
	}

	openModal( modalType: string, modalMessage: string ): void {
		this.appModal.openModal( modalType, modalMessage);
	}

	closeModal(): void {
		this.appModal.closeModal();
	}
}