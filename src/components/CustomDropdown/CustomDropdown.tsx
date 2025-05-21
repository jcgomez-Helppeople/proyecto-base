// src/components/CustomDropdown/CustomDropdown.tsx
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

const CustomDropdown = (({ 
  className,
  children,
  items,
  menu,
  ...props
}) => {
  // Si se proporcionan items y no menu, crear el menu a partir de los items
  const dropdownMenu = items ? { items } : menu;

  return (
    <AntDropdown
      className={`custom-dropdown ${className || ""}`}
      menu={dropdownMenu}
      {...props}
    >
      {children}
    </AntDropdown>
  );
}) as CustomDropdownComponent;

// Añadir el componente Button para mantener la misma API que Ant Design
CustomDropdown.Button = (props: any) => (
  <AntDropdown.Button
    className={`custom-dropdown-button ${props.className || ""}`}
    {...props}
  />
);

export default CustomDropdown;