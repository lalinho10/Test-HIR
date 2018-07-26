import { IMyDate, IMyDayLabels, IMyDpOptions, IMyMonthLabels } from 'mydatepicker';

export class AppClassOptions implements IMyDpOptions {
	readonly editableDateField: boolean = false;
	readonly dateFormat: string = 'dd/mm/yyyy';
	readonly dayLabels: IMyDayLabels = { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab'};
	readonly firstDayOfWeek: string = 'su';
	readonly monthLabels: IMyMonthLabels = { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' };
	readonly openSelectorOnInputClick: boolean = true;
	readonly showClearDateBtn: boolean = false;
	readonly showSelectorArrow: boolean = false;
	readonly showTodayBtn: boolean = false;

	disableSince: IMyDate = { year: 0, month: 0, day: 0 };
	disableUntil: IMyDate = { year: 0, month: 0, day: 0 };
};