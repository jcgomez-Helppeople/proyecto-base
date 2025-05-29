import React, { ForwardedRef } from 'react';
import { List as AntList, ListProps } from 'antd';

export type AntdListProps<T> = ListProps<T> & {
  style?: React.CSSProperties;
};

const InternalList = <T extends object>(
  { className, style, ...props }: AntdListProps<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <AntList
      ref={ref}
      className={`${className}`}
      style={style}
      {...props}
    />
  );
};

const CustomList = React.forwardRef(InternalList) as unknown as <T extends object>(
  props: AntdListProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => React.ReactElement;

(CustomList as any).Item = AntList.Item;
(CustomList as any).ItemMeta = AntList.Item.Meta;

interface ListWithStaticComponents<T> extends React.FC<AntdListProps<T>> {
  Item: typeof AntList.Item;
  ItemMeta: typeof AntList.Item.Meta;
}

export default CustomList as unknown as ListWithStaticComponents<object>;