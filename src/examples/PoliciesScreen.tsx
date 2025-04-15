import React, { useState } from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import CustomButton from "../components/CustomButton/CustomButton";
import CustomTooltip from "../components/CustomTooltip/CustomTooltip";
import { Space } from "antd";

const PoliciesScreen = () => {
  const [filters, setFilters] = useState({
    codeOrName: "",
    instructions: "",
    enabled: "",
  });

  const data = [
    { id: 1, name: "Política general", instructions: "Se usa por defecto", enabled: "Sí" },
    { id: 2, name: "Política general de Emergencia", instructions: "Política general", enabled: "Sí" },
    { id: 3, name: "Política Tecnología General", instructions: "Política general de tecnología I+D", enabled: "Sí" },
    { id: 4, name: "Aprobación Backups", instructions: "Política para aprobaciones", enabled: "Sí" },
    { id: 5, name: "Aprobación Compra", instructions: "Compra de insumos", enabled: "Sí" },
  ];

  const handleNewClick = () => {
    console.log("Nueva política");
  };

  const handleBackClick = () => {
    console.log("Volver");
  };

  const handleEdit = (rowData: any) => {
    console.log("Editar:", rowData);
  };

  const handleDelete = (rowData: any) => {
    console.log("Eliminar:", rowData);
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
    },
    {
      title: "Acciones",
      key: "actions",
      render: (_: any, record: any) => (
        <Space>
          <CustomTooltip content="Editar">
            <CustomButton
              type="link"
              icon={<i className="fas fa-edit" />}
              onClick={() => handleEdit(record)}
            />
          </CustomTooltip>
          <CustomTooltip content="Eliminar">
            <CustomButton
              type="link"
              danger
              icon={<i className="fas fa-trash" />}
              onClick={() => handleDelete(record)}
            />
          </CustomTooltip>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Administración de Políticas RFC</h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <CustomButton type="default" onClick={handleBackClick} icon={<i className="fas fa-arrow-left" />}>
          Volver
        </CustomButton>
        <CustomButton type="primary" onClick={handleNewClick} icon={<i className="fas fa-plus" />}>
          Nueva
        </CustomButton>
      </div>

      <CustomTable
        customTitle="Lista de Políticas"
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default PoliciesScreen;