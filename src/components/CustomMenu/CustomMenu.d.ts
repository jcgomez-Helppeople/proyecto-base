import React from "react";
import { Menu as AntMenu, MenuProps, MenuItemProps, SubMenuProps } from "antd";
export interface CustomMenuProps extends MenuProps {
}
export interface CustomMenuItemProps extends MenuItemProps {
}
export interface CustomSubMenuProps extends SubMenuProps {
}
declare const CustomMenu: React.FC<CustomMenuProps> & {
    Item: React.FC<CustomMenuItemProps>;
    SubMenu: React.FC<CustomSubMenuProps>;
    ItemGroup: typeof AntMenu.ItemGroup;
    Divider: typeof AntMenu.Divider;
};
export default CustomMenu;
