export const content = {
    sidebar: [
        {
            title: "Dashboard",
            dashboardIconActive: "/assets/icons/dashboardIcon-active.svg",
            dashboardIconNonActive: "/assets/icons/dashboardIcon-nonactive.svg",
            children: [
                {
                    title: "Dashboard",
                    link: "/dashboard"
                },
                {
                    title: "Patient Data",
                    link: "/patient-data",
                    tabName: "complete-dataset"
                },
                {
                    title: "Transactions",
                    link: "/transactions"
                },
            ]
        },
        {
            title: "Search the user database",
            link: "/search-user-database",
            searchIconActive: "/assets/icons/searchIcon-active.svg",
            searchIconNonActive: "/assets/icons/searchIcon-nonactive.svg"
        },
    ],
    header: [
        {
            title: "Home",
            link: "/dashboard",
            icon: "majesticons:home-line",
        },
        {
            title: "Profile",
            link: "/profile",
            icon: "iconamoon:profile",
        },
        {
            title: "Cards And Billing",
            link: "/cards-and-billing",
            icon: "solar:card-outline",
        },
        {
            title: "Security",
            link: "/security",
            icon: "mage:security-shield",
        },
        {
            title: "Logout",
            link: "/logout",
            icon: "ic:round-logout",
        }
    ],
    cardType: [
        {
            type: "mastercard",
            bgColor: 'bg-mastercard-gradient',
            svg: "/assets/icons/mastercard-card.svg"
        },
        {
            type: "visa",
            bgColor: 'bg-visa-gradient',
            svg: "/assets/icons/visa-card.svg"
        },
        {
            type: "unionpay",
            bgColor: 'bg-visa-gradient',
            svg: "/assets/icons/unionpay-card.svg"
        },
        {
            type: "americanexpress",
            bgColor: 'bg-americanexpress-gradient',
            svg: "/assets/icons/americanexpress-card.svg"
        },
        {
            type: "discover",
            bgColor: 'bg-discover-gradient',
            svg: "/assets/icons/discover-card.svg"
        },
        {
            type: "dinersclub",
            bgColor: 'bg-dinersclub-gradient',
            svg: "/assets/icons/dinersclub-card.svg"
        },
        {
            type: "bc",
            bgColor: 'bg-bc-gradient',
            svg: "/assets/icons/bc-card.svg"
        },
        {
            type: "jcb",
            bgColor: 'bg-jcb-gradient',
            svg: "/assets/icons/jcb-card.svg"
        },
    ],
    genderOptions: [
        { key: 1, label: 'Male', value: 'Male', icon: 'mdi:gender-male' },
        { key: 2, label: 'Female', value: 'Female', icon: 'mdi:gender-female' },
        { key: 3, label: 'Both', value: 'Both', icon: 'mdi:gender-transgender' }
    ],
    diseaseOptions: [
        {
            key: "Diabetes",
            value: "Diabetes",
            ticked: false
        },
        {
            key: "Hypertension",
            value: "Hypertension",
            ticked: false
        },
        {
            key: "Asthma",
            value: "Asthma",
            ticked: false
        },
        {
            key: "Heart Disease",
            value: "Heart Disease",
            ticked: true
        },
        {
            key: "Chronic Obstructive Pulmonary Disease (COPD)",
            value: "Chronic Obstructive Pulmonary Disease (COPD)",
            ticked: false
        },
        {
            key: "Cancer",
            value: "Cancer",
            ticked: false
        },
        {
            key: "Stroke",
            value: "Stroke",
            ticked: true
        },
        {
            key: "Alzheimer's Disease",
            value: "Alzheimer's Disease",
            ticked: false
        },
        {
            key: "Parkinson's Disease",
            value: "Parkinson's Disease",
            ticked: false
        },
        {
            key: "Multiple Sclerosis",
            value: "Multiple Sclerosis",
            ticked: false
        },
        {
            key: "Rheumatoid Arthritis",
            value: "Rheumatoid Arthritis",
            ticked: false
        },
        {
            key: "Osteoarthritis",
            value: "Osteoarthritis",
            ticked: false
        },
        {
            key: "Kidney Disease",
            value: "Kidney Disease",
            ticked: false
        },
        {
            key: "Liver Disease",
            value: "Liver Disease",
            ticked: false
        },
        {
            key: "Epilepsy",
            value: "Epilepsy",
            ticked: false
        },
        {
            key: "Tuberculosis",
            value: "Tuberculosis",
            ticked: false
        },
        {
            key: "HIV/AIDS",
            value: "HIV/AIDS",
            ticked: false
        },
        {
            key: "Influenza",
            value: "Influenza",
            ticked: false
        },
        {
            key: "Chronic Kidney Disease",
            value: "Chronic Kidney Disease",
            ticked: false
        },
        {
            key: "Psoriasis",
            value: "Psoriasis",
            ticked: false
        },
        {
            key: "Gastroesophageal Reflux Disease (GERD)",
            value: "Gastroesophageal Reflux Disease (GERD)",
            ticked: false
        }
    ],
    bloodGroupOptions: [
        {
            key: "A+",
            value: "A+",
            ticked: false
        },
        {
            key: "A-",
            value: "A-",
            ticked: false
        },
        {
            key: "B+",
            value: "B+",
            ticked: false
        },
        {
            key: "B-",
            value: "B-",
            ticked: false
        },
        {
            key: "AB+",
            value: "AB+",
            ticked: false
        },
        {
            key: "AB-",
            value: "AB-",
            ticked: false
        },
        {
            key: "O+",
            value: "O+",
            ticked: false
        },
        {
            key: "O-",
            value: "O-",
            ticked: false
        }
    ],
    locationOptions: [
        {
            key: "New York",
            value: "New York",
            ticked: false
        },
        {
            key: "Los Angeles",
            value: "Los Angeles",
            ticked: false
        },
        {
            key: "Chicago",
            value: "Chicago",
            ticked: false
        },
        {
            key: "Houston",
            value: "Houston",
            ticked: false
        },
        {
            key: "Phoenix",
            value: "Phoenix",
            ticked: false
        },
        {
            key: "Philadelphia",
            value: "Philadelphia",
            ticked: false
        },
        {
            key: "San Antonio",
            value: "San Antonio",
            ticked: false
        },
        {
            key: "San Diego",
            value: "San Diego",
            ticked: false
        },
        {
            key: "Dallas",
            value: "Dallas",
            ticked: false
        },
        {
            key: "San Jose",
            value: "San Jose",
            ticked: false
        }
    ],
    ethnicityOptions: [
        {
            key: "Hispanic or Latino",
            value: "Hispanic or Latino",
            ticked: false
        },
        {
            key: "White",
            value: "White",
            ticked: false
        },
        {
            key: "Black or African American",
            value: "Black or African American",
            ticked: false
        },
        {
            key: "Native American",
            value: "Native American",
            ticked: false
        },
        {
            key: "Asian",
            value: "Asian",
            ticked: false
        },
        {
            key: "Native Hawaiian or Pacific Islander",
            value: "Native Hawaiian or Pacific Islander",
            ticked: false
        },
        {
            key: "Multiracial",
            value: "Multiracial",
            ticked: false
        },
        {
            key: "Other",
            value: "Other",
            ticked: false
        }
    ],
    billingInformation: [
        {
            address: "Address",
            country: "Pakistan",
            postalCode: "1021 Westburry road, London, UK"
        },
        {
            address: "Address",
            country: "United States",
            postalCode: "1021 Westburry road, London, UK"
        },
        {
            address: "Address",
            country: "United Kingdom",
            postalCode: "1021 Westburry road, London, UK"
        },
    ],
    cardData: [
        {
            type: "bc",
            number: "6969",
            name: "Cool Dude",
            expiry: "12/24",
            isDefault: true
        },
        {
            type: "mastercard",
            number: "9696",
            name: "John Toe",
            expiry: "12/28",
            isDefault: false
        },
        {
            type: "dinersclub",
            number: "6996",
            name: "Bhosremon",
            expiry: "12/25",
            isDefault: false
        },
    ],
}