import React, { useState } from "react";
import CustomSelect from "../../components/CustomSelect/CustomSelect";

const ExampleCustomSelect = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const options = [
    { label: "Opción 1", value: "1" },
    { label: "Opción 2", value: "2" },
    { label: "Opción 3", value: "3" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomSelect</h1>

      <h2>Selector Básico</h2>
      <CustomSelect
        placeholder="Selecciona una opción"
        options={options}
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
      />

      <h2>Selector con Búsqueda</h2>
      <CustomSelect
        showSearch
        placeholder="Busca una opción"
        options={options}
        value={selectedValue}
        onChange={(value) => setSelectedValue(value)}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
      />
    </div>
  );
};

export default ExampleCustomSelect;