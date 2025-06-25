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
            fontWeight: "var(--toolbar-title-font-weight)",
            fontSize: "var(--toolbar-labels-font-size)",
            fontFamily: "var(--toolbar-title-font-family)",
          }}
        >
          {props.label}
        </label>
      }
      <AntSelect {...props} style={{ fontSize: "var(--toolbar-labels-font-size)", minWidth: "160px" }} />
    </div>
  );
};

export default CustomSelect;