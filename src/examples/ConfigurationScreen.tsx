import { useState } from "react";
import CustomToolbar from "../components/CustomToolbar/CustomToolbar"; // Toolbar personalizado
import CustomTabs from "../components/CustomTabs/CustomTabs"; // Componente de Tabs personalizado
import CustomInput from "../components/Inputs/CustomInput/Input"; // Input personalizado
import CustomSwitch from "../components/CustomInputSwitch/CustomSwitch"; // Switch personalizado
import CustomButton from "../components/CustomButton/CustomButton"; // Botón personalizado
import CustomSelect from "../components/CustomSelect/CustomSelect"; // Select personalizado
import { Typography } from "antd";

const { Title } = Typography;

const ConfigurationScreen = () => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleSave = () => {
    console.log("Configuración actualizada");
  };

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
        title="Configuración helppeople"
        onBack={() => console.log("Volver")}
        onNew={handleSave}
        newButtonText="Actualizar"
      />

      {/* Tabs */}
      <CustomTabs
        activeKey={activeTab}
        onChange={handleTabChange}
        tabs={[
          { key: "general", label: "Datos generales" },
          { key: "timing", label: "Tiempos de configuración" },
          { key: "requests", label: "Configuración de gestión de solicitudes" },
          { key: "ci", label: "Configuración de CI" },
        ]}
      />

      {/* Contenido de las Tabs */}
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
        }}
      >
        {activeTab === "general" && (
          <div>
            <Title level={5}>Datos generales</Title>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <CustomInput
                label="Servidor de correo 1"
                placeholder="smtp.gmail.com"
                required
              />
              <CustomInput
                label="Dominio 1"
                placeholder="@gmail.com"
                required
              />
              <CustomInput
                label="Correo electrónico de"
                placeholder="Ingrese el correo"
              />
              <CustomInput
                label="Nombre de usuario"
                placeholder="helppeople@gmail.com"
              />
              <CustomSwitch label="Activar SSL" />
              <CustomSwitch label="Activar TLS 1.2" />
              <CustomInput
                label="Tamaño máximo archivo adjunto (mb)"
                placeholder="20"
                type="number"
              />
            </div>
          </div>
        )}

        {activeTab === "timing" && (
          <div>
            <Title level={5}>Tiempos de configuración</Title>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <CustomInput
                label="Si el administrador no asigna la solicitud en"
                placeholder="3600"
                type="number"
                required
              />
              <CustomInput
                label="Si el técnico no acepta la solicitud en"
                placeholder="0.05"
                type="number"
                required
              />
              <CustomInput
                label="Si el usuario no califica la encuesta en"
                placeholder="24"
                type="number"
                required
              />
              <CustomSwitch label="Activar precisión en el KPI" />
              <CustomSelect
                label="Horario por defecto"
                options={[
                  { value: "horario1", label: "Horario 1" },
                  { value: "horario2", label: "Horario 2" },
                ]}
                placeholder="Seleccione el horario"
              />
            </div>
          </div>
        )}

        {activeTab === "requests" && (
          <div>
            <Title level={5}>Configuración de gestión de solicitudes</Title>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <CustomSwitch label="Permitir eliminar adjuntos" />
              <CustomSwitch label="Habilitar niveles de atención" />
              <CustomInput
                label="Número máximo de preguntas por encuesta"
                placeholder="5"
                type="number"
                required
              />
              <CustomSwitch label="Self service activar marketplace" />
            </div>
          </div>
        )}

        {activeTab === "ci" && (
          <div>
            <Title level={5}>Configuración de CI</Title>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <CustomSwitch label="Habilitar la ubicación automática" />
              <CustomSwitch label="Habilitar actualización automática departamento" />
              <CustomSelect
                label="Cronograma de limpieza"
                options={[
                  { value: "cronograma1", label: "Cronograma 1" },
                  { value: "cronograma2", label: "Cronograma 2" },
                ]}
                placeholder="Seleccione el cronograma"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigurationScreen;
