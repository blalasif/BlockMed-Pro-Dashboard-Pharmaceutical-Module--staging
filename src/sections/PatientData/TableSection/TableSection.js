'use client';

import { useState } from 'react';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import Button from '@/components/button/Button';
import ContainerCard from '@/components/containerCard/ContainerCard';
import DataTable from '@/components/dataTable/DataTable';
import PurchaseCalendar from '@/components/purchaseCalendar/PurchaseCalendar';
import Tabs from '@/components/tabs/Tabs';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const tabData = [
    {
        label: 'Complete Dataset',
        tabName: 'complete-dataset'
    },
    {
        label: 'Non-Clinical Data',
        tabName: 'non-clinical-data'
    }
];

const ColumnsData = [
    { id: 'purchasedOn', label: 'Purchased On' },
    { id: 'time', label: 'Time' },
    { id: 'quantity', label: 'Quantity' },
    { id: 'expiryDate', label: 'Expiry Date' },
    { id: 'action', label: 'View' },
];

const bankDetails = [
    { _id: 1, purchasedOn: '2024-06-03T00:00:00Z', time: '14:00', quantity: '10,000', expiryDate: '2025-06-03T00:00:00Z', action: '' },
    { _id: 2, purchasedOn: '2024-06-04T00:00:00Z', time: '15:00', quantity: '20,000', expiryDate: '2025-06-04T00:00:00Z', action: '' },
    { _id: 3, purchasedOn: '2024-06-05T00:00:00Z', time: '16:00', quantity: '30,000', expiryDate: '2025-06-05T00:00:00Z', action: '' },
    { _id: 4, purchasedOn: '2024-06-06T00:00:00Z', time: '17:00', quantity: '40,000', expiryDate: '2025-06-06T00:00:00Z', action: '' },
    { _id: 5, purchasedOn: '2024-06-07T00:00:00Z', time: '18:00', quantity: '50,000', expiryDate: '2025-06-07T00:00:00Z', action: '' },
    { _id: 6, purchasedOn: '2024-06-08T00:00:00Z', time: '19:00', quantity: '60,000', expiryDate: '2025-06-08T00:00:00Z', action: '' },
    { _id: 7, purchasedOn: '2024-06-09T00:00:00Z', time: '20:00', quantity: '70,000', expiryDate: '2025-06-09T00:00:00Z', action: '' },
    { _id: 8, purchasedOn: '2024-06-10T00:00:00Z', time: '21:00', quantity: '80,000', expiryDate: '2025-06-10T00:00:00Z', action: '' },
    { _id: 9, purchasedOn: '2024-06-11T00:00:00Z', time: '22:00', quantity: '90,000', expiryDate: '2025-06-11T00:00:00Z', action: '' },
    { _id: 10, purchasedOn: '2024-06-12T00:00:00Z', time: '23:00', quantity: '100,000', expiryDate: '2025-06-12T00:00:00Z', action: '' },
    { _id: 11, purchasedOn: '2024-06-13T00:00:00Z', time: '10:00', quantity: '110,000', expiryDate: '2025-06-13T00:00:00Z', action: '' },
    { _id: 12, purchasedOn: '2024-06-14T00:00:00Z', time: '11:00', quantity: '120,000', expiryDate: '2025-06-14T00:00:00Z', action: '' },
    { _id: 13, purchasedOn: '2024-06-15T00:00:00Z', time: '12:00', quantity: '130,000', expiryDate: '2025-06-15T00:00:00Z', action: '' },
    { _id: 14, purchasedOn: '2024-06-16T00:00:00Z', time: '13:00', quantity: '140,000', expiryDate: '2025-06-16T00:00:00Z', action: '' },
    { _id: 15, purchasedOn: '2024-06-17T00:00:00Z', time: '14:00', quantity: '150,000', expiryDate: '2025-06-17T00:00:00Z', action: '' },
    { _id: 16, purchasedOn: '2024-06-18T00:00:00Z', time: '15:00', quantity: '160,000', expiryDate: '2025-06-18T00:00:00Z', action: '' },
    { _id: 17, purchasedOn: '2024-06-19T00:00:00Z', time: '16:00', quantity: '170,000', expiryDate: '2025-06-19T00:00:00Z', action: '' },
    { _id: 18, purchasedOn: '2024-06-20T00:00:00Z', time: '17:00', quantity: '180,000', expiryDate: '2025-06-20T00:00:00Z', action: '' },
    { _id: 19, purchasedOn: '2024-06-21T00:00:00Z', time: '18:00', quantity: '190,000', expiryDate: '2025-06-21T00:00:00Z', action: '' },
    { _id: 20, purchasedOn: '2024-06-22T00:00:00Z', time: '19:00', quantity: '200,000', expiryDate: '2025-06-22T00:00:00Z', action: '' },
    { _id: 21, purchasedOn: '2024-06-23T00:00:00Z', time: '20:00', quantity: '210,000', expiryDate: '2025-06-23T00:00:00Z', action: '' },
    { _id: 22, purchasedOn: '2024-06-24T00:00:00Z', time: '21:00', quantity: '220,000', expiryDate: '2025-06-24T00:00:00Z', action: '' },
    { _id: 23, purchasedOn: '2024-06-25T00:00:00Z', time: '22:00', quantity: '230,000', expiryDate: '2025-06-25T00:00:00Z', action: '' },
    { _id: 24, purchasedOn: '2024-06-26T00:00:00Z', time: '23:00', quantity: '240,000', expiryDate: '2025-06-26T00:00:00Z', action: '' },
    { _id: 25, purchasedOn: '2024-06-27T00:00:00Z', time: '10:00', quantity: '250,000', expiryDate: '2025-06-27T00:00:00Z', action: '' },
    { _id: 26, purchasedOn: '2024-06-28T00:00:00Z', time: '11:00', quantity: '260,000', expiryDate: '2025-06-28T00:00:00Z', action: '' },
    { _id: 27, purchasedOn: '2024-06-29T00:00:00Z', time: '12:00', quantity: '270,000', expiryDate: '2025-06-29T00:00:00Z', action: '' },
    { _id: 28, purchasedOn: '2024-06-30T00:00:00Z', time: '13:00', quantity: '280,000', expiryDate: '2025-06-30T00:00:00Z', action: '' },
    { _id: 29, purchasedOn: '2024-07-01T00:00:00Z', time: '14:00', quantity: '290,000', expiryDate: '2025-07-01T00:00:00Z', action: '' },
    { _id: 30, purchasedOn: '2024-07-02T00:00:00Z', time: '15:00', quantity: '300,000', expiryDate: '2025-07-02T00:00:00Z', action: '' },
    { _id: 31, purchasedOn: '2024-07-03T00:00:00Z', time: '16:00', quantity: '310,000', expiryDate: '2025-07-03T00:00:00Z', action: '' },
    { _id: 32, purchasedOn: '2024-07-04T00:00:00Z', time: '17:00', quantity: '320,000', expiryDate: '2025-07-04T00:00:00Z', action: '' },
    { _id: 33, purchasedOn: '2024-07-05T00:00:00Z', time: '18:00', quantity: '330,000', expiryDate: '2025-07-05T00:00:00Z', action: '' },
    { _id: 34, purchasedOn: '2024-07-06T00:00:00Z', time: '19:00', quantity: '340,000', expiryDate: '2025-07-06T00:00:00Z', action: '' },
    { _id: 35, purchasedOn: '2024-07-07T00:00:00Z', time: '20:00', quantity: '350,000', expiryDate: '2025-07-07T00:00:00Z', action: '' },
    { _id: 36, purchasedOn: '2024-07-08T00:00:00Z', time: '21:00', quantity: '360,000', expiryDate: '2025-07-08T00:00:00Z', action: '' },
    { _id: 37, purchasedOn: '2024-07-09T00:00:00Z', time: '22:00', quantity: '370,000', expiryDate: '2025-07-09T00:00:00Z', action: '' },
    { _id: 38, purchasedOn: '2024-07-10T00:00:00Z', time: '23:00', quantity: '380,000', expiryDate: '2025-07-10T00:00:00Z', action: '' },
    { _id: 39, purchasedOn: '2024-07-11T00:00:00Z', time: '10:00', quantity: '390,000', expiryDate: '2025-07-11T00:00:00Z', action: '' },
    { _id: 40, purchasedOn: '2024-07-12T00:00:00Z', time: '11:00', quantity: '400,000', expiryDate: '2025-07-12T00:00:00Z', action: '' },
    { _id: 41, purchasedOn: '2024-07-13T00:00:00Z', time: '12:00', quantity: '410,000', expiryDate: '2025-07-13T00:00:00Z', action: '' },
    { _id: 42, purchasedOn: '2024-07-14T00:00:00Z', time: '13:00', quantity: '420,000', expiryDate: '2025-07-14T00:00:00Z', action: '' },
    { _id: 43, purchasedOn: '2024-07-15T00:00:00Z', time: '14:00', quantity: '430,000', expiryDate: '2025-07-15T00:00:00Z', action: '' },
    { _id: 44, purchasedOn: '2024-07-16T00:00:00Z', time: '15:00', quantity: '440,000', expiryDate: '2025-07-16T00:00:00Z', action: '' },
    { _id: 45, purchasedOn: '2024-07-17T00:00:00Z', time: '16:00', quantity: '450,000', expiryDate: '2025-07-17T00:00:00Z', action: '' },
    { _id: 46, purchasedOn: '2024-07-18T00:00:00Z', time: '17:00', quantity: '460,000', expiryDate: '2025-07-18T00:00:00Z', action: '' },
    { _id: 47, purchasedOn: '2024-07-19T00:00:00Z', time: '18:00', quantity: '470,000', expiryDate: '2025-07-19T00:00:00Z', action: '' },
    { _id: 48, purchasedOn: '2024-07-20T00:00:00Z', time: '19:00', quantity: '480,000', expiryDate: '2025-07-20T00:00:00Z', action: '' },
    { _id: 49, purchasedOn: '2024-07-21T00:00:00Z', time: '20:00', quantity: '490,000', expiryDate: '2025-07-21T00:00:00Z', action: '' },
    { _id: 50, purchasedOn: '2024-07-22T00:00:00Z', time: '21:00', quantity: '500,000', expiryDate: '2025-07-22T00:00:00Z', action: '' }
];

const bankDetailsNonClinical = [
    { _id: 1, purchasedOn: '2024-07-23T00:00:00Z', time: '08:00', quantity: '510,000', expiryDate: '2025-07-23T00:00:00Z', action: '' },
    { _id: 2, purchasedOn: '2024-07-24T00:00:00Z', time: '09:00', quantity: '520,000', expiryDate: '2025-07-24T00:00:00Z', action: '' },
    { _id: 3, purchasedOn: '2024-07-25T00:00:00Z', time: '10:00', quantity: '530,000', expiryDate: '2025-07-25T00:00:00Z', action: '' },
    { _id: 4, purchasedOn: '2024-07-26T00:00:00Z', time: '11:00', quantity: '540,000', expiryDate: '2025-07-26T00:00:00Z', action: '' },
    { _id: 5, purchasedOn: '2024-07-27T00:00:00Z', time: '12:00', quantity: '550,000', expiryDate: '2025-07-27T00:00:00Z', action: '' },
    { _id: 6, purchasedOn: '2024-07-28T00:00:00Z', time: '13:00', quantity: '560,000', expiryDate: '2025-07-28T00:00:00Z', action: '' },
    { _id: 7, purchasedOn: '2024-07-29T00:00:00Z', time: '14:00', quantity: '570,000', expiryDate: '2025-07-29T00:00:00Z', action: '' },
    { _id: 8, purchasedOn: '2024-07-30T00:00:00Z', time: '15:00', quantity: '580,000', expiryDate: '2025-07-30T00:00:00Z', action: '' },
    { _id: 9, purchasedOn: '2024-07-31T00:00:00Z', time: '16:00', quantity: '590,000', expiryDate: '2025-07-31T00:00:00Z', action: '' },
    { _id: 10, purchasedOn: '2024-08-01T00:00:00Z', time: '17:00', quantity: '600,000', expiryDate: '2025-08-01T00:00:00Z', action: '' },
    { _id: 11, purchasedOn: '2024-08-02T00:00:00Z', time: '18:00', quantity: '610,000', expiryDate: '2025-08-02T00:00:00Z', action: '' },
    { _id: 12, purchasedOn: '2024-08-03T00:00:00Z', time: '19:00', quantity: '620,000', expiryDate: '2025-08-03T00:00:00Z', action: '' },
    { _id: 13, purchasedOn: '2024-08-04T00:00:00Z', time: '20:00', quantity: '630,000', expiryDate: '2025-08-04T00:00:00Z', action: '' },
    { _id: 14, purchasedOn: '2024-08-05T00:00:00Z', time: '21:00', quantity: '640,000', expiryDate: '2025-08-05T00:00:00Z', action: '' },
    { _id: 15, purchasedOn: '2024-08-06T00:00:00Z', time: '22:00', quantity: '650,000', expiryDate: '2025-08-06T00:00:00Z', action: '' },
    { _id: 16, purchasedOn: '2024-08-07T00:00:00Z', time: '23:00', quantity: '660,000', expiryDate: '2025-08-07T00:00:00Z', action: '' },
    { _id: 17, purchasedOn: '2024-08-08T00:00:00Z', time: '08:00', quantity: '670,000', expiryDate: '2025-08-08T00:00:00Z', action: '' },
    { _id: 18, purchasedOn: '2024-08-09T00:00:00Z', time: '09:00', quantity: '680,000', expiryDate: '2025-08-09T00:00:00Z', action: '' },
    { _id: 19, purchasedOn: '2024-08-10T00:00:00Z', time: '10:00', quantity: '690,000', expiryDate: '2025-08-10T00:00:00Z', action: '' },
    { _id: 20, purchasedOn: '2024-08-11T00:00:00Z', time: '11:00', quantity: '700,000', expiryDate: '2025-08-11T00:00:00Z', action: '' },
    { _id: 21, purchasedOn: '2024-08-12T00:00:00Z', time: '12:00', quantity: '710,000', expiryDate: '2025-08-12T00:00:00Z', action: '' },
    { _id: 22, purchasedOn: '2024-08-13T00:00:00Z', time: '13:00', quantity: '720,000', expiryDate: '2025-08-13T00:00:00Z', action: '' },
    { _id: 23, purchasedOn: '2024-08-14T00:00:00Z', time: '14:00', quantity: '730,000', expiryDate: '2025-08-14T00:00:00Z', action: '' },
    { _id: 24, purchasedOn: '2024-08-15T00:00:00Z', time: '15:00', quantity: '740,000', expiryDate: '2025-08-15T00:00:00Z', action: '' },
    { _id: 25, purchasedOn: '2024-08-16T00:00:00Z', time: '16:00', quantity: '750,000', expiryDate: '2025-08-16T00:00:00Z', action: '' }
];

const TableSection = () => {
    const query = useSearchParams();
    const selectedView = query.get('tab') || 'complete-dataset';
    const [selectedDate, setSelectedDate] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    return (
        <div className="flex flex-col items-center w-full gap-5">
            <div className="w-full xl:w-[80%]">
                <Tabs tabs={tabData} selectedView={selectedView} />
            </div>
            <div className="w-full">
                <ContainerCard styling="w-full flex flex-col gap-3">
                    <div className="flex flex-col items-center justify-between w-full gap-3 xl:flex-row">
                        <div className="w-full xl:w-max">
                            <StyledH4Heading font="text-light-blue-gradient">List</StyledH4Heading>
                        </div>
                        <div className="w-full xl:w-[42.5%] xl:flex-row flex-col-reverse gap-3 flex xl:gap-4">
                            <div className="w-full">
                                <PurchaseCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                            </div>
                            <Link href="/search-user-database" className="w-full">
                                <Button font="text-white font-semibold text-lg flex items-center justify-center gap-1.5 !py-3" variant="bg-light-blue-gradient">
                                    <Icon icon="fluent:add-square-20-filled" width="34" height="34" />Buy New Data
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <DataTable
                            ColumnsData={ColumnsData}
                            tableRows={selectedView === "complete-dataset" ? bankDetails.slice(0, rowsPerPage) : bankDetailsNonClinical.slice(0, rowsPerPage)}
                            applyPadding
                            page={page}
                            loading={false}
                            filter={selectedDate}
                            rowsPerPage={rowsPerPage}
                            paginate
                            count={bankDetails.length}
                            setCurrentPage={setPage}
                            setRowsPerPage={setRowsPerPage}
                            TableBodyRow={({ _id, purchasedOn, time, quantity, expiryDate }) => (
                                <tr className="border-b">
                                    <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{new Date(purchasedOn).toLocaleDateString()}</td>
                                    <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{time}</td>
                                    <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{quantity}</td>
                                    <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{new Date(expiryDate).toLocaleDateString()}</td>
                                    <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">
                                        <Link href={`/patient-data/${selectedView}/${_id}`} className="flex items-center cursor-pointer">
                                            <Image src="/assets/icons/eye-button.svg" alt="edit" width={34} height={34} />
                                        </Link>
                                    </td>
                                </tr>
                            )}
                        />
                    </div>
                </ContainerCard>
            </div>
        </div>
    );
};

export default TableSection;
