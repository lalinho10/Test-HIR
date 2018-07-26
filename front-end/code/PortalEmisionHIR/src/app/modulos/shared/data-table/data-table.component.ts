import { Component, Input }	from '@angular/core';

import { DataTable }		from './models/data-table';
import { Cell }				from './models/cell';
import { Row }				from './models/row';

@Component({
	selector: 'pehir-data-table',
	templateUrl: 'data-table.component.html',
	styleUrls: [ 'data-table.component.css' ]
})

export class DataTableComponent {
	@Input() dataTable: DataTable;

	getCellData( rowid: number, columnKey: string ): string {
		let aRow: Row = this.dataTable.rows[ rowid ];
		let aCell: Cell[] = aRow.cells.filter( ( cell: Cell ) => cell.columnKey == columnKey );
		return aCell[ 0 ].cellData;
	}
}