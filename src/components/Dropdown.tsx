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
    label?: string;
};

const Dropdown: FC<Props> = ({ value, onChange, options, filter = false, showClear = false, loading = false, invalid = false, disabled = false, placeholder = "Seleccione una opción", label }) => {
    return (
        <div className="w-full">
            {
                label && (
                    <label className="block text-gray-700 font-semibold mb-1 text-base" htmlFor="priority-select">
                        {label}
                    </label>
                )
            }

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