import { FC } from "react";
type Props = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
};
declare const Checkbox: FC<Props>;
export default Checkbox;
