import CustomFloatButton from "../../components/CustomFloatButton/CustomFloatButton";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const ExampleCustomFloatButton = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomFloatButton</h1>

      <h2>Botones Flotantes</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CustomFloatButton icon={<PlusOutlined />} ariaLabel="Add" />
        <CustomFloatButton icon={<SearchOutlined />} ariaLabel="Search" />
        <CustomFloatButton tooltip="Loading" loading />
      </div>

      <h2>Botones con Tooltip</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CustomFloatButton icon={<PlusOutlined />} tooltip="Add Item" />
        <CustomFloatButton icon={<SearchOutlined />} tooltip="Search Item" />
      </div>
    </div>
  );
};

export default ExampleCustomFloatButton;