'use client';

import { useState } from 'react';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import ContainerCard from '@/components/containerCard/ContainerCard';
import DataTable from '@/components/dataTable/DataTable';
import Image from 'next/image';
import Link from 'next/link';
import InputDropdown from '@/components/inputDropdown/InputDropdown';
import InputSearch from '@/components/inputSearch/InputSearch';

const ColumnsData = [
    { id: 'patientId', label: 'Patient ID' },
    { id: 'age', label: 'Age' },
    { id: 'sexAtBirth', label: 'Sex At Birth' },
    { id: 'bloodGroup', label: 'Blood Group' },
    { id: 'disease', label: 'Disease' },
    { id: 'bmi', label: 'BMI' },
    { id: 'ethnicity', label: 'Ethnicity' },
    { id: 'action', label: 'View' },
];

const patientsDataDetails = [
    { _id: 1, patientId: 100000001, sexAtBirth: 'Male', age: '25', bloodGroup: "A+", disease: 'Flu', bmi: "22.5", ethnicity: "American", action: '' },
    { _id: 2, patientId: 100000002, sexAtBirth: 'Female', age: '34', bloodGroup: "B+", disease: 'Allergy', bmi: "19.8", ethnicity: "Asian", action: '' },
    { _id: 3, patientId: 100000003, sexAtBirth: 'Male', age: '45', bloodGroup: "AB+", disease: 'Back Pain', bmi: "24.1", ethnicity: "Hispanic", action: '' },
    { _id: 4, patientId: 100000004, sexAtBirth: 'Female', age: '52', bloodGroup: "O+", disease: 'Diabetes', bmi: "27.3", ethnicity: "African", action: '' },
    { _id: 5, patientId: 100000005, sexAtBirth: 'Male', age: '61', bloodGroup: "A-", disease: 'Headache', bmi: "20.0", ethnicity: "European", action: '' },
    { _id: 6, patientId: 100000006, sexAtBirth: 'Female', age: '29', bloodGroup: "B-", disease: 'Asthma', bmi: "23.5", ethnicity: "American", action: '' },
    { _id: 7, patientId: 100000007, sexAtBirth: 'Male', age: '38', bloodGroup: "AB-", disease: 'Fever', bmi: "21.2", ethnicity: "Asian", action: '' },
    { _id: 8, patientId: 100000008, sexAtBirth: 'Female', age: '47', bloodGroup: "O-", disease: 'Cough', bmi: "19.7", ethnicity: "Hispanic", action: '' },
    { _id: 9, patientId: 100000009, sexAtBirth: 'Male', age: '56', bloodGroup: "B+", disease: 'Nausea', bmi: "25.4", ethnicity: "African", action: '' },
    { _id: 10, patientId: 100000010, sexAtBirth: 'Female', age: '63', bloodGroup: "O-", disease: 'Joint Pain', bmi: "22.8", ethnicity: "European", action: '' },
    { _id: 11, patientId: 100000011, sexAtBirth: 'Male', age: '71', bloodGroup: "O+", disease: 'Headache', bmi: "24.9", ethnicity: "American", action: '' },
    { _id: 12, patientId: 100000012, sexAtBirth: 'Female', age: '28', bloodGroup: "AB-", disease: 'Fatigue', bmi: "20.3", ethnicity: "Asian", action: '' },
    { _id: 13, patientId: 100000013, sexAtBirth: 'Male', age: '39', bloodGroup: "AB+", disease: 'Cold', bmi: "22.1", ethnicity: "Hispanic", action: '' },
    { _id: 14, patientId: 100000014, sexAtBirth: 'Female', age: '46', bloodGroup: "A-", disease: 'Dizziness', bmi: "21.5", ethnicity: "African", action: '' },
    { _id: 15, patientId: 100000015, sexAtBirth: 'Male', age: '57', bloodGroup: "B-", disease: 'Headache', bmi: "26.0", ethnicity: "European", action: '' },
    { _id: 16, patientId: 100000016, sexAtBirth: 'Female', age: '32', bloodGroup: "O-", disease: 'Back Pain', bmi: "19.9", ethnicity: "American", action: '' },
    { _id: 17, patientId: 100000017, sexAtBirth: 'Male', age: '40', bloodGroup: "AB-", disease: 'Flu', bmi: "22.7", ethnicity: "Asian", action: '' },
    { _id: 18, patientId: 100000018, sexAtBirth: 'Female', age: '53', bloodGroup: "AB+", disease: 'Headache', bmi: "24.3", ethnicity: "Hispanic", action: '' },
    { _id: 19, patientId: 100000019, sexAtBirth: 'Male', age: '62', bloodGroup: "O+", disease: 'Cough', bmi: "21.8", ethnicity: "African", action: '' },
    { _id: 20, patientId: 100000020, sexAtBirth: 'Female', age: '30', bloodGroup: "B+", disease: 'Nausea', bmi: "23.4", ethnicity: "European", action: '' }
];

const sexAtBirth = [
    {
        key: "male",
        value: "Male"
    },
    {
        key: "female",
        value: "Female"
    }]

const bloodGroup = [
    {
        key: "a+",
        value: "A+"
    },
    {
        key: "b+",
        value: "B+"
    },
    {
        key: "ab+",
        value: "AB+"
    },
    {
        key: "o+",
        value: "O+"
    },
    {
        key: "a-",
        value: "A-"
    },
    {
        key: "b-",
        value: "B-"
    },
    {
        key: "o-",
        value: "O-"
    },
    {
        key: "ab-",
        value: "AB-"
    },]

const TableSection = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filterChange, setFilterChange] = useState({
        sexAtBirth: "",
        bloodGroup: "",
        ethnicity: "",
        disease: "",
        search: ""
    });

    const handleStateChange = (key, value) => {
        setFilterChange(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    return (
        <div className="relative w-full">
            <ContainerCard styling="w-full flex flex-col gap-3">
                <div className="flex flex-col w-full gap-3">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <StyledH4Heading font="text-light-blue-gradient">List Of Patients</StyledH4Heading>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <Image src="/assets/icons/listOfPatients_download.svg" alt="Icon" width="41" height="30" />
                            </div>
                            <div>
                                <Image src="/assets/icons/listOfPatients_csv.svg" alt="Icon" width="45" height="30" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full gap-3 xl:gap-4 xl:flex-row">
                        <div className="w-full xl:w-[70%] flex xl:flex-row flex-col gap-3 xl:gap-4">
                            <div className="w-full">
                                <InputDropdown styling="rounded-[8px]" heading="Choose your Sex at Birth" value={filterChange.sexAtBirth} onChange={(value) => handleStateChange("sexAtBirth", value)} options={sexAtBirth} placeholder="Sex at Birth" />
                            </div>
                            <div className="w-full">
                                <InputDropdown styling="rounded-[8px]" heading="Choose your Blood Group" value={filterChange.bloodGroup} onChange={(value) => handleStateChange("bloodGroup", value)} options={bloodGroup} placeholder="Blood Group" />
                            </div>
                            <div className="w-full">
                                <InputDropdown isSearchbar styling="rounded-[8px]" heading="Choose your Ethnicity" value={filterChange.ethnicity} onChange={(value) => handleStateChange("ethnicity", value)} options={sexAtBirth} placeholder="Ethnicity" />
                            </div>
                            <div className="w-full">
                                <InputDropdown isSearchbar styling="rounded-[8px]" heading="Choose your Disease" value={filterChange.disease} onChange={(value) => handleStateChange("disease", value)} options={sexAtBirth} placeholder="Disease" />
                            </div>
                        </div>
                        <div className="w-full xl:w-[30%]">
                            <InputSearch searchIcon placeholder="Search" searchInput={filterChange.search} handleSearchChange={(e) => handleStateChange("search", e.target.value)} styling="rounded-[8px] px-5 py-4 text-lg placeholder:text-lg" />
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
                        TableBodyRow={({ _id, patientId, sexAtBirth, age, bloodGroup, disease, bmi, ethnicity }) => (
                            <tr className="border-b">
                                <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{patientId}</td>
                                <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{age}</td>
                                <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{sexAtBirth}</td>
                                <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{bloodGroup}</td>
                                <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{disease}</td>
                                <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{bmi}</td>
                                <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">{ethnicity}</td>
                                <td className="px-4 text-lg py-7 font-inter whitespace-nowrap">
                                    <Link href={`/patient-data/complete-dataset/${_id}/patient/${patientId}`} className="flex items-center cursor-pointer">
                                        <Image src="/assets/icons/eye-button.svg" alt="edit" width={34} height={34} />
                                    </Link>
                                </td>
                            </tr>
                        )}
                    />
                </div>
            </ContainerCard>
        </div>
    );
};

export default TableSection;
