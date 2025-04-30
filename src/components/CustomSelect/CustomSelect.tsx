import { Select as AntSelect, SelectProps } from "antd";

export interface CustomSelectProps<T> extends SelectProps<T> {
  label?: string; // Propiedad adicional opcional
}

const CustomSelect = <T,>(props: CustomSelectProps<T>) => {
  return <AntSelect {...props} />;
};

export default CustomSelect;