import { useState } from "react";
import CustomToolbar from "../components/CustomToolbar/CustomToolbar";
import CustomDataTable from "../components/CustomDataTable/CustomDataTable";
import CustomFiltersToolbar from "../components/CustomFiltersToolbar/CustomFiltersToolbar";
// import "../styles/PageLayout.css";

const PoliciesScreen = () => {
  const [data, setData] = useState([
    { id: 1, name: "Política general", instructions: "Se usa por defecto", enabled: "Si" },
    { id: 2, name: "Política general de Emergencia", instructions: "Politica general", enabled: "Si" },  
    { id: 2, name: "Política general de Emergencia", instructions: "Politica general", enabled: "Si" },
    { id: 3, name: "Política Tecnología General", instructions: "Politica general de tecnoliga I+D", enabled: "Si" },
    { id: 4, name: "Aprobación Backups", instructions: "Politica para aprobaciones", enabled: "Si" },
    { id: 5, name: "Aprobación Backups", instructions: "Politica para aprobaciones", enabled: "Si" },
    { id: 6, name: "Aprobación Compra", instructions: "Compra de insumos", enabled: "Si" }, 
    { id: 7, name: "Aprobación Compra", instructions: "Compra de insumos", enabled: "Si" },
    { id: 8, name: "Política general", instructions: "Se usa por defecto", enabled: "Si" },
    { id: 9, name: "Política general", instructions: "Se usa por defecto", enabled: "Si" },
    { id: 10, name: "Política general de Emergencia", instructions: "Politica general", enabled: "Si" },
    { id: 11, name: "Política general de Emergencia", instructions: "Politica general", enabled: "Si" },
    { id: 12, name: "Política Tecnología General", instructions: "Politica general de tecnoliga I+D", enabled  : "Si" },
    { id: 13, name: "Aprobación Backups", instructions: "Politica para aprobaciones", enabled: "Si" },
    { id: 14, name: "Aprobación Compra", instructions: "Compra de insumos", enabled: "Si" },
  ]);

  const [filters, setFilters] = useState({
    codeOrName: "",
    instructions: "",
    enabled: "",
  });

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

  const handleFilterChange = (newFilters: any) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
    console.log("Filtros actualizados:", { ...filters, ...newFilters });
  };

  return (
    // <div className="policies-screen">
    <div>
      <CustomToolbar
        title="Administración Políticas RFC"
        onNewClick={handleNewClick}
        onBackClick={handleBackClick}
      />
      <CustomFiltersToolbar onFilterChange={handleFilterChange} />
      <CustomDataTable
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      </div>
    // </div>
  );
};

export default PoliciesScreen;