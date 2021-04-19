import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import taskReducer from '../Reducers/Task';
import categoriesReducer from '../Reducers/Categories';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const rootReducer = combineReducers({
    taskReducer: persistReducer(persistConfig, taskReducer),
    // categoriesReducer: persistReducer(persistConfig, categoriesReducer)
    categoriesReducer: persistReducer(persistConfig, categoriesReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
