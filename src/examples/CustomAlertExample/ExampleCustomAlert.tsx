import React from "react";
import CustomAlert from "../../components/CustomAlert/CustomAlert";

const ExampleCustomAlert = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomAlert</h1>

      <h2>Alert de Éxito</h2>
      <CustomAlert
        type="success"
        message="Operación exitosa"
        description="El proceso se completó correctamente."
        closable
      />

      <h2>Alert de Información</h2>
      <CustomAlert
        type="info"
        message="Información importante"
        description="Este es un mensaje informativo."
      />

      <h2>Alert de Advertencia</h2>
      <CustomAlert
        type="warning"
        message="Advertencia"
        description="Este es un mensaje de advertencia."
        closable
      />

      <h2>Alert de Error</h2>
      <CustomAlert
        type="error"
        message="Error"
        description="Ocurrió un error durante el proceso."
      />
    </div>
  );
};

export default ExampleCustomAlert;