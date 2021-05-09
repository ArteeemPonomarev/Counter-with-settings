import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../utils/localstorage-utils';


const rootReducer = combineReducers({
    counter: counterReducer
})


const persistedState = loadState();

export type AppStateType = ReturnType <typeof rootReducer>;


export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});