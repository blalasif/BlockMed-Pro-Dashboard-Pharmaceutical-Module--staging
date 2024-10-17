import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: {
        noOfPatients: [0, 100],
        ageRange: [0, 100],
        bmiRange: [0, 100],
        gender: "",
        diseases: [],
        bloodGroup: [],
        location: [],
        ethnicity: [],
    }
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        clearFilters: (state) => {
            state.filters = initialState.filters;
        }
    }
});

export const { setFilters, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
