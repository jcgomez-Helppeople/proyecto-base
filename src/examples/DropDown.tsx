import { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropDownExample = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    { label: "Opción 1", value: "opcion1" },
    { label: "Opción 2", value: "opcion2" },
    { label: "Opción 3", value: "opcion3" },
  ];

  return <Dropdown value={selectedOption} onChange={setSelectedOption} options={options} filter showClear />;

};

export default DropDownExample;