import React from 'react';
import { List as AntList, ListProps } from 'antd';
export type AntdListProps<T> = ListProps<T> & {
    style?: React.CSSProperties;
};
interface ListWithStaticComponents<T> extends React.FC<AntdListProps<T>> {
    Item: typeof AntList.Item;
    ItemMeta: typeof AntList.Item.Meta;
}
declare const _default: ListWithStaticComponents<object>;
export default _default;
