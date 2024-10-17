import React, { useMemo } from 'react';
import { applySortFilter } from '@/utils/utils';

const DetailsTable = ({
    loading,
    tableRows,
    columnsData,
    filter,
    TableBodyRow,
}) => {
    const filteredRows = useMemo(
        () => applySortFilter(tableRows, filter),
        [tableRows, filter]
    );

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white table-fixed">
                <thead>
                    <tr className="bg-dark-blue-gradient">
                        {columnsData?.map((column, index) => (
                            <th
                                key={index}
                                className="px-4 font-bold tracking-wider text-center text-white py-7 text-h6 font-inter"
                                style={{ width: `${100 / columnsData.length}%` }}
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
                    {loading && [...Array(3)].map((__, idx) => (
                        <tr key={idx} className="border-2 border-light-gray">
                            {[...Array(columnsData.length)].map((_, index) => (
                                <td key={index} className="px-4 py-7">
                                    <div className="w-full h-4 bg-gray-300 rounded animate-pulse"></div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                {!loading && filteredRows.length === 0 && (
                    <tbody>
                        <tr>
                            <td colSpan={columnsData.length} className="py-6 font-semibold text-center border-2 border-light-gray">
                                No data found
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    );
};

export default DetailsTable;
