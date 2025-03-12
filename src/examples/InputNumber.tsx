import { useState } from "react";
import InputNumber from "../components/InputNumber";

const InputNumberExample = () => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <InputNumber
      value={value}
      onChange={(newValue: number | null) => setValue(newValue)}
    />
  );
};

export default InputNumberExample;
