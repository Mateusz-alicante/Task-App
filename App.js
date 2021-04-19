import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import { PersistGate } from 'redux-persist/integration/react';

import MainRouter from './Containers/Routers/MainRouter'
import { Provider } from 'react-redux';
import { store, persistor } from './Utils/Redux/Store/Store'


export default function App() {
  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <MainRouter />
      </PersistGate>
    </Provider>
  )
}