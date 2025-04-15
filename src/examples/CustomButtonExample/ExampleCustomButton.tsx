import CustomButton from "../../components/CustomButton/CustomButton";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

const ExampleCustomButton = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Prueba de CustomButton</h1>

      <h2>Tipos</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CustomButton type="primary">Primary</CustomButton>
        <CustomButton type="default">Default</CustomButton>
        <CustomButton type="dashed">Dashed</CustomButton>
        <CustomButton type="text">Text</CustomButton>
        <CustomButton type="link">Link</CustomButton>
      </div>

      <h2>Tamaños</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CustomButton size="small">Small</CustomButton>
        <CustomButton size="medium">Medium</CustomButton>
        <CustomButton size="large">Large</CustomButton>
      </div>

      <h2>Tipos con Íconos</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CustomButton type="primary" icon={<SearchOutlined />}>
          Search
        </CustomButton>
        <CustomButton type="default" icon={<UserOutlined />}>
          User
        </CustomButton>
        <CustomButton type="dashed" icon={<SearchOutlined />}>
          Dashed
        </CustomButton>
        <CustomButton type="text" icon={<SearchOutlined />}>
          Text
        </CustomButton>
        <CustomButton type="link" icon={<SearchOutlined />}>
          Link
        </CustomButton>
      </div>

      <h2>Solo Íconos</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CustomButton type="primary" icon={<SearchOutlined />} ariaLabel="Search" />
        <CustomButton type="default" icon={<UserOutlined />} ariaLabel="User" />
        <CustomButton type="dashed" icon={<SearchOutlined />} ariaLabel="Dashed" />
        <CustomButton type="text" icon={<SearchOutlined />} ariaLabel="Text" />
        <CustomButton type="link" icon={<SearchOutlined />} ariaLabel="Link" />
      </div>

      <h2>Botones con Loading</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <CustomButton type="primary" loading>
          Loading (Left)
        </CustomButton>
        <CustomButton type="primary" loading loadingPosition="right">
          Loading (Right)
        </CustomButton>
        <CustomButton type="default" loading>
          Default Loading
        </CustomButton>
        <CustomButton type="dashed" loading loadingPosition="right">
          Dashed Loading
        </CustomButton>
      </div>

      <h2>Botones de Bloque</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <CustomButton type="primary" block>
          Primary Block
        </CustomButton>
        <CustomButton type="default" block>
          Default Block
        </CustomButton>
        <CustomButton type="dashed" block>
          Dashed Block
        </CustomButton>
        <CustomButton type="text" block>
          Text Block
        </CustomButton>
        <CustomButton type="link" block>
          Link Block
        </CustomButton>
      </div>
    </div>
  );
};

export default ExampleCustomButton;