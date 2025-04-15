import React from "react";
import { Table as AntTable, TableProps as AntTableProps } from "antd";

export interface CustomTableProps<T> extends AntTableProps<T> {
  /**
   * Título opcional para la tabla
   */
  customTitle?: string;
}

const CustomTable = <T extends object>({ customTitle, ...rest }: CustomTableProps<T>) => {
  return (
    <div style={{ padding: "1rem" }}>
      {customTitle && <h2>{customTitle}</h2>}
      <AntTable {...rest} />
    </div>
  );
};

export default CustomTable;