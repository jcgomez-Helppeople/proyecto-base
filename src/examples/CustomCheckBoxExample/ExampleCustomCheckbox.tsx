import { useState } from "react";
import CustomCheckbox from "../../components/CustomCheckBox/CustomCheckBox";

const ExampleCustomCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckAllChange = (e: any) => {
    setCheckAll(e.target.checked);
    setIndeterminate(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomCheckbox</h1>

      <h2>Checkbox Básico</h2>
      <CustomCheckbox
        label="Checkbox básico"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <h2>Checkbox Indeterminado</h2>
      <CustomCheckbox
        label="Checkbox indeterminado"
        indeterminate={indeterminate}
        onChange={(e) => setIndeterminate(e.target.checked)}
      />

      <h2>Checkbox Seleccionar Todo</h2>
      <CustomCheckbox
        label="Seleccionar Todo"
        checked={checkAll}
        indeterminate={indeterminate}
        onChange={handleCheckAllChange}
      />
    </div>
  );
};

export default ExampleCustomCheckbox;