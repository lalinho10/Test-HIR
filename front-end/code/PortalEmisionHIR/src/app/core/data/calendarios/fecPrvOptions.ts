import { AppClassOptions } from './appCalOptions';

let today: Date = new Date();

let fecPrvOptions = new AppClassOptions();

	fecPrvOptions.disableSince = {
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		day: today.getDate() + 1
	};

	fecPrvOptions.disableUntil = { year: 0, month: 0, day: 0 };

export const FECPRVOPTIONS = fecPrvOptions;