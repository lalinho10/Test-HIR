import { AppClassOptions } from './appCalOptions';

let today: Date = new Date();

let fecNxtOptions = new AppClassOptions();

	fecNxtOptions.disableSince = { year: 0, month: 0, day: 0 };

	fecNxtOptions.disableUntil = { 
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate() - 1
	}

export const FECNXTOPTIONS = fecNxtOptions;