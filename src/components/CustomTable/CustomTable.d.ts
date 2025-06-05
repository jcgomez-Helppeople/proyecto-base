import { TableProps as AntTableProps } from "antd";
import './CustomTableStyles.css';
export interface CustomTableProps<T> extends AntTableProps<T> {
}
declare const CustomTable: <T extends object>({ columns, dataSource, pagination, ...rest }: CustomTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default CustomTable;
