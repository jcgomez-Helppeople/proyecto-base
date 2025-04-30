import CustomToolbar from "../components/CustomToolbar/CustomToolbar";
import CustomTabs from "../components/CustomTabs/CustomTabs";

const RFCCreate = () => {

  const tabs = [
    { key: "general", label: "Datos Generales", content: <div>Contenido de Datos Generales</div> },
    { key: "rfc", label: "RFC", content: <div>Contenido de RFC</div> },
    { key: "authorization", label: "Autorización", content: <div>Contenido de Autorización</div> },
    { key: "relations", label: "Relaciones", content: <div>Contenido de Relaciones</div> },
    { key: "cab", label: "Reuniones CAB", content: <div>Contenido de Reuniones CAB</div> },
    { key: "post", label: "Post Implementación", content: <div>Contenido de Post Implementación</div> },
    { key: "audit", label: "Traza de Auditoría", content: <div>Contenido de Traza de Auditoría</div> },
  ];

  return (
    <>
      <CustomToolbar title="Crear Cambio" backButtonText="Volver" onBack={()=>{}} />
      <CustomTabs items={tabs} defaultActiveKey="general" type="card" />
    </>
  );
};

export default RFCCreate;
