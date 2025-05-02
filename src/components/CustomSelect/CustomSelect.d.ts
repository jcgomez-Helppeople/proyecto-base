import { SelectProps } from "antd";
export interface CustomSelectProps<T> extends SelectProps<T> {
    label?: string;
}
declare const CustomSelect: <T>(props: CustomSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export default CustomSelect;
