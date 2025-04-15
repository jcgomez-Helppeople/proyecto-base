import { CustomInput, CustomPasswordInput, CustomTextArea, CustomSearchInput, CustomNumericInput } from "../../components/Inputs";

const ExampleCustomInput = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomInput</h1>

      <h2>Input Básico</h2>
      <CustomInput placeholder="Escribe algo..." />

      <h2>Input de Contraseña</h2>
      <CustomPasswordInput placeholder="Introduce tu contraseña" />

      <h2>Área de Texto</h2>
      <CustomTextArea placeholder="Escribe un mensaje..." rows={4} />

      <h2>Input de Búsqueda</h2>
      <CustomSearchInput
        placeholder="Buscar..."
        onSearch={(value) => console.log(value)}
      />

<h2>Input Numérico con Rango</h2>
      <CustomNumericInput
        min={0}
        max={100}
        step={5}
        placeholder="Introduce un número entre 0 y 100"
      />
    </div>
  );
};

export default ExampleCustomInput;
