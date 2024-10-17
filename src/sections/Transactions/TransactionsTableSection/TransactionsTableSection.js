'use client';

import { useState } from 'react';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import ContainerCard from '@/components/containerCard/ContainerCard';
import DataTable from '@/components/dataTable/DataTable';
import InputDropdown from '@/components/inputDropdown/InputDropdown';
import InputSearch from '@/components/inputSearch/InputSearch';
import PurchaseCalendar from '@/components/purchaseCalendar/PurchaseCalendar';

const ColumnsData = [
    { id: 'details', label: 'Details' },
    { id: 'date', label: 'Date' },
    { id: 'transactionId', label: 'Transaction ID' },
    { id: 'quantity', label: 'Quantity' },
    { id: 'price', label: 'Price' },
];

const patientsDataDetails = [
    { _id: 1, details: "Complete Dataset", date: '2024-06-03T00:00:00Z', transactionId: '10927310927', quantity: '10,000', price: "100" },
    { _id: 2, details: "Non-Clinical Data", date: '2024-07-07T00:00:00Z', transactionId: '20938420938', quantity: '8,500', price: "200" },
    { _id: 3, details: "License Renewal", date: '2024-05-15T00:00:00Z', transactionId: '30948530949', quantity: '9,750', price: "150" },
    { _id: 4, details: "User Added", date: '2024-08-23T00:00:00Z', transactionId: '40959640960', quantity: '12,000', price: "300" },
    { _id: 5, details: "Complete Dataset", date: '2024-04-11T00:00:00Z', transactionId: '50960750971', quantity: '11,500', price: "250" },
    { _id: 6, details: "Non-Clinical Data", date: '2024-03-29T00:00:00Z', transactionId: '60971860982', quantity: '13,250', price: "350" },
    { _id: 7, details: "License Renewal", date: '2024-02-17T00:00:00Z', transactionId: '70982970993', quantity: '14,000', price: "400" },
    { _id: 8, details: "User Added", date: '2024-01-25T00:00:00Z', transactionId: '80993081004', quantity: '15,500', price: "450" },
    { _id: 9, details: "Complete Dataset", date: '2024-12-05T00:00:00Z', transactionId: '91004191015', quantity: '16,000', price: "500" },
    { _id: 10, details: "Non-Clinical Data", date: '2024-11-14T00:00:00Z', transactionId: '10115210216', quantity: '17,500', price: "550" },
    { _id: 11, details: "License Renewal", date: '2024-10-22T00:00:00Z', transactionId: '11126311227', quantity: '18,000', price: "600" },
    { _id: 12, details: "User Added", date: '2024-09-30T00:00:00Z', transactionId: '12137412238', quantity: '19,500', price: "650" },
    { _id: 13, details: "Complete Dataset", date: '2024-08-08T00:00:00Z', transactionId: '13148513249', quantity: '20,000', price: "700" },
    { _id: 14, details: "Non-Clinical Data", date: '2024-07-16T00:00:00Z', transactionId: '14159614260', quantity: '21,500', price: "750" },
    { _id: 15, details: "License Renewal", date: '2024-06-24T00:00:00Z', transactionId: '15160715271', quantity: '22,000', price: "800" },
    { _id: 16, details: "User Added", date: '2024-05-02T00:00:00Z', transactionId: '16171816282', quantity: '23,500', price: "850" },
    { _id: 17, details: "Complete Dataset", date: '2024-04-10T00:00:00Z', transactionId: '17182917293', quantity: '24,000', price: "900" },
    { _id: 18, details: "Non-Clinical Data", date: '2024-03-18T00:00:00Z', transactionId: '18194018304', quantity: '25,500', price: "950" },
    { _id: 19, details: "License Renewal", date: '2024-02-26T00:00:00Z', transactionId: '19205119315', quantity: '26,000', price: "1000" },
    { _id: 20, details: "User Added", date: '2024-01-04T00:00:00Z', transactionId: '20216220326', quantity: '27,500', price: "1050" }
];

const detailsoptions = [
    {
        key: "completeDataset",
        value: "Complete Dataset"
    },
    {
        key: "nonClinicalData",
        value: "Non-Clinical Data"
    },
    {
        key: "licenseRenewal",
        value: "License Renewal"
    },
    {
        key: "userAdded",
        value: "User Added"
    }]

const TransactionsTableSection = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filterChange, setFilterChange] = useState({
        details: "",
        date: "",
        search: ""
    });

    const handleStateChange = (key, value) => {
        setFilterChange(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    return (
        <div className="w-full">
            <ContainerCard styling="w-full flex flex-col gap-3">
                <div className="flex flex-col justify-between w-full gap-3 xl:flex-row">
                    <div className="flex items-center w-[20%]">
                        <div>
                            <StyledH4Heading font="text-light-blue-gradient">List</StyledH4Heading>
                        </div>
                    </div>
                    <div className="flex xl:flex-row flex-col items-center xl:w-[80%] gap-3 xl:gap-4">
                        <div className="w-full xl:w-[55%] flex xl:flex-row flex-col gap-3 xl:gap-4">
                            <div className="w-full">
                                <InputDropdown styling="rounded-[8px]" heading="Choose your Sex at Birth" value={filterChange.details} onChange={(value) => handleStateChange("details", value)} options={detailsoptions} placeholder="Details" />
                            </div>
                            <div className="z-10 w-full">
                                <PurchaseCalendar selectedDate={filterChange.date} setSelectedDate={(date) => handleStateChange("date", date)} />
                            </div>
                        </div>
                        <div className="w-full xl:w-[45%]">
                            <InputSearch searchIcon placeholder="Search by transaction ID" searchInput={filterChange.search} handleSearchChange={(e) => handleStateChange("search", e.target.value)} styling="rounded-[8px] px-5 py-4 text-lg placeholder:text-lg" />
                        </div>
                    </div>
                </div>
                <div>
                    <DataTable
                        ColumnsData={ColumnsData}
                        tableRows={patientsDataDetails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
                        applyPadding
                        page={page}
                        loading={false}
                        filter={filterChange}
                        rowsPerPage={rowsPerPage}
                        paginate
                        count={patientsDataDetails.length}
                        setCurrentPage={setPage}
                        setRowsPerPage={setRowsPerPage}
                        TableBodyRow={({ _id, details, date, transactionId, quantity, price }) => (
                            <tr key={_id} className="border-b">
                                <td className="px-4 text-lg whitespace-nowrap py-7 font-inter">{details}</td>
                                <td className="px-4 text-lg whitespace-nowrap py-7 font-inter">{new Date(date).toDateString()}</td>
                                <td className="px-4 text-lg whitespace-nowrap py-7 font-inter">{transactionId}</td>
                                <td className="px-4 text-lg whitespace-nowrap py-7 font-inter">{quantity}</td>
                                <td className="px-4 text-lg whitespace-nowrap py-7 font-inter">$ {price}</td>
                            </tr>
                        )}
                    />
                </div>
            </ContainerCard>
        </div>
    );
};

export default TransactionsTableSection;
