import { useState } from "react";
import CustomModal from "../../components/CustomModal/CustomModal";
import { Button } from "antd";

const ExampleCustomModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => {
    setIsVisible(true);
  };

  const handleOk = () => {
    console.log("Modal confirmado");
    setIsVisible(false);
  };

  const handleCancel = () => {
    console.log("Modal cancelado");
    setIsVisible(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomModal</h1>

      <Button type="primary" onClick={showModal}>
        Abrir Modal
      </Button>

      <CustomModal
        title="Título del Modal"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Contenido del Modal</p>
        <p>Más contenido...</p>
      </CustomModal>
    </div>
  );
};

export default ExampleCustomModal;