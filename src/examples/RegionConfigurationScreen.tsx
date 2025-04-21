import React, { useState } from "react";
import CustomToolbar from "../components/CustomToolbar/CustomToolbar"; // Toolbar personalizado
import CustomTable from "../components/CustomTable/CustomTable"; // Tabla personalizada
import CustomButton from "../components/CustomButton/CustomButton"; // Botón personalizado
import CustomModal from "../components/CustomModal/CustomModal"; // Modal personalizado
import CustomInput from "../components/Inputs/CustomInput/Input"; // Input personalizado
import CustomSwitch from "../components/CustomInputSwitch/CustomSwitch"; // Switch personalizado
import { Typography, message } from "antd";

const { Title } = Typography;

const RegionConfigurationScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [regions, setRegions] = useState([
    { code: "898897979798", name: "SURRRRRRR", status: true },
    { code: "TTRE43;?)", name: "SURVERWERWERWER", status: false },
    { code: "234234wwew", name: "weweweqweqweq", status: true },
  ]);

  const [newRegion, setNewRegion] = useState({ code: "", name: "" });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewRegion({ code: "", name: "" }); // Limpiar los campos
  };

  const handleCreateRegion = () => {
    if (!newRegion.code || !newRegion.name) {
      message.error("Por favor, complete todos los campos.");
      return;
    }

    setRegions([...regions, { ...newRegion, status: true }]);
    message.success("Región creada exitosamente.");
    handleCloseModal();
  };

  const columns = [
    {
      title: "Código",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) => <CustomSwitch checked={status} />,
    },
    {
      title: "Acciones",
      key: "actions",
      render: () => (
        <CustomButton
          type="default"
          icon={<i className="fas fa-pen" />}
          onClick={() => console.log("Editar región")}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "1rem",
        marginTop: "0",
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Toolbar */}
      <CustomToolbar
        title="Configuración región"
        onBack={() => console.log("Volver")}
        onNew={handleOpenModal}
        newButtonText="Agregar nueva"
      />

      {/* Tabla */}
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
        }}
      >
        <CustomTable dataSource={regions} columns={columns} rowKey="code" />
      </div>

      {/* Modal */}
      <CustomModal
        title="Nueva región"
        visible={isModalOpen}
        onCancel={handleCloseModal}
        footer={[
          <CustomButton
            key="cancel"
            type="default"
            onClick={handleCloseModal}
            text="Cancelar"
          />,
          <CustomButton
            key="create"
            type="primary"
            onClick={handleCreateRegion}
            text="Crear"
          />,
        ]}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <CustomInput
            label="Código"
            placeholder="Ingrese el código"
            required
            value={newRegion.code}
            onChange={(e) =>
              setNewRegion((prev) => ({ ...prev, code: e.target.value }))
            }
          />
          <CustomInput
            label="Nombre"
            placeholder="Ingrese el nombre"
            required
            value={newRegion.name}
            onChange={(e) =>
              setNewRegion((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
      </CustomModal>
    </div>
  );
};

export default RegionConfigurationScreen;