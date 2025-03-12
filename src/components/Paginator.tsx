import { FC, useState } from "react";
import { Paginator as PaginatorPrime } from "primereact/paginator";

type Props = {
    totalRecords: number;
    rows: number;
    onPageChange: (event: { first: number; rows: number; page: number; pageCount: number }) => void;
};

const Paginator: FC<Props> = ({ totalRecords, rows, onPageChange }) => {
    const [first, setFirst] = useState(0);

    const handlePageChange = (event: { first: number; rows: number; page: number; pageCount: number }) => {
        setFirst(event.first);
        onPageChange(event);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <PaginatorPrime
                first={first}
                rows={rows}
                totalRecords={totalRecords}
                onPageChange={handlePageChange}
                className="mt-4"
            />
        </div>
    );
};

export default Paginator;
