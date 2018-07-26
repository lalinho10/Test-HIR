import { AppClassOptions } from './appCalOptions';

let today: Date = new Date();

let fecNacOptions = new AppClassOptions();

	fecNacOptions.disableSince = { 
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate() + 1
	};

	fecNacOptions.disableUntil = { year: 0, month: 0, day: 0 }

export const FECNACOPTIONS = fecNacOptions;