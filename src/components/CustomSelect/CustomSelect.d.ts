export interface CustomSelectProps<T> {
    label?: string;
    options: {
        value: T;
        label: string;
    }[];
    placeholder?: string;
    value?: T;
    onChange?: (value: T) => void;
}
declare const CustomSelect: <T>(props: CustomSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export default CustomSelect;
