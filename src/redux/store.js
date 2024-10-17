import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Imports of reducers
import AppReducer from '@/redux/appSlice/AppSlice';
import FiltersReducer from '@/redux/filtersSlice/FiltersSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    app: AppReducer,
    globalFilters: FiltersReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);
