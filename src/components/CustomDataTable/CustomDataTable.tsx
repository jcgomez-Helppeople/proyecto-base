import { DataTable, DataTableValue } from "primereact/datatable";
import { Column } from "primereact/column"; // Cambiar la importación de Column
import { Button } from "primereact/button";
import "./CustomDataTable.styles.css";

interface CustomDataTableProps {
  data: DataTableValue[];
  onEdit: (rowData: any) => void;
  onDelete: (rowData: any) => void;
}

const CustomDataTable = ({ data, onEdit, onDelete }: CustomDataTableProps) => {
  const actionBodyTemplate = (rowData: any) => (
    <div className="custom-datatable__actions">
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-text p-button-primary"
        onClick={() => onEdit(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-text p-button-danger"
        onClick={() => onDelete(rowData)}
      />
    </div>
  );

  return (
    <DataTable
      value={data}
      paginator
      rows={10}
      className="custom-datatable"
      rowsPerPageOptions={[10, 20, 50]}
      responsiveLayout="scroll"
    >
      <Column field="id" header="ID"  />
      <Column field="name" header="Nombre de la política"  />
      <Column field="instructions" header="Instrucciones" />
      <Column field="enabled" header="Habilitado" />
      <Column body={actionBodyTemplate} header="Acciones" />
    </DataTable>
  );
};

export default CustomDataTable;