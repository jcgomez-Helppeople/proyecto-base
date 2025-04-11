import React from 'react';
import { SkeletonProps } from 'primereact/skeleton';
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
declare const CustomSkeleton: React.FC<CustomSkeletonProps>;
export default CustomSkeleton;
