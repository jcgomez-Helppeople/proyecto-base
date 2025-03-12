import { useState } from "react";
import Paginator from "../components/Paginator";

const PaginatorExample = () => {
    const [page, setPage] = useState(0);
    console.log("Página actual:", page);
    
    const handlePageChange = (event: { first: number; rows: number; page: number; pageCount: number }) => {
        setPage(event.page);
    };

    return (
        <Paginator
            totalRecords={50}
            rows={10}
            onPageChange={handlePageChange}
        />
    );
};

export default PaginatorExample;
