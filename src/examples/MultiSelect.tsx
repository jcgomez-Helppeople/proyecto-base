import { useState } from "react";
import MultiSelectComponent from "../components/MultiSelect";

const options = [
    { label: "Opción 1", value: "opcion1" },
    { label: "Opción 2", value: "opcion2" },
    { label: "Opción 3", value: "opcion3" },
];

const MultiSelectExample = () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    return (
        <MultiSelectComponent
            selectedValues={selectedValues}
            onChange={setSelectedValues}
            options={options}
        />
    );
};

export default MultiSelectExample;
