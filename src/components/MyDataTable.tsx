import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// export interface MyDataTableProps extends DataTableProps {
//   columns: Array<{ field: string; header: string }>;
// }

const MyDataTable: React.FC<any> = ({ columns, value, ...rest }) => {
  return (
    <DataTable value={value} {...rest}>
      {columns.map((col: any) => (
        <Column key={col.field} field={col.field} header={col.header} />
      ))}
    </DataTable>
  );
};

export default MyDataTable;
