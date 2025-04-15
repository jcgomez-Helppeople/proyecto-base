import React, { useState } from "react";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";
import { Button } from "antd";

const ExampleCustomDrawer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);
  };

  const closeDrawer = () => {
    setIsVisible(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomDrawer</h1>

      <Button type="primary" onClick={showDrawer}>
        Abrir Drawer
      </Button>

      <CustomDrawer
        title="Título del Drawer"
        visible={isVisible}
        onClose={closeDrawer}
        placement="right"
      >
        <p>Contenido del Drawer</p>
        <p>Más contenido...</p>
      </CustomDrawer>
    </div>
  );
};

export default ExampleCustomDrawer;