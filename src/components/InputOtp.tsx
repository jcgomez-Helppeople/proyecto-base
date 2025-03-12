import { FC } from "react";
import { InputOtp as InputOTPPrime } from "primereact/inputotp";

type Props = {
    value: string;
    onChange: (value: string) => void;
    length?: number;
};

const InputOtp: FC<Props> = ({ value, onChange, length = 6 }) => {
    return (
        <div className="flex justify-center items-center">
            <InputOTPPrime
                value={value}
                onChange={(e: any) => onChange(e.value || "")}
                length={length}
                className="w-full text-center border rounded p-2"
            />
        </div>
    );
};

export default InputOtp;
