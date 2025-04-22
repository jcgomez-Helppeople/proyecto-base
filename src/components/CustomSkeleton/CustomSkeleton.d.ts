import React from "react";
import { SkeletonProps as AntSkeletonProps } from "antd";
export interface CustomSkeletonProps extends AntSkeletonProps {
    /**
     * Texto opcional para mostrar mientras se carga
     */
    loadingText?: string;
}
declare const CustomSkeleton: React.FC<CustomSkeletonProps>;
export default CustomSkeleton;
