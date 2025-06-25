import React from "react";
import { Input as AntInput } from "antd";

export interface CustomSearchInputProps
  extends React.ComponentProps<typeof AntInput.Search> { }

const CustomSearchInput: React.FC<CustomSearchInputProps> = (props) => {
  return (
    <AntInput.Search
      {...props}
      style={{
        ...props.style,
        fontSize: "var(--toolbar-labels-font-size)",
      }}
    />
  );
};

export default CustomSearchInput;
