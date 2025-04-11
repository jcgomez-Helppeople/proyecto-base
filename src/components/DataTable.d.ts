import React from "react";
interface Props<T> {
    data: T[];
    columns: {
        field: keyof T | string;
        header: string;
        body?: (data: T) => React.ReactNode;
    }[];
    numberRegisters?: number;
    actions?: boolean;
    paginator?: boolean;
}
declare const DataTable: <T>({ data, columns, numberRegisters, actions, paginator }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export default DataTable;
