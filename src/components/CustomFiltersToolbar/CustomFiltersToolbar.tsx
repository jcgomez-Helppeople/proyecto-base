import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "./CustomFiltersToolbar.styles.css";

interface CustomFiltersToolbarProps {
  onFilterChange: (filters: { codeOrName: string; instructions: string; enabled: string }) => void;
}

const CustomFiltersToolbar = ({ onFilterChange }: CustomFiltersToolbarProps) => {
  const enabledOptions = [
    { label: "Todos", value: "" },
    { label: "Sí", value: "Si" },
    { label: "No", value: "No" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    onFilterChange({ [field]: e.target.value });
  };

  const handleDropdownChange = (e: { value: string }, field: string) => {
    onFilterChange({ [field]: e.value });
  };

  return (
    <div className="custom-filters-toolbar">
      <div className="custom-filters-toolbar__field">
        <label htmlFor="codeOrName">Código o Nombre</label>
        <InputText
          id="codeOrName"
          placeholder="Buscar por código o nombre"
          onChange={(e) => handleInputChange(e, "codeOrName")}
        />
      </div>
      <div className="custom-filters-toolbar__field">
        <label htmlFor="instructions">Instrucciones</label>
        <InputText
          id="instructions"
          placeholder="Buscar por instrucciones"
          onChange={(e) => handleInputChange(e, "instructions")}
        />
      </div>
      <div className="custom-filters-toolbar__field">
        <label htmlFor="enabled">Habilitado</label>
        <Dropdown
          id="enabled"
          options={enabledOptions}
          placeholder="Filtrar por habilitado"
          onChange={(e) => handleDropdownChange(e, "enabled")}
        />
      </div>
    </div>
  );
};

export default CustomFiltersToolbar;