import React, { ForwardedRef } from 'react';
import { ListProps } from 'antd';
export type AntdListProps<T> = ListProps<T> & {
    style?: React.CSSProperties;
};
declare const CustomList: <T extends object>(props: AntdListProps<T> & {
    ref?: ForwardedRef<HTMLDivElement>;
}) => React.ReactElement;
export default CustomList;
