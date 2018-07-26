import { Column } from './column';
import { Row }	  from './row';

export class DataTable {
	columns: Column[];
	rows: Row[];
	footer?: string;
}