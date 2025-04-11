import { FC } from "react";
type Props = {
    value: string | null;
    onChange: (value: string | null) => void;
    options: {
        label: string;
        value: string;
    }[];
    filter?: boolean;
    showClear?: boolean;
    loading?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    placeholder?: string;
    label?: string;
};
declare const Dropdown: FC<Props>;
export default Dropdown;
