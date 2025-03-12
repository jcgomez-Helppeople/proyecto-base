import { useState } from "react";
import Checkbox from "../components/Checkbox";

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Checkbox 
        checked={isChecked} 
        onChange={setIsChecked} 
        label="Aceptar términos y condiciones" 
      />
    </div>
  );
};

export default CheckboxExample;
