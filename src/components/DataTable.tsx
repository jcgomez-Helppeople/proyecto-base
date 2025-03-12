import React from "react";
import { DataTable as DataTablePrime } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

interface Props<T> {
    data: T[];
    columns: { field: keyof T | string; header: string; body?: (data: T) => React.ReactNode }[];
    numberRegisters?: number;
    actions?: boolean;
    paginator?: boolean;
}

const DataTable = <T,>({ data, columns, numberRegisters = 10, actions = false, paginator = true }: Props<T>) => {
    return (
        <div className="p-2">
            <DataTablePrime
                value={data as any}
                paginator={paginator}
                rows={numberRegisters}
                scrollable
                scrollHeight="flex"
                stripedRows
                className="shadow-md rounded-lg overflow-hidden"
                rowsPerPageOptions={[5, 10, 25, 50]}
            >
                {columns.map((col, index) => (
                    <Column
                        key={index}
                        field={col.field as string}
                        header={col.header}
                        body={(rowData) => col.body?.(rowData)}
                        style={{ padding: '1px' }}
                        headerStyle={{ padding: '1px' }}
                    />
                ))}
                {
                    actions && (
                        <Column
                            header="Opciones"
                            body={() => <Button icon="pi pi-pencil" className="p-button-rounded p-button-text" />}
                            style={{ padding: '1px' }}
                            headerStyle={{ padding: '1px' }}
                        />
                    )
                }
            </DataTablePrime>
        </div>
    );
};

export default DataTable;
