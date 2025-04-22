import { useState } from "react";
import CustomSwitch from "../../components/CustomInputSwitch/CustomSwitch";

const ExampleCustomSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomSwitch</h1>

      <h2>Switch Básico</h2>
      <CustomSwitch
        checked={isChecked}
        onChange={(checked) => setIsChecked(checked)}
        label="Encendido/Apagado"
      />

      <h2>Switch Deshabilitado</h2>
      <CustomSwitch checked={false} disabled label="No editable" />
    </div>
  );
};

export default ExampleCustomSwitch;