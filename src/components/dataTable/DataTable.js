import { applySortFilter } from '@/utils/utils';
import { Icon } from '@iconify/react';
import React, { useMemo } from 'react';
import ReactPaginate from 'react-paginate';

const DataTable = ({
    page,
    count,
    loading,
    paginate,
    tableRows,
    rowsPerPage,
    ColumnsData,
    TableBodyRow,
    setCurrentPage,
    setRowsPerPage,
    filter = "",
    isSearchResult = false
}) => {
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage.selected);
    };

    const handleRowsPerPageChange = (event) => {
        setCurrentPage(0);
        setRowsPerPage(parseInt(event.target.value, 10));
    };

    const filteredRows = useMemo(
        () => applySortFilter(tableRows, filter),
        [tableRows, filter]
    );

    return (
        <div className={`w-full overflow-x-auto ${isSearchResult && "rounded-[8px]"}`}>
            <table className="min-w-full bg-white">
                <thead className="!rounded-[8px]">
                    <tr className="bg-dark-blue-gradient">
                        {ColumnsData.map((column, index) => (
                            <th
                                key={index}
                                className={`px-4 py-4 font-bold whitespace-nowrap tracking-wider ${column?.id === "action" && "opacity-0"} ${isSearchResult ? "text-center" : "text-left"} text-white font-inter text-h6 ${index === 0 && "rounded-l-[8px]"} ${ColumnsData?.length - 1 === index && "rounded-r-[8px]"}`}
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {!loading && filteredRows.map((item) => (
                        <TableBodyRow key={item._id} {...item} />
                    ))}
                    {loading &&
                        [...Array(rowsPerPage)].map((__, idx) => (
                            <tr key={idx} className="border-b">
                                {[...Array(ColumnsData?.length || 4)].map((_, index) => (
                                    <td key={index} className="px-4 py-7">
                                        <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
                {!loading && filteredRows?.length === 0 && (
                    <tbody>
                        <tr>
                            <td colSpan={ColumnsData.length + 1} className="pt-6 pb-3 font-semibold text-center">
                                No data found
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>
            {paginate && filteredRows?.length > 0 && (
                <div className="flex items-center justify-end w-full h-full gap-10 pt-4">
                    <div className="flex items-center whitespace-nowrap">
                        <span className="text-dark-gray font-inter text-md">Rows per page:</span>
                        <select
                            value={rowsPerPage}
                            onChange={(e) => handleRowsPerPageChange(e)}
                            className="px-1 py-1 ml-2 text-black border rounded font-inter text-md focus:outline-none"
                        >
                            {[5, 10, 25, 50, 100].map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2 text-dark-gray font-inter text-md">
                            {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, count)} of {count}
                        </span>
                        <ReactPaginate
                            previousLabel={<Icon icon="grommet-icons:form-previous" width="24" height="24" />}
                            nextLabel={<Icon icon="grommet-icons:form-next" width="24" height="24" />}
                            onPageChange={handlePageChange}
                            forcePage={page}
                            pageCount={Math.ceil(count / rowsPerPage)}
                            pageRangeDisplayed={0}
                            marginPagesDisplayed={0}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DataTable;
