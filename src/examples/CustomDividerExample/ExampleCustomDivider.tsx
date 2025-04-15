import CustomDivider from "../../components/CustomDivider/CustomDivider";

const ExampleCustomDivider = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomDivider</h1>

      <h2>Divisores Horizontales</h2>
      <CustomDivider text="Texto Izquierda" textPosition="left" />
      <CustomDivider text="Texto Centro" textPosition="center" />
      <CustomDivider text="Texto Derecha" textPosition="right" />

      <h2>Divisores Verticales</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <span>Elemento 1</span>
        <CustomDivider type="vertical" />
        <span>Elemento 2</span>
        <CustomDivider type="vertical" />
        <span>Elemento 3</span>
      </div>

      <h2>Divisores con Estilo</h2>
      <CustomDivider text="Línea Discontinua" dashed />
      <CustomDivider text="Texto Plano" plain />
    </div>
  );
};

export default ExampleCustomDivider;