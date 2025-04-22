import React from "react";
import { Input as AntInput } from "antd";
export interface CustomSearchInputProps extends React.ComponentProps<typeof AntInput.Search> {
}
declare const CustomSearchInput: React.FC<CustomSearchInputProps>;
export default CustomSearchInput;
