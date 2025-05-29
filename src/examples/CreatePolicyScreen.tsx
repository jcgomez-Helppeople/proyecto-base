import CustomToolbar from "../components/CustomToolbar/CustomToolbar";
import { CustomTextArea } from "../components/Inputs";
import { Input, Select, Switch, Form, Typography } from "antd";
import CustomNotification from "../components/CustomNotification/CustomNotification"; // Importa el nuevo componente
import CustomMessage from "../components/CustomMessage/CustomMessage";

const { Option } = Select;
const { Title } = Typography;

const CreatePolicyScreen = () => {
  const handleBackClick = () => {
    console.log("Volver");
  };

  const handleCreateClick = () => {
    console.log("Crear nueva política");
    CustomNotification.open({
      type: "success",
      message: "Política creada",
    });
    CustomMessage.success("Política creada exitosamente");
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
        title="Nueva política de RFC"
        onBack={handleBackClick}
        onNew={handleCreateClick}
        newButtonText="Crear"
        pageType="form"
      />

      {/* Formulario */}
      <Form
        layout="vertical"
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Sección 1: Información General */}
        <div style={{ marginBottom: "2rem" }}>
          <Title level={5}>Información General</Title>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Form.Item
              label="Nombre de la política"
              name="policyName"
              rules={[{ required: true, message: "Este campo es obligatorio" }]}
            >
              <Input placeholder="Ingrese el nombre de la política" />
            </Form.Item>
            <Form.Item
              label="Política de emergencia"
              name="emergencyPolicy"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="Política estándar"
              name="standardPolicy"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="Política habilitada"
              name="enabledPolicy"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
          </div>
        </div>

        {/* Sección 2: Criterios de Coincidencia */}
        <div style={{ marginBottom: "2rem" }}>
          <Title level={5}>Criterios de Coincidencia</Title>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Form.Item label="Departamentos" name="departments">
              <Select placeholder="Seleccione un departamento">
                <Option value="dep1">Departamento 1</Option>
                <Option value="dep2">Departamento 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Usuarios" name="users">
              <Select placeholder="Seleccione un usuario">
                <Option value="user1">Usuario 1</Option>
                <Option value="user2">Usuario 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Áreas de servicio" name="serviceAreas">
              <Select placeholder="Seleccione un área de servicio">
                <Option value="area1">Área 1</Option>
                <Option value="area2">Área 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Categoría" name="category">
              <Select placeholder="Seleccione una categoría">
                <Option value="cat1">Categoría 1</Option>
                <Option value="cat2">Categoría 2</Option>
              </Select>
            </Form.Item>
          </div>
        </div>

        {/* Sección 3: Configuración de Aprobaciones */}
        <div style={{ marginBottom: "2rem" }}>
          <Title level={5}>Configuración de Aprobaciones</Title>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Form.Item
              label="Instrucciones"
              name="instructions"
              style={{ flex: 2 }}
            >
              <Input.TextArea
                placeholder="Ingrese las instrucciones"
                rows={3}
              />
            </Form.Item>
            <Form.Item
              label="Máximo aprobadores"
              name="maxApprovers"
              rules={[{ required: true, message: "Este campo es obligatorio" }]}
            >
              <Input type="number" placeholder="0" />
            </Form.Item>
            <Form.Item
              label="Máximo de no aprobadores"
              name="maxNonApprovers"
              rules={[{ required: true, message: "Este campo es obligatorio" }]}
            >
              <Input type="number" placeholder="0" />
            </Form.Item>
          </div>
        </div>

        {/* Sección 4: Tiempo y Tipo de Aprobación */}
        <div>
          <Title level={5}>Tiempo y Tipo de Aprobación</Title>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Form.Item label="Tiempo para aprobar (días)" name="approvalDays">
              <Input type="number" placeholder="0" />
            </Form.Item>
            <Form.Item label="Tiempo para aprobar (horas)" name="approvalHours">
              <Input type="number" placeholder="0" />
            </Form.Item>
            <Form.Item label="Tipo de aprobación" name="approvalType">
              <Select placeholder="Seleccione el tipo de aprobación">
                <Option value="type1">Tipo 1</Option>
                <Option value="type2">Tipo 2</Option>
              </Select>
            </Form.Item>
            <Form.Item label="¿Quién aprueba?" name="approvers">
              <Select placeholder="Seleccione los aprobadores">
                <Option value="approver1">Aprobador 1</Option>
                <Option value="approver2">Aprobador 2</Option>
              </Select>
            </Form.Item>
            <CustomTextArea>
              <Form.Item
                label="Descripción de la política"
                name="policyDescription"
                rules={[
                  { required: true, message: "Este campo es obligatorio" },
                ]}
              >
                <Input.TextArea
                  placeholder="Ingrese una descripción detallada de la política"
                  rows={20}
                  cols={24}
                  style={{ resize: "none", fontSize: "12px" }}
                  maxLength={5000}
                />
              </Form.Item>
            </CustomTextArea>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CreatePolicyScreen;
