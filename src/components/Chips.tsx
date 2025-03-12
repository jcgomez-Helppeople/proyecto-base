import { FC } from "react";
import { Chips as ChipsPrime } from "primereact/chips";

type Props = {
    values: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
};

const Chips: FC<Props> = ({ values, onChange, placeholder = 'Agregue etiquetas...' }) => {
    return (
        <div className="flex justify-center items-center w-full">
            <ChipsPrime
                value={values}
                onChange={(e) => onChange(e.value || [])}
                placeholder={placeholder}
                className="w-full"
            />
        </div>
    );
};

export default Chips;
