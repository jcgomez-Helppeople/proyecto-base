import React from "react";
import CustomTabs from "../../components/CustomTabs/CustomTabs";

const ExampleCustomTabs = () => {
  const items = [
    {
      key: "1",
      label: "Tab 1",
      children: <div>Contenido de la pestaña 1</div>,
    },
    {
      key: "2",
      label: "Tab 2",
      children: <div>Contenido de la pestaña 2</div>,
    },
    {
      key: "3",
      label: "Tab 3",
      children: <div>Contenido de la pestaña 3</div>,
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomTabs</h1>

      <CustomTabs
        customTitle="Ejemplo de Tabs"
        defaultActiveKey="1"
        items={items}
      />
    </div>
  );
};

export default ExampleCustomTabs;