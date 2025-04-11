import { DataTableValue } from "primereact/datatable";
import "./CustomDataTable.styles.css";
interface CustomDataTableProps {
    data: DataTableValue[];
    onEdit: (rowData: any) => void;
    onDelete: (rowData: any) => void;
}
declare const CustomDataTable: ({ data, onEdit, onDelete }: CustomDataTableProps) => import("react/jsx-runtime").JSX.Element;
export default CustomDataTable;
