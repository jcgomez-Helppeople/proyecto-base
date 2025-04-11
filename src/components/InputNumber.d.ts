import { FC } from "react";
type Props = {
    value: number | null;
    onChange: (value: number | null) => void;
    min?: number;
    max?: number;
    placeholder?: string;
    disabled?: boolean;
    invalid?: boolean;
    label?: string;
};
declare const InputNumber: FC<Props>;
export default InputNumber;
