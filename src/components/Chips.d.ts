import { FC } from "react";
type Props = {
    value: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    label?: string;
};
declare const Chips: FC<Props>;
export default Chips;
