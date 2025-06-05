import { Table as AntTable, TableProps as AntTableProps } from "antd";
import './CustomTableStyles.css';

export interface CustomTableProps<T> extends AntTableProps<T> { }

const CustomTable = <T extends object>({
  columns,
  dataSource,
  pagination,
  ...rest
}: CustomTableProps<T>) => {
  // Aplicar estilos globales a los títulos y celdas
  const styledColumns = columns?.map((column) => ({
    ...column,
    title: typeof column.title === "string" ? (
      <span style={{ fontSize: "12px" }}>{column.title}</span>
    ) : (
      column.title
    ), // Estilo para los títulos si son cadenas
    render: column.render
      ? (text: any, record: any, index: number) =>
        column.render!(text, record, index) // Mantener render personalizado si existe
      : (text: any) => <span style={{ fontSize: "12px" }}>{text}</span>, // Estilo para las celdas
  }));

  // Personalizar el texto de la paginación
  const paginationConfig = pagination
    ? {
      ...pagination,
      showTotal: (total: number, range: [number, number]) =>
        `${range[1] - range[0] + 1} de ${total} registros`, // Mostrar rango actual sobre el total
    }
    : false;

  return (
    <AntTable
      {...rest}
      columns={styledColumns}
      dataSource={dataSource}
      pagination={{
        ...paginationConfig,
        style: {
          margin: 0, // Eliminar márgenes externos
          padding: "10px 16px", // Agregar padding interno
          borderTop: "1px solid #e0e0e0", // Línea superior para separar la paginación
          backgroundColor: "#ffffff", // Fondo blanco para integrarlo con la tabla
          fontSize: "12px", // Tamaño de fuente 12px
          fontFamily: "'Open Sans', sans-serif", // Fuente Open Sans
        },
      }}
    />
  );
};

export default CustomTable;