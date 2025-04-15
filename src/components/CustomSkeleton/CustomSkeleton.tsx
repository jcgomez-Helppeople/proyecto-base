import React from "react";
import { Skeleton as AntSkeleton, SkeletonProps as AntSkeletonProps } from "antd";

export interface CustomSkeletonProps extends AntSkeletonProps {
  /**
   * Texto opcional para mostrar mientras se carga
   */
  loadingText?: string;
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({ loadingText, ...rest }) => {
  return (
    <div style={{ padding: "1rem" }}>
      {loadingText && <p>{loadingText}</p>}
      <AntSkeleton {...rest} />
    </div>
  );
};

export default CustomSkeleton;