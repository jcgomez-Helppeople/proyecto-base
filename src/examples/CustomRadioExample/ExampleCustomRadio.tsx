import React, { useState } from "react";
import CustomRadio, { CustomRadioGroup } from "../../components/CustomRadio/CustomRadio";

const ExampleCustomRadio = () => {
  const [selectedValue, setSelectedValue] = useState<string | number | null>(null);

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomRadio</h1>

      <h2>Radio Básico</h2>
      <CustomRadio label="Opción 1" value="1" checked={selectedValue === "1"} onChange={handleChange} />
      <CustomRadio label="Opción 2" value="2" checked={selectedValue === "2"} onChange={handleChange} />

      <h2>Grupo de Radios</h2>
      <CustomRadioGroup onChange={handleChange} value={selectedValue}>
        <CustomRadio label="Opción A" value="A" />
        <CustomRadio label="Opción B" value="B" />
        <CustomRadio label="Opción C" value="C" />
      </CustomRadioGroup>
    </div>
  );
};

export default ExampleCustomRadio;