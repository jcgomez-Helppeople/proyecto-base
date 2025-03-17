import { FC } from "react";
import { Chips as ChipsPrime } from "primereact/chips";

type Props = {
    value: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    label?: string;
};

const Chips: FC<Props> = ({ value, onChange, placeholder = 'Agregue etiquetas...', label }) => {
    return (
        <div className="w-full">
            {
                label && (
                    <label className="block text-gray-700 font-semibold mb-1 text-base">
                        {label}
                    </label>
                )
            }
            <ChipsPrime
                value={value}
                onChange={(e) => onChange(e.value || [])}
                placeholder={placeholder}
                className="w-full"
                style={{ width: "100%" }}
            />
        </div>
    );
};

export default Chips;
