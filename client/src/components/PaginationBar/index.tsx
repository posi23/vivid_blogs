import { PaginationProps } from "../../utils/types";
import { Button } from "..";
import styles from './styles.module.css';

const PaginationBar = ({ page, setPage, totalPages }: PaginationProps) => {

    const maxVisiblePages = 5; // Maximum number of visible pages excluding ellipsis
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    const pageNumbers: any[] = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    let visiblePages = pageNumbers;
    if (totalPages > maxVisiblePages) {
        const startPage = Math.max(1, page - halfVisiblePages);
        const endPage = Math.min(totalPages, page + halfVisiblePages);
        visiblePages = pageNumbers.slice(startPage - 1, endPage);
        if (startPage > 1) {
            visiblePages = [1, '...', ...visiblePages];
        }
        if (endPage < totalPages) {
            visiblePages = [...visiblePages, '...', totalPages];
        }
    }


    return (
        <div className={styles.container}>
            <Button
                onClick={() => setPage((old) => Math.max(old - 1, 1))}
                disabled={page === 1}
                className={styles.button}
            >
                Previous
            </Button>

            {visiblePages.map((pageNumber, index) => pageNumber === '...' ?
                (
                    <span key={index}>{pageNumber}</span>
                )
                :
                (
                    <Button
                        key={index}
                        onClick={() => setPage(pageNumber)}
                        className={page === pageNumber ? styles.active : ''}
                    >
                        {pageNumber}
                    </Button>
                ))}

            <Button
                onClick={() => setPage((old) => (!totalPages || old === totalPages ? old : old + 1))}
                disabled={page === totalPages}
                className={styles.button}
            >
                Next
            </Button>
        </div>
    );
}
export default PaginationBar;