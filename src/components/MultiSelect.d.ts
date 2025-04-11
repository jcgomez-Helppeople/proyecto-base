import { FC } from "react";
type Props = {
    selectedValues: string[];
    onChange: (values: string[]) => void;
    options: {
        label: string;
        value: string;
    }[];
    placeholder?: string;
};
declare const MultiSelect: FC<Props>;
export default MultiSelect;
