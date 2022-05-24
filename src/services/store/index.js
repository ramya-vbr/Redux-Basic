import { createStore,applyMiddleware } from "redux";
import rootReducer from '../reducer';
import reduxSaga from 'redux-saga';
import rootsaga from '../sagas';

export const getStore = () =>{
    const initialstate = {};
    const reduxsagaMiddleware = reduxSaga();
    const store = createStore(rootReducer,initialstate,applyMiddleware(reduxsagaMiddleware));
    reduxsagaMiddleware.run(rootsaga)
    return store;
}
