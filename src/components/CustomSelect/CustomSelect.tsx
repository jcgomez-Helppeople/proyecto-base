import { Select as AntSelect, SelectProps } from "antd";

export interface CustomSelectProps<T> extends SelectProps<T> {
  label?: string; // Propiedad adicional opcional
}

const CustomSelect = <T,>(props: CustomSelectProps<T>) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {
        props.label &&
          <label
          style={{
            marginBottom: 4,
            fontSize: 12,
            fontWeight: 600,
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          {props.label}
        </label>
      }
      <AntSelect {...props} style={{fontSize: "12px"}} />
    </div>
  );
};

export default CustomSelect;