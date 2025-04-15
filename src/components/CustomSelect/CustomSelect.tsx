import React from "react";
import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";

export interface CustomSelectProps<T = any> extends AntSelectProps<T> {
  /**
   * Etiqueta para mostrar como placeholder
   */
  placeholder?: string;
}

const CustomSelect = <T,>(props: CustomSelectProps<T>) => {
  return <AntSelect {...props} />;
};

export default CustomSelect;