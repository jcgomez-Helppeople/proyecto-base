import CustomTooltip from "../../components/CustomTooltip/CustomTooltip";
import { Button } from "antd";

const ExampleCustomTooltip = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomTooltip</h1>

      <h2>Tooltip Básico</h2>
      <CustomTooltip content="Este es un tooltip básico">
        <Button type="primary">Pasa el cursor aquí</Button>
      </CustomTooltip>

      <h2>Tooltip con Posición Personalizada</h2>
      <CustomTooltip content="Tooltip en la parte superior" placement="top">
        <Button type="default">Tooltip Arriba</Button>
      </CustomTooltip>

      <CustomTooltip content="Tooltip en la parte derecha" placement="right">
        <Button type="default">Tooltip Derecha</Button>
      </CustomTooltip>

      <CustomTooltip content="Tooltip en la parte inferior" placement="bottom">
        <Button type="default">Tooltip Abajo</Button>
      </CustomTooltip>

      <CustomTooltip content="Tooltip en la parte izquierda" placement="left">
        <Button type="default">Tooltip Izquierda</Button>
      </CustomTooltip>
    </div>
  );
};

export default ExampleCustomTooltip;