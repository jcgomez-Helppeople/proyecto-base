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
  EllipsisOutlined,
  PoweroffOutlined,
  ReloadOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import ExampleCustomDropDown from "./CustomDropDownExample/ExampleCustomDropDown";
import CustomTooltip from "../components/CustomTooltip/CustomTooltip";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import { CustomFloatButton } from "../components/CustomFloatButton";
import { PlusOutlined, QuestionOutlined } from "@ant-design/icons";
import CustomCalendar, { CustomCalendarEvent } from "../components/CustomCalendar/CustomCalendar";
import DropdownButton from "antd/es/dropdown/dropdown-button";
import { CustomInput } from "../components/Inputs";

type Policy = {
  id: number;
  name: string;
  instructions: string;
  enabled: string;
};


const initialEvents: CustomCalendarEvent[] = [
  {
    id: "1",
    title: "Reunión de equipo",
    start: "2025-05-22T10:00:00",
    end: "2025-05-22T11:00:00",
    allDay: false,
  },
  {
    id: "2",
    title: "Entrega de proyecto",
    start: "2025-05-23",
    allDay: true,
  },
];


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
  const [events, setEvents] = useState<CustomCalendarEvent[]>(initialEvents);



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

  const actionsDropdown = [
    { key: 'edit', label: 'Editar', onClick: () => console.log('Editar') },
    { key: 'delete', label: 'Eliminar', onClick: () => console.log('Eliminar') },
  ]
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
            fontSize: "var(--toolbar-labels-font-size)", // Tamaño de fuente 12px
            fontFamily: "var(--toolbar-title-font-family)", // Fuente Open Sans
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

  // Al hacer click en un evento
  const handleEventClick = (event: CustomCalendarEvent) => {
    alert(`Evento: ${event.title}\nInicio: ${event.start}`);
  };

  // Al seleccionar un rango de fecha
  const handleDateSelect = (info: { start: Date; end: Date; allDay: boolean }) => {
    const title = prompt("Título del nuevo evento:");
    if (title) {
      setEvents([
        ...events,
        {
          id: (events.length + 1).toString(),
          title,
          start: info.start,
          end: info.end,
          allDay: info.allDay,
        },
      ]);
    }
  };

  const columnsPolicies = [
    { title: "ID", dataIndex: "polCod", key: "polCod" },
    { title: 'polNom', dataIndex: "polNom", key: "polNom" },
    { title: 'instrucciones', dataIndex: "instrucciones", key: "instrucciones" },
    { title: 'habilitado', dataIndex: "habilitado", key: "habilitado" },
    {
      title: '',
      key: 'actions',
      render: (_: string, record: any) => {
        console.log("record", record);
        const handleMenuClick = ({ key }: { key: string }) => {
          switch (key) {
            case "on":
              /* encender */ break;
            case "off":
              /* apagar */ break;
            case "reload":
              /* reiniciar*/ break;
            case "delete": {
              break;
            };
          }
        };

        const menuItems = [
          {
            key: "on",
            icon: <PoweroffOutlined style={{ color: "#21c121" }} />,
            label: "Encender",
          },
          {
            key: "off",
            icon: <PoweroffOutlined style={{ color: "#d32f2f" }} />,
            label: "Apagar",
          },
          {
            key: "reload",
            icon: <ReloadOutlined style={{ color: "#fa8c16" }} />,
            label: "Reiniciar",
          },
          { key: "delete", icon: <CloseOutlined />, label: "Eliminar" },
        ];

        return (
          <div className="table-action-buttons">
            <Button
              danger
              icon={<EditOutlined />}
              onClick={() => { }}
            />
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => { }}
            />
            {/*   <Button
                onClick={() => { }}
                icon={<EllipsisOutlined />}
                size="small"
                /> */}
            <DropdownButton
              menu={{ items: menuItems, onClick: handleMenuClick }}
              trigger={["click"]}
              getPopupContainer={(trigger) => trigger.parentElement!}
              icon={<EllipsisOutlined />}
            />
          </div>
        )
      },
    },
  ]

  const policiesList = [
    {
      "polCod": 1,
      "polNom": "Política general",
      "cUsuario": "Cualquiera",
      "cArea": "Cualquiera",
      "cCas": "Cualquiera",
      "cTipo": "Cualquiera",
      "cProblema": "Cualquiera",
      "tSolucionDia": 1,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 0,
      "instrucciones": "Se usa por defecto",
      "tipo": "Uno Solo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": false,
      "polAprobar": true,
      "polPostimplementar": false,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 3,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    },
    {
      "polCod": 2,
      "polNom": "Politica general de Emergencia",
      "cUsuario": "Cualquiera",
      "cArea": "Cualquiera",
      "cCas": "Cualquiera",
      "cTipo": "1",
      "cProblema": "Cualquiera",
      "tSolucionDia": 1,
      "habilitado": "no",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 0,
      "instrucciones": "",
      "tipo": "Uno Solo",
      "emergencia": "si",
      "comite": 1111,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": false,
      "polAprobar": false,
      "polPostimplementar": false,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    },
    {
      "polCod": 3,
      "polNom": "Politica Tecnologia General",
      "cUsuario": "Cualquiera",
      "cArea": "1",
      "cCas": "Cualquiera",
      "cTipo": "Cualquiera",
      "cProblema": "Cualquiera",
      "tSolucionDia": 15,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 0,
      "instrucciones": "",
      "tipo": "Uno Solo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": true,
      "polAprobar": true,
      "polPostimplementar": true,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    },
    {
      "polCod": 4,
      "polNom": "Aprobaccion Backups",
      "cUsuario": "Cualquiera",
      "cArea": "Cualquiera",
      "cCas": "12",
      "cTipo": "Cualquiera",
      "cProblema": "Cualquiera",
      "tSolucionDia": 1,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 9,
      "instrucciones": "",
      "tipo": "Simultaneo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": true,
      "polAprobar": true,
      "polPostimplementar": true,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    },
    {
      "polCod": 5,
      "polNom": "Aprobacion Compra",
      "cUsuario": "Cualquiera",
      "cArea": "Cualquiera",
      "cCas": "14",
      "cTipo": "Cualquiera",
      "cProblema": "Cualquiera",
      "tSolucionDia": 0,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 20,
      "instrucciones": "Compra de insumos",
      "tipo": "Simultaneo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": false,
      "polAprobar": true,
      "polPostimplementar": false,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    },
    {
      "polCod": 6,
      "polNom": "daño de hardware",
      "cUsuario": "Cualquiera",
      "cArea": "Cualquiera",
      "cCas": "Cualquiera",
      "cTipo": "Cualquiera",
      "cProblema": "327",
      "tSolucionDia": 0,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 8,
      "instrucciones": "daño de hardware",
      "tipo": "Uno Solo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": false,
      "polAprobar": true,
      "polPostimplementar": false,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    },
    {
      "polCod": 7,
      "polNom": "Inteligencia y desarrollo",
      "cUsuario": "Cualquiera",
      "cArea": "Cualquiera",
      "cCas": "51",
      "cTipo": "Cualquiera",
      "cProblema": "Cualquiera",
      "tSolucionDia": 2,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 0,
      "instrucciones": "",
      "tipo": "Uno Solo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": true,
      "polAprobar": true,
      "polPostimplementar": true,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": true,
      "anularRfcCompleta": false
    },
    {
      "polCod": 8,
      "polNom": "Base de datos",
      "cUsuario": "Cualquiera",
      "cArea": "Cualquiera",
      "cCas": "Cualquiera",
      "cTipo": "Cualquiera",
      "cProblema": "1",
      "tSolucionDia": 1,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 0,
      "instrucciones": "Autorizar ingreso a servidores",
      "tipo": "Uno Solo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": false,
      "polAprobar": true,
      "polPostimplementar": false,
      "polHabilitaInterrupcion": true,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    },
    {
      "polCod": 9,
      "polNom": "Politica de TH",
      "cUsuario": "Cualquiera",
      "cArea": "220",
      "cCas": "Cualquiera",
      "cTipo": "Cualquiera",
      "cProblema": "Cualquiera",
      "tSolucionDia": 5,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 0,
      "instrucciones": "Aturizaciones del area TH",
      "tipo": "Uno Solo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "12",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": false,
      "polAprobar": true,
      "polPostimplementar": false,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    },
    {
      "polCod": 10,
      "polNom": "Politica I+D",
      "cUsuario": "Cualquiera",
      "cArea": "220",
      "cCas": "Cualquiera",
      "cTipo": "Cualquiera",
      "cProblema": "Cualquiera",
      "tSolucionDia": 5,
      "habilitado": "si",
      "cPrioridad": "Cualquiera",
      "tSolucionHora": 0,
      "instrucciones": "Aturizaciones del area I+D",
      "tipo": "Uno Solo",
      "emergencia": "no",
      "comite": 0,
      "cDepartamento": "Cualquiera",
      "naturaleza": null,
      "preaprobado": "no",
      "polVerificar": false,
      "polAprobar": true,
      "polPostimplementar": false,
      "polHabilitaInterrupcion": false,
      "polTipoCategorizacion": 2,
      "polMaximoAprobadores": 0,
      "polMaximoNoAprobadores": 0,
      "reabrir": false,
      "anularRfcCompleta": false
    }
  ]

  return (
    <div
      style={{
        padding: "1rem", // Reducir el padding general
        marginTop: "0", // Eliminar cualquier margen superior
        height: "100vh", // Asegurar que ocupe toda la altura de la pantalla
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
        defaultValues={{ dateRange: ["2025-05-01", "2025-05-15"] }}
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

      <CustomTable
        size='small'
        dataSource={policiesList}
        rowKey='polCod'
        columns={columnsPolicies}
        pagination={{
          pageSize: 10,
          pageSizeOptions: ["10", "25", "50"],
          showSizeChanger: true,
        }}
      />

      <CustomSelect
        placeholder="Selecciona una categoría"
        options={[]}
        mode="multiple" // Selección múltiple
        allowClear // Permitir limpiar la selección
        showSearch // Habilitar búsqueda
        onChange={(value) => console.log("Seleccionado:", value)}
        style={{ width: 200 }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
        <h2>Ejemplo de uso de CustomCalendar</h2>
        <CustomCalendar
          events={events}
          initialView="dayGridMonth"
          height={650}
          onEventClick={handleEventClick}
          onDateSelect={handleDateSelect}
        />
      </div>

      <ExampleCustomDropDown actions={actionsDropdown} />

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
        {({ filters, onChange }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: "100%",
            }}
          >
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <label>Ubicación</label>
                <CustomSelect
                  showSearch
                  optionFilterProp="label"
                  onChange={(value) => onChange("location", value)}
                  options={[]}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Departamento</label>
                <CustomSelect
                  showSearch
                  optionFilterProp="label"
                  options={[]}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <label>Marca</label>
                <CustomSelect
                  showSearch
                  placeholder="Selecciona marca"
                  options={[]}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Modelo</label>
                <CustomSelect
                  placeholder="Selecciona modelo"
                  options={[]}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <label>Último Scan</label>
                <CustomInput
                  placeholder="Filtrar por IP"
                  value={filters.ip}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label>Empresa</label>
                <CustomSelect
                  showSearch
                  placeholder="Selecciona empresa"
                  options={[]}
                />
              </div>
            </div>
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <label>IP</label>
                <CustomInput
                  placeholder="Filtrar por IP"
                  value={filters.ip}
                />
              </div>
              <div style={{ flex: 1 }}>
                {/* Columna vacía para ocupar el otro 50% */}
              </div>
            </div>
          </div>
        )}
      </CustomFilterDrawerHp>
      <CustomTooltip content="Este es un tooltip personalizado">
        <span>
          <Button type="primary"></Button>
        </span>
      </CustomTooltip>
    </div>
  );
};

export default PoliciesScreen;
