import { Select as AntSelect } from "antd";

export interface CustomSelectProps<T> {
  label?: string; // Agrega la propiedad 'label' como opcional
  options: { value: T; label: string }[];
  placeholder?: string;
  value?: T;
  onChange?: (value: T) => void;
}

const CustomSelect = <T,>(props: CustomSelectProps<T>) => {
  return <AntSelect {...props} />;
};

export default CustomSelect;