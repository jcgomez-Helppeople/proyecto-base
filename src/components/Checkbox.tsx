import { FC } from "react";
import { Checkbox as CheckboxPrime } from "primereact/checkbox";

type Props = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label: string;
};

const Checkbox: FC<Props> = ({ checked, onChange, label }) => {
    return (
        <div className="">
            <div className="flex items-center gap-2">
                <CheckboxPrime
                    inputId="customCheckbox"
                    checked={checked}
                    onChange={(e) => onChange(e.checked ?? false)}
                    className="p-checkbox-md"
                />
                <label htmlFor="customCheckbox" className="text-lg">{label}</label>
            </div>
        </div>
    );
};

export default Checkbox;
