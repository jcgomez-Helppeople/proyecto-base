import { FC } from "react";
type Props = {
    value: string;
    onChange: (value: string) => void;
    length?: number;
};
declare const InputOtp: FC<Props>;
export default InputOtp;
