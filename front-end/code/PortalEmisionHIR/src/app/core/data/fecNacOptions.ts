import { IMyDpOptions } from 'mydatepicker';

let today: Date = new Date();

export const FECNACOPTIONS: IMyDpOptions = {
	editableDateField: false,
	dayLabels: { su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab'},
	monthLabels: { 1: 'Ene', 2: 'Feb', 3: 'Mar', 4: 'Abr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Ago', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dic' },
	dateFormat: 'dd/mm/yyyy',
	disableSince: { year: today.getFullYear(), month: today.getMonth() + 1,  day: today.getDate() + 1 },
	firstDayOfWeek: 'su',
	openSelectorOnInputClick: true,
	showClearDateBtn: false,
	showSelectorArrow: false,
	showTodayBtn: false
};