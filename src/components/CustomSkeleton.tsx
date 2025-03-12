// src/components/CustomSkeleton.tsx
import React from 'react';
import { Skeleton, SkeletonProps } from 'primereact/skeleton';

export interface CustomSkeletonProps extends SkeletonProps {
  /**
   * Indica si se debe mostrar el Skeleton (estado de carga) en lugar del contenido.
   */
  loading: boolean;
  /**
   * Contenido a renderizar una vez que loading sea false.
   */
  children: React.ReactNode;
}

const CustomSkeleton: React.FC<CustomSkeletonProps> = ({ loading, children, ...rest }) => {
  return <>{loading ? <Skeleton {...rest} /> : children}</>;
};

export default CustomSkeleton;
