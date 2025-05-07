import { useState } from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import CustomToolbar from "../components/CustomToolbar/CustomToolbar";
import CustomFilterToolbar from "../components/CustomFilterToolbar/CustomFilterToolbar";
import CustomFilterDrawer from "../components/CustomFilterDrawer/CustomFilterDrawer";
import { EditOutlined, DeleteOutlined, FileExcelOutlined, FilePdfOutlined } from "@ant-design/icons";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import { Button, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import CustomTooltip from "../components/CustomTooltip/CustomTooltip";

type Policy = {
  id: number;
  name: string;
  instructions: string;
  enabled: string;
};

const PoliciesScreen = () => {
  const navigate = useNavigate();

  const data: Policy[] = Array.from({ length: 70 }, (_, index) => ({
    id: index + 1,
    name: `Política ${index + 1}`,
    instructions: `Instrucciones para la política ${index + 1}`,
    enabled: index % 2 === 0 ? "Sí" : "No",
  }));

  const options = [
    { value: "cat1", label: "Categoría 1" },
    { value: "cat2", label: "Categoría 2" },
    { value: "cat3", label: "Categoría 3" },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [filters, setFilters] = useState<Record<string, any>>({});

  

  const handleNewClick = () => {
    navigate("/create-policy");
  };

  const handleBackClick = () => {
    console.log("Volver");
  };

  const handleEdit = (rowData: Policy) => {
    console.log("Editar:", rowData);
  };

  const handleDelete = (rowData: Policy) => {
    console.log("Eliminar:", rowData);
  };

  const handleFilter = (filters: Partial<Record<keyof Policy, string>>) => {
    const filtered = data.filter((item) =>
      Object.entries(filters).every(([key, value]) =>
        item[key as keyof Policy]
          ?.toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const handleClearFilters = () => {
    setFilteredData(data);
    setFilters({});
  };

  const handleExportExcel = () => {
    console.log("Exportar a Excel");
  };

  const handleExportPdf = () => {
    console.log("Exportar a PDF");
  };

  const handleOpenDrawer = () => setDrawerVisible(true);
  const handleCloseDrawer = () => setDrawerVisible(false);

  const handleApplyFilters = () => {
    console.log("Aplicar filtros:", filters);
    setDrawerVisible(false);
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
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
      render: (enabled: string) => (
        <Tag
          color={enabled === "Sí" ? "green" : "red"}
          style={{
            fontSize: "12px", // Tamaño de fuente 12px
            fontFamily: "'Open Sans', sans-serif", // Fuente Open Sans
            width: "30px", // Ancho fijo para ambos valores
            textAlign: "center", // Centrar el texto
          }}
        >
          {enabled}
        </Tag>
      ),
    },
    {
      title: "Acciones",
      key: "actions",
      render: (_: any, record: Policy) => (
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => handleEdit(record)}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#1890ff",
            }}
          >
            <EditOutlined />
          </button>
          <button
            onClick={() => handleDelete(record)}
            style={{
              border: "none",
              background: "none",
              cursor: "pointer",
              color: "#ff4d4f",
            }}
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div
      style={{
        padding: "1rem", // Reducir el padding general
        marginTop: "0", // Eliminar cualquier margen superior
        height: "100vh", // Asegurar que ocupe toda la altura de la pantalla
        overflow: "hidden", // Evitar scroll innecesario
      }}
    >
      <CustomToolbar
        title="Administración de Políticas RFC"
        onBack={handleBackClick}
        onNew={handleNewClick}
        newButtonText="Nuevo"
      />

      <CustomFilterToolbar
        fields={[
          {
            key: "id",
            label: "ID",
            placeholder: "Buscar por ID",
            type: "number",
          },
          { key: "name", label: "Nombre", placeholder: "Buscar por nombre" },
          {
            key: "enabled",
            label: "Habilitado",
            type: "select",
            options: [
              { label: "Sí", value: "Sí" },
              { label: "No", value: "No" },
            ],
          },
          {
            key: "date",
            label: "Fecha",
            type: "date", // Tipo "date" para usar el RangePicker
            placeholder: "Selecciona una fecha",
          },
          {
            key: "dateRange",
            label: "Rango de Fechas",
            type: "range", // Tipo "date" para usar el RangePicker
            placeholder: "Selecciona un rango de fechas",
          },
          {
            key: "categories",
            label: "Categorías",
            type: "select",
            mode: "multiple", // Activar selección múltiple
            options: [
              { label: "Categoría 1", value: "cat1" },
              { label: "Categoría 2", value: "cat2" },
              { label: "Categoría 3", value: "cat3" },
            ],
          },
        ]}
        onFilter={handleFilter}
        onClearFilters={handleClearFilters}
        actions={[
          {
            icon: <FileExcelOutlined />,
            tooltip: "Exportar a Excel",
            onClick: handleExportExcel,
          },
          {
            icon: <FilePdfOutlined />,
            tooltip: "Exportar a PDF",
            onClick: handleExportPdf,
          },
        ]}
        onAdvancedFilters={handleOpenDrawer}
      />

      <CustomTable
        rowKey="id"
        columns={columns}
        dataSource={filteredData}
        size="small"
        pagination={{
          pageSize: 10,
          pageSizeOptions: ["10", "25", "50"],
          showSizeChanger: true,
        }}
        rowSelection={{
          type: "checkbox", // O "radio" para selección única
          onChange: (selectedRowKeys, selectedRows) => {
            console.log("Selected Row Keys:", selectedRowKeys);
            console.log("Selected Rows:", selectedRows);
          },
        }}
      />

<CustomSelect
      placeholder="Selecciona una categoría"
      options={options}
      mode="multiple" // Selección múltiple
      allowClear // Permitir limpiar la selección
      showSearch // Habilitar búsqueda
      onChange={(value) => console.log("Seleccionado:", value)}
      style={{ width: 200 }}
    />

      <CustomFilterDrawer
        visible={drawerVisible}
        title="Filtros"
        fields={[
          { key: "startDate", label: "Fecha Inicio", type: "text", placeholder: "Fecha Inicio" },
          { key: "endDate", label: "Fecha Final", type: "text", placeholder: "Fecha Final" },
          { key: "rfcCode", label: "Código RFC", type: "text", placeholder: "Código RFC" },
          { key: "order", label: "Orden S.", type: "number", placeholder: "Orden S." },
          {
            key: "status",
            label: "Estado",
            type: "select",
            options: [
              { label: "Por Verificar", value: "verificar" },
              { label: "Por Aprobar", value: "aprobar" },
              { label: "En Pruebas", value: "pruebas" },
              { label: "Realizado", value: "realizado" },
              { label: "Atrasado", value: "atrasado" },
              { label: "No Aprobado", value: "no_aprobado" },
            ],
          },
        ]}
        filters={filters}
        onClose={handleCloseDrawer}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
        onChange={handleFilterChange}
      />
        <CustomTooltip content="Este es un tooltip personalizado">
    <span>
      <Button type="primary"></Button>
    </span>
  </CustomTooltip>
    </div>
  );
};

export default PoliciesScreen;
