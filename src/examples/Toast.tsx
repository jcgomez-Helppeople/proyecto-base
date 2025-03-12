import { useState } from "react";
import Toast from "../components/Toast";
import { Button } from "primereact/button";

const ToastExample = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 100);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Toast
        messages={[
          { severity: "success", summary: "Éxito", detail: "Operación completada correctamente" },
          { severity: "info", summary: "Información", detail: "Este es un mensaje informativo" },
        ]}
        trigger={showToast}
      />
      <Button label="Mostrar Notificación" onClick={handleShowToast} />
    </div>
  );
};

export default ToastExample;
