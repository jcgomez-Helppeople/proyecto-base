import { FC } from "react";
import { Dropdown as DropdownPrime } from "primereact/dropdown";

type Props = {
    value: string | null;
    onChange: (value: string | null) => void;
    options: { label: string; value: string }[];
    filter?: boolean;
    showClear?: boolean;
    loading?: boolean;
    invalid?: boolean;
    disabled?: boolean;
    placeholder?: string;
};

const Dropdown: FC<Props> = ({ value, onChange, options, filter = false, showClear = false, loading = false, invalid = false, disabled = false, placeholder = "Seleccione una opción" }) => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <DropdownPrime
                value={value}
                options={options}
                onChange={(e) => onChange(e.value)}
                placeholder={placeholder}
                className="w-full shadow-md"
                filter={filter}
                showClear={showClear}
                loading={loading}
                invalid={invalid}
                disabled={disabled}
            />
        </div>
    );
};

export default Dropdown;