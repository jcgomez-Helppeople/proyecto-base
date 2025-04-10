import { useState } from "react";
import CustomFiltersSidebar from "../components/CustomFiltersSidebar";
import CustomToolbar from "../components/CustomToolbar";
import { PageLayout } from "../components/PageLayout";
import { DataTableExample } from "./DataTable";
import CustomInputText from "../components/CustomInputText";
import { DropDown, InputNumber } from "..";

export const TablePage = () => {
  const [visibleFilters, setVisibleFilters] = useState(false);

  return (
    <PageLayout title="Cambios">
      <CustomToolbar
        showSearch
        onCreate={() => {}}
        onFilter={() => setVisibleFilters(true)}
        onExport={() => {
          console.log("Exportando...");
        }}
      />
      <DataTableExample />
      <CustomFiltersSidebar
        visible={visibleFilters}
        onHide={() => setVisibleFilters(false)}
        onClearFilters={() => {}}
        onApplyFilters={() => {}}
      >
        <div>
          {/* Aquí va el contenido de los filtros */}
          <div>
            <CustomInputText label="Nombre" />
          </div>
          <div className="mt-3">
            <DropDown
              label="Criticidad"
              value={null}
              onChange={(value) => {
                console.log(value);
              }}
              options={[
                { label: "Opción 1", value: "1" },
                { label: "Opción 2", value: "2" },
              ]}
            />
          </div>
          {/* <div className="mt-3">
            <InputNumber
              label="Precio"
              value={null}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
          <div className="mt-3">
            <DropDown
              label="Inventario"
              value={null}
              onChange={(value) => {
                console.log(value);
              }}
              options={[
                { label: "Opción 1", value: "1" },
                { label: "Opción 2", value: "2" },
              ]}
            />
          </div> */}
        </div>
      </CustomFiltersSidebar>
    </PageLayout>
  );
};
