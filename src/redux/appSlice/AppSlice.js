import { createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
    name: 'app',
    initialState: {
        showLogoutModal: false,
        showPaymentPlanModal: false,
        showMobileHeader: false,
    },
    reducers: {
        toggleLogoutModal: (state, action) => {
            state.showLogoutModal = action.payload;
        },
        togglePaymentPlanModal: (state, action) => {
            state.showPaymentPlanModal = action.payload;
        },
        toggleMobileHeader: (state, action) => {
            state.showMobileHeader = action.payload;
        },
    },
});

export const { toggleLogoutModal, togglePaymentPlanModal, toggleMobileHeader } = AppSlice.actions;
export default AppSlice.reducer;
