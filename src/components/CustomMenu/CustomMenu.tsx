// src/components/CustomMenu/CustomMenu.tsx
import React from "react";
import { Menu as AntMenu, MenuProps, MenuItemProps, SubMenuProps } from "antd";

export interface CustomMenuProps extends MenuProps {
  // Propiedades personalizadas adicionales si las necesitas
}

export interface CustomMenuItemProps extends MenuItemProps {}
export interface CustomSubMenuProps extends SubMenuProps {}

const CustomMenu: React.FC<CustomMenuProps> & {
  Item: React.FC<CustomMenuItemProps>;
  SubMenu: React.FC<CustomSubMenuProps>;
  ItemGroup: typeof AntMenu.ItemGroup;
  Divider: typeof AntMenu.Divider;
} = (props) => {
  return (
    <AntMenu
      className={`custom-menu ${props.className || ""}`}
      style={{
        fontSize: "12px",
        ...props.style,
      }}
      {...props}
    />
  );
};

// Subcomponentes
CustomMenu.Item = (props: CustomMenuItemProps) => (
  <AntMenu.Item {...props} className={`custom-menu-item ${props.className || ""}`} />
);

CustomMenu.SubMenu = (props: CustomSubMenuProps) => (
  <AntMenu.SubMenu {...props} className={`custom-menu-submenu ${props.className || ""}`} />
);

// Asignar los otros subcomponentes directamente
CustomMenu.ItemGroup = AntMenu.ItemGroup;
CustomMenu.Divider = AntMenu.Divider;

export default CustomMenu;