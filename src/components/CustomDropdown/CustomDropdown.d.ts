import React from "react";
import { Dropdown as AntDropdown, DropdownProps, MenuProps } from "antd";
export interface CustomDropdownProps extends DropdownProps {
    /**
     * Opciones del menú desplegable
     */
    items?: MenuProps["items"];
    /**
     * Texto para el tooltip (opcional)
     */
    tooltip?: React.ReactNode;
}
interface CustomDropdownComponent extends React.FC<CustomDropdownProps> {
    Button: typeof AntDropdown.Button;
}
declare const CustomDropdown: CustomDropdownComponent;
export default CustomDropdown;
