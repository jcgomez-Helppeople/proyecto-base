import { FC } from "react";
import { MultiSelect as MultiSelectPrime } from "primereact/multiselect";

type Props = {
    selectedValues: string[];
    onChange: (values: string[]) => void;
    options: { label: string; value: string }[];
    placeholder?: string;
};

const MultiSelect: FC<Props> = ({ selectedValues, onChange, options, placeholder = 'Seleccione...' }) => {
    return (
        <div className="flex justify-center items-center">
            <MultiSelectPrime
                value={selectedValues}
                options={options}
                onChange={(e) => onChange(e.value || [])}
                placeholder={placeholder}
                className="w-full"
            />
        </div>
    );
};

export default MultiSelect;
