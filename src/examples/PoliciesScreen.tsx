import { useState } from "react";
import CustomTable from "../components/CustomTable/CustomTable";
import CustomToolbar from "../components/CustomToolbar/CustomToolbar";
import CustomFilterToolbar from "../components/CustomFilterToolbar/CustomFilterToolbar";
import CustomFilterDrawerHp from "../components/CustomFilterDrawerHp/CustomFilterDrawerHp";
import {
  EditOutlined,
  DeleteOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { CustomFloatButton } from "../components/CustomFloatButton";
import { PlusOutlined, QuestionOutlined } from "@ant-design/icons";

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

  const [filteredData, setFilteredData] = useState(data);
  const [hpDrawerVisible, setHpDrawerVisible] = useState(false);
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [filterLoading, setFilterLoading] = useState(false);

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

  /**
   * Simula una llamada al servicio para filtrar datos
   * y devuelve una promesa para que el botón se ponga en loading.
   */
  const handleFilter = (filters: Partial<Record<keyof Policy, string>>) => {
    setFilterLoading(true);
    return new Promise<void>((resolve) => {
      // Simulamos un delay de 2 segundos
      setTimeout(() => {
        const result = data.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key as keyof Policy]
              ?.toString()
              .toLowerCase()
              .includes(value.toLowerCase())
          )
        );
        setFilteredData(result);
        setFilterLoading(false);
        resolve();
      }, 2000);
    });
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


  const handleOpenHpDrawer = () => setHpDrawerVisible(true);
  const handleCloseHpDrawer = () => setHpDrawerVisible(false);


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
        loading={filterLoading} // ← pasamos loading
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
        onAdvancedFilters={handleOpenHpDrawer} // ← abrimos HP drawer
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

      <CustomFloatButton
        icon={<PlusOutlined />}
        type="primary"
        tooltip="Agregar nuevo"
        onClick={() => console.log("Clic en botón flotante")}
      />

      <CustomFloatButton.Group
        trigger="click"
        style={{ right: 24, bottom: 24 }}
      >
        <CustomFloatButton icon={<PlusOutlined />} tooltip="Agregar" />
        <CustomFloatButton icon={<QuestionOutlined />} tooltip="Ayuda" />
      </CustomFloatButton.Group>

      {/* === Ejemplo de CustomFilterDrawerHp === */}
      <CustomFilterDrawerHp
        visible={hpDrawerVisible}
        title="Filtros Avanzados HP"
        filters={filters}
        onClose={handleCloseHpDrawer}
        onSubmit={async () => {
          await handleFilter(filters);
          handleCloseHpDrawer();
        }}
        onClear={() => {
          setFilters({});
          handleClearFilters();
        }}
        onChange={handleFilterChange}
        loading={filterLoading}
      >
        {/* You can add filter fields here if needed */}
        {() => null}
      </CustomFilterDrawerHp>
    </div>
  );
};

export default PoliciesScreen;
