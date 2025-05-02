import React from "react";
import CustomToolbar from "../components/CustomToolbar/CustomToolbar";
import CustomTabs from "../components/CustomTabs/CustomTabs";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import CustomForm from "../components/CustomForm/CustomForm";
import CustomButton from "../components/CustomButton/CustomButton";
import { CustomInput } from "../components/Inputs";
import {CustomTextArea} from "../components/Inputs";

const RFCCreate = () => {

  const [form] = CustomForm.useForm();

  const handleSubmit = (values: any) => {
    console.log("Formulario enviado:", values);
  };

  const tabs = [
    { key: "general", label: "Datos Generales", content: renderGeneralData() },
    { key: "rfc", label: "RFC", content: <div>Contenido de RFC</div> },
    { key: "authorization", label: "Autorización", content: <div>Contenido de Autorización</div> },
    { key: "relations", label: "Relaciones", content: <div>Contenido de Relaciones</div> },
    { key: "cab", label: "Reuniones CAB", content: <div>Contenido de Reuniones CAB</div> },
    { key: "post", label: "Post Implementación", content: <div>Contenido de Post Implementación</div> },
    { key: "audit", label: "Traza de Auditoría", content: <div>Contenido de Traza de Auditoría</div> },
  ];

  function renderGeneralData() {
    return (
      <CustomForm
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ padding: "1rem", backgroundColor: "#ffffff", borderRadius: "8px" }}
      >
        <h3 style={{ fontFamily: "'Open Sans', sans-serif", fontSize: "16px", marginBottom: "1rem" }}>
          Datos Generales
        </h3>

        {/* A nombre de */}
        <CustomForm.Item
          name="aNombreDe"
          label="A nombre de"
          rules={[{ required: true, message: "Este campo es obligatorio" }]}
        >
          <CustomSelect
            placeholder="Selecciona una opción"
            options={[
              { label: "Pablo Manolo De La Roca", value: "pablo" },
              { label: "María Fernanda López", value: "maria" },
            ]}
          />
        </CustomForm.Item>

        {/* Líder de Cambio */}
        <CustomForm.Item
          name="liderDeCambio"
          label="Líder de Cambio"
          rules={[{ required: true, message: "Este campo es obligatorio" }]}
        >
          <CustomInput placeholder="Ingresa el nombre del líder" />
        </CustomForm.Item>

        {/* Descripción */}
        <CustomForm.Item
          name="descripcion"
          label="Descripción"
          rules={[{ required: true, message: "Este campo es obligatorio" }]}
        >
          <CustomTextArea placeholder="Ingresa una descripción" rows={4} />
        </CustomForm.Item>

        {/* Asunto del servicio */}
        <CustomForm.Item
          name="asuntoDelServicio"
          label="Asunto del servicio"
          rules={[{ required: true, message: "Este campo es obligatorio" }]}
        >
          <CustomInput placeholder="Ingresa el asunto del servicio" />
        </CustomForm.Item>

        {/* Vía */}
        <CustomForm.Item
          name="via"
          label="Vía"
          rules={[{ required: true, message: "Este campo es obligatorio" }]}
        >
          <CustomSelect
            placeholder="Selecciona una opción"
            options={[
              { label: "helppeople", value: "helppeople" },
              { label: "email", value: "email" },
            ]}
          />
        </CustomForm.Item>

        {/* Botón de enviar */}
        <CustomButton text="Guardar" onClick={()=>{}} type="primary"/>
      </CustomForm>
    );
  }

  return (
    <>
      <CustomToolbar title="Crear Cambio" backButtonText="Volver" onBack={() => {}} />
      <CustomTabs items={tabs} defaultActiveKey="general" type="card" />
    </>
  );
};

export default RFCCreate;
