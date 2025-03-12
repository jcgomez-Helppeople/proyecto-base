import { FC } from "react";
import { InputNumber as InputNumberPrime } from "primereact/inputnumber";

type Props = {
    value: number | null;
    onChange: (value: number | null) => void;
    min?: number;
    max?: number;
    placeholder?: string;
    disabled?: boolean;
    invalid?: boolean;
};

const InputNumber: FC<Props> = ({ value, onChange, min, max, placeholder = "Ingrese un valor", disabled = false, invalid = false }) => {
    return (
        <div className="flex justify-center items-center">
            <InputNumberPrime
                value={value}
                onValueChange={(e) => onChange(e.value ?? null)}
                min={min}
                max={max}
                placeholder={placeholder}
                className="w-full rounded-lg shadow-md"
                disabled={disabled}
                invalid={invalid}
            />
        </div>
    );
};

export default InputNumber;
