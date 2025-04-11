import { CustomButton } from "../../components/CustomButton";

const ForExampleCustomButton = () => {
  // Función para manejar el clic en el botón
  const handleClick = (message: string) => {
    alert(`Botón presionado: ${message}`);
  };

  return (
    <>
      <h1>Pruebas de CustomButton</h1>

      <h2>Variantes</h2>
      <CustomButton
        variant="primary"
        label="Primary"
        onClick={() => handleClick("Primary")}
      />
      <CustomButton
        variant="secondary"
        label="Secondary"
        onClick={() => handleClick("Secondary")}
      />
      <CustomButton
        variant="danger"
        label="Danger"
        onClick={() => handleClick("Danger")}
      />
      <CustomButton
        variant="success"
        label="Success"
        onClick={() => handleClick("Success")}
      />

      <h2>Tamaños</h2>
      <CustomButton size="small" label="Small" />
      <CustomButton size="medium" label="Medium" />
      <CustomButton size="large" label="Large" />

      <h2>Estado de Carga</h2>
      <CustomButton
        loading
        label="Cargando..."
        onClick={() => handleClick("Cargando")}
      />

      <h2>Estado Deshabilitado</h2>
      <CustomButton
        disabled
        label="Deshabilitado"
        onClick={() => handleClick("Deshabilitado")}
      />

      <h2>Prop FullWidth</h2>
      <CustomButton
        fullWidth
        label="Full Width"
        onClick={() => handleClick("Full Width")}
      />

      <h2>Prop Outlined</h2>
      <CustomButton
        outlined
        variant="primary"
        label="Outlined Primary"
        onClick={() => handleClick("Outlined Primary")}
      />
    </>
  );
};

export default ForExampleCustomButton;
