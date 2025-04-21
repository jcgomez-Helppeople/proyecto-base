import { useState } from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import CustomToolbar from "../components/CustomToolbar/CustomToolbar";
import CustomFilterToolbar from "../components/CustomFilterToolbar/CustomFilterToolbar";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";

type Policy = {
  id: number;
  name: string;
  instructions: string;
  enabled: string;
};

const PoliciesScreen = () => {
  const navigate = useNavigate();

  const data: Policy[] = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Política ${index + 1}`,
    instructions: `Instrucciones para la política ${index + 1}`,
    enabled: index % 2 === 0 ? "Sí" : "No",
  }));

  const [filteredData, setFilteredData] = useState(data);

  const handleNewClick = () => {
    navigate("/create-policy");
  };

  const handleBackClick = () => {
    console.log("Volver");
  };

  const handleEdit = (rowData: Policy) => {
    console.log("Editar:", rowData);
  };

  const handleDelete = (rowData: Policy) => {
    console.log("Eliminar:", rowData);
  };

  const handleFilter = (filters: Partial<Record<keyof Policy, string>>) => {
    const filtered = data.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
        item[key as keyof Policy]
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const handleClearFilters = () => {
    setFilteredData(data);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nombre de la política",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Instrucciones",
      dataIndex: "instructions",
      key: "instructions",
    },
    {
      title: "Habilitado",
      dataIndex: "enabled",
      key: "enabled",
      render: (enabled: string) => (
        <Tag
        color={enabled === "Sí" ? "green" : "red"}
        style={{
          fontSize: "12px", // Tamaño de fuente 12px
          fontFamily: "'Open Sans', sans-serif", // Fuente Open Sans
          width: "30px", // Ancho fijo para ambos valores
          textAlign: "center", // Centrar el texto
        }}
      >
        {enabled}
      </Tag>
      ),
    },
    {
      title: "Acciones",
      key: "actions",
      render: (_: any, record: Policy) => (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => handleEdit(record)}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#1890ff",
            }}
          >
            <EditOutlined />
          </button>
          <button
            onClick={() => handleDelete(record)}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#ff4d4f",
            }}
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "1rem", // Reducir el padding general
        marginTop: "0", // Eliminar cualquier margen superior
        height: "100vh", // Asegurar que ocupe toda la altura de la pantalla
        overflow: "hidden", // Evitar scroll innecesario
      }}
    >
      <CustomToolbar
        title="Administración de Políticas RFC"
        onBack={handleBackClick}
        onNew={handleNewClick}
        newButtonText="Nuevo"
      />

      <CustomFilterToolbar
        fields={[
          { key: "id", placeholder: "Buscar por ID", label: "ID" },
          { key: "name", placeholder: "Buscar por nombre", label: "Nombre" },
          {
            key: "instructions",
            placeholder: "Buscar por instrucciones",
            label: "Instrucciones",
          },
          {
            key: "enabled",
            placeholder: "Buscar por habilitado",
            label: "Habilitado",
          },
        ]}
        onFilter={handleFilter}
        onClearFilters={handleClearFilters}
      />

      <CustomTable
        columns={columns}
        dataSource={filteredData}
        size="small"
        pagination={{
          pageSize: 10,
          pageSizeOptions: ["10", "25", "50"],
          showSizeChanger: true,
        }}
      />
    </div>
  );
};

export default PoliciesScreen;
