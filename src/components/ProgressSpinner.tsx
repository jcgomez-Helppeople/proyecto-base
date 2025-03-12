import { FC } from "react";
import { ProgressSpinner as ProgressSpinnerPrime } from "primereact/progressspinner";

type Props = {
    loading: boolean;
    width?: string;
    height?: string;
};

const ProgressSpinner: FC<Props> = ({ loading, width = '50px', height = '50px' }) => {
    return (
        <div className="flex items-center justify-center">
            {loading && <ProgressSpinnerPrime style={{ width, height }} strokeWidth="5" animationDuration="3s" />}
        </div>
    );
};

export default ProgressSpinner;
