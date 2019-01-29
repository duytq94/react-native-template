import React, {Component} from 'react'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import rootReducer from "../reducers";
import {applyMiddleware, createStore} from "redux";
import {persistReducer, persistStore} from 'redux-persist'
import rootSaga from "../sagas";
import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react'
import AppContainer from "../AppNavigation";

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

class RootContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppContainer/>
                </PersistGate>
            </Provider>
        );
    }
}

export default RootContainer
