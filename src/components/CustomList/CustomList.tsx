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

// Componente con forwardRef y generic type
const CustomList = React.forwardRef(InternalList) as <T extends object>(
  props: AntdListProps<T> & { ref?: ForwardedRef<HTMLDivElement> }
) => React.ReactElement;

export default CustomList;