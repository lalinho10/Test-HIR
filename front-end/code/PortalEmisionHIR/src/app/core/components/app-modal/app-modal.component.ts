import { Component, OnInit } from '@angular/core';

import { AppModalService }   from './app-modal.service';

@Component({
	selector: 'pehir-app-modal',
	templateUrl: 'app-modal.component.html',
	styleUrls: [ 'app-modal.component.css' ]
})

export class AppModalComponent implements OnInit {
	modalMessage: string = '';
	iconClass: string = '';
	isVisible: boolean = false;

	private modalIcons: Object = {
		'success': 'fa-check-circle',
		'info':    'fa-info-circle',
		'warning': 'fa-exclamation-circle',
		'error':   'fa-times-circle'
	}

	constructor( private appModalService: AppModalService ) {}

	ngOnInit() {
		this.appModalService.setAppModal( this );
	}

	openModal( modalType: string, modalMessage: string ): void {
		this.modalMessage = modalMessage;
		this.iconClass = this.modalIcons[ modalType ];
		this.isVisible = true;
	}

	closeModal(): void {
		this.isVisible = false;
	}
}