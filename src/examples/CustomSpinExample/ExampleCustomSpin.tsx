import { useState } from "react";
import CustomSpin from "../../components/CustomSpin/CustomSpin";
import { Button } from "antd";

const ExampleCustomSpin = () => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomSpin</h1>

      <Button type="primary" onClick={toggleLoading}>
        {loading ? "Detener Carga" : "Iniciar Carga"}
      </Button>

      <div style={{ marginTop: "2rem" }}>
        <CustomSpin spinning={loading} tip="Cargando...">
          <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
            Este contenido está cargando...
          </div>
        </CustomSpin>
      </div>
    </div>
  );
};

export default ExampleCustomSpin;