import { FC } from "react";
type Props = {
    totalRecords: number;
    rows: number;
    onPageChange: (event: {
        first: number;
        rows: number;
        page: number;
        pageCount: number;
    }) => void;
};
declare const Paginator: FC<Props>;
export default Paginator;
